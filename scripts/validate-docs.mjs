import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const supportedPlatforms = ["Claude Code", "OpenCode", "Codex", "OpenClaw"];
const platformMatrixFiles = ["docs/platforms.md", "docs/install-model.md"];
const contractFiles = [
  "README.md",
  "README.zh-CN.md",
  "CHANGELOG.md",
  "docs/platforms.md",
  "docs/install-model.md",
  "docs/README.claude-code.md",
  "docs/README.opencode.md",
  "docs/README.codex.md",
  "docs/README.openclaw.md",
  ".opencode/INSTALL.md",
  ".codex/INSTALL.md",
  ".openclaw/INSTALL.md"
];
const requiredFiles = [
  "SKILL.md",
  "entry/SKILL.md",
  "transmission/SKILL.md",
  "coach/SKILL.md",
  ".claude-plugin/plugin.json",
  ".opencode/INSTALL.md",
  ".codex/INSTALL.md",
  ".openclaw/INSTALL.md",
  "docs/platforms.md",
  "docs/install-model.md",
  "docs/README.claude-code.md",
  "docs/README.opencode.md",
  "docs/README.codex.md",
  "docs/README.openclaw.md"
];
const skipLiteralReferences = new Set(["champion-heart/"]);

const errors = [];

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, results);
    } else {
      results.push(fullPath);
    }
  }
  return results;
}

function addError(message) {
  errors.push(message);
}

function isLikelyLocalReference(token) {
  if (token.startsWith("http://") || token.startsWith("https://") || token.startsWith("mailto:")) {
    return false;
  }

  if (!(token.includes("/") || token.startsWith("."))) {
    return false;
  }

  if (token.includes(" | ") || token.includes(" > ")) {
    return false;
  }

  return /(^\.{0,2}\/)|\.(md|json)$|\/$|\*/.test(token);
}

function validateReference(sourceFile, rawTarget) {
  const normalizedTarget = rawTarget.replace(/\\/g, "/").replace(/#.*$/, "");
  if (!normalizedTarget || skipLiteralReferences.has(normalizedTarget)) {
    return;
  }

  const sourceDir = path.dirname(sourceFile);
  const resolvedFromSource = path.resolve(sourceDir, normalizedTarget);
  const resolvedFromRoot = path.resolve(repoRoot, normalizedTarget);

  if (normalizedTarget.includes("*")) {
    const prefix = normalizedTarget.split("*")[0];
    const parentPath = prefix.endsWith("/") ? prefix.slice(0, -1) : path.posix.dirname(prefix);
    const resolvedParentFromSource = path.resolve(sourceDir, parentPath || ".");
    const resolvedParentFromRoot = path.resolve(repoRoot, parentPath || ".");
    if (!fs.existsSync(resolvedParentFromSource) && !fs.existsSync(resolvedParentFromRoot)) {
      addError(`${path.relative(repoRoot, sourceFile)} references missing parent path ${rawTarget}`);
    }
    return;
  }

  if (!fs.existsSync(resolvedFromSource) && !fs.existsSync(resolvedFromRoot)) {
    addError(`${path.relative(repoRoot, sourceFile)} references missing path ${rawTarget}`);
  }
}

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(repoRoot, file))) {
    addError(`Required file is missing: ${file}`);
  }
}

if (fs.existsSync(path.join(repoRoot, ".cursor-plugin", "plugin.json"))) {
  addError("Unsupported Cursor artifact still exists: .cursor-plugin/plugin.json");
}

for (const relativePath of contractFiles) {
  const fullPath = path.join(repoRoot, relativePath);
  const content = fs.readFileSync(fullPath, "utf8");

  if (/cursor/i.test(content)) {
    addError(`Unsupported platform mention found in ${relativePath}`);
  }
}

for (const relativePath of platformMatrixFiles) {
  const content = fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
  for (const platform of supportedPlatforms) {
    if (!content.includes(platform)) {
      addError(`${relativePath} does not mention supported platform: ${platform}`);
    }
  }
}

const allFiles = walk(repoRoot).filter((file) => file.endsWith(".md"));

for (const fullPath of allFiles) {
  const content = fs.readFileSync(fullPath, "utf8");
  const relativePath = path.relative(repoRoot, fullPath);

  for (const match of content.matchAll(/`([^`\n]+)`/g)) {
    const token = match[1].trim();
    if (isLikelyLocalReference(token)) {
      validateReference(fullPath, token);
    }
  }

  for (const match of content.matchAll(/\]\((?!https?:\/\/|mailto:)([^)\s]+)\)/g)) {
    validateReference(fullPath, match[1].trim());
  }

  if (/cursor/i.test(content)) {
    addError(`Unsupported platform mention found in ${relativePath}`);
  }
}

if (errors.length > 0) {
  console.error("Documentation validation failed:\n");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Documentation validation passed.");

const { Project, SyntaxKind } = require("ts-morph");
const path = require("path");

const project = new Project({
  tsConfigFilePath: path.join(__dirname, "..", "tsconfig.json"),
  skipAddingFilesFromTsConfig: true,
});

// adjust glob to the target folder
const glob = "src/sub-service-data/**/**/*.tsx";

project.addSourceFilesAtPaths(glob);

function shouldSkipLiteral(value) {
  if (!value || typeof value !== "string") return true;
  const v = value.trim();
  // skip URLs
  if (/^https?:\/\//i.test(v)) return true;
  // skip emails
  if (/@/.test(v) && /\.[a-z]{2,}$/i.test(v)) return true;
  // skip filepaths / filenames with extensions (images videos css js etc)
  if (/[\/\\][^\/\\]+\.[a-z0-9]{1,6}$/i.test(v)) return true;
  // skip strings that are single chars like '.' or single letters
  if (v.length <= 1) return true;
  return false;
}

for (const src of project.getSourceFiles()) {
  let changed = false;
  const stringLiterals = src.getDescendantsOfKind(SyntaxKind.StringLiteral);

  for (const lit of stringLiterals) {
    const original = lit.getLiteralValue();
    if (shouldSkipLiteral(original)) continue;

    const newVal = original.split(".").join("");
    if (newVal !== original) {
      lit.setLiteralValue(newVal);
      changed = true;
    }
  }

  if (changed) {
    console.log("Updated:", src.getFilePath());
    src.saveSync();
  }
}

console.log("Done");
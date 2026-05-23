const fs = require("fs");
const html = fs.readFileSync("index.html", "utf8");
const js = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const tmp = __dirname + "/_check.js";
fs.writeFileSync(tmp, js, "utf8");
const { execSync } = require("child_process");
try {
  execSync("node --check \"" + tmp + "\"", { stdio: "pipe" });
  console.log("SYNTAX: OK");
} catch(e) {
  const stderr = (e.stderr || "").toString();
  console.log("SYNTAX: FAIL");
  console.log("STDERR:", stderr.slice(0, 500));
}
// Don't unlink so we can inspect
console.log("JS saved to _check.js");
const easy = (html.match(/level:\s*"easy"/g) || []).length;
const med = (html.match(/level:\s*"medium"/g) || []).length;
const hard = (html.match(/level:\s*"hard"/g) || []).length;
console.log("easy:" + easy + " medium:" + med + " hard:" + hard + " total:" + (easy+med+hard));

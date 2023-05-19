const toc = require("markdown-toc");
const fs = require("fs");
const readme = fs.readFileSync("./readme.md", "utf8");

const filtered = ["Contributing"];

function getToc() {
  return toc(readme).json;
}

function getSections() {
  return getToc()
    .filter(
      (header) => header.lvl === 2 && filtered.indexOf(header.content) === -1
    )
    .map((header) => header.content);
}

module.exports = {
  getToc,
  getSections,
};

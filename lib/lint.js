const l = require("awesome-lint");

const md = [
  `#### Linting issues by [\`awesome-lint\`](https://github.com/sindresorhus/awesome-lint/tree/main)
  
Line | Rule | Error
| ---: | :----: | --- |`,
];

module.exports = l({ filename: "./readme.md" })
  .then((results) => results[0])
  .then((result) => {
    if (!result.messages || result.messages.length === 0)
      return { error: false };

    result.messages.forEach((message) =>
      md.push(
        `${message.line} | ${message.ruleId} | ${message.reason.replace(
          /(?![^\n]{1,50}$)([^\n]{1,50})\s/g,
          "$1<br>"
        )}`
      )
    );
    return {
      error: true,
      md: md.join("\n"),
      title: `Found ${result.messages.length} issue${
        result.messages.length > 1 ? "s" : ""
      }`,
    };
  });

const { getSections } = require("./list");
const types = require("./types.json");

module.exports = {
  types: Object.entries(types).map(([name, data]) => ({
    value: name,
    emoji: data.code,
    name: `${data.emoji} ${name}: ${data.description}`,
  })),
  scopes: getSections(),
  useEmoji: true,
  scopeOverrides: {
    feat: ["feaaaaat"],
  },
  allowCustomScopes: false,
  allowEmptyScopes: true,
  skipQuestions: ["breaking"],
};

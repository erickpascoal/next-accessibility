// Global helper file (axe-helper.js)
const { configureAxe } = require("jest-axe");

const axe = configureAxe({
  rules: {
    // for demonstration only, don't disable rules that need fixing.
    "image-alt": { enabled: true }, // desabilite para testar
    region: { enabled: false },
  },
});

module.exports = axe;

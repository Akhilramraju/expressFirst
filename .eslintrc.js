module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    "linebreak-style": 0,
    "comma-dangle": 0,
    quotes: [2, "double", { avoidEscape: false }],
  },
};

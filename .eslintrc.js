module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:vue/recommended"],
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    "vue/attribute-hyphenation": 0,
    "vue/attributes-order": [
      0,
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          "UNIQUE",
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT"
        ]
      }
    ],
    "space-before-function-paren": 0
  }
};

// @ts-check

// @ts-ignore -- No types are available for this plugin.
import { flatConfigs as eslintConfigsImport } from "eslint-plugin-import";
import globals from "globals";
import { config, parser as eslintParserTs } from "typescript-eslint";

/** @type {import('eslint').ESLint.Plugin} */
const eslintPluginImport = eslintConfigsImport.recommended.plugins.import;

export default config({
  files: ["src/*.ts", "src/**/*.ts"],
  plugins: {
    import: eslintPluginImport,
  },
  languageOptions: {
    globals: { ...globals.browser, ...globals.es2025 },
    parser: eslintParserTs,
    parserOptions: {
      ecmaVersion: "latest",
      projectService: true,
      sourceType: "module",
      tsconfigRootDir: import.meta.dirname,
    },
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      typescript: {
        project: ["src/nested/tsconfig.json", "src/tsconfig.json"],
      },
      node: false,
    },
  },
  rules: { "import/no-unresolved": "error" },
});

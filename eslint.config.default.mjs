// @ts-check

// @ts-ignore -- No types are available for this plugin.
import { flatConfigs as eslintConfigsImport } from "eslint-plugin-import";
import { config, parser as eslintParserTs } from "typescript-eslint";

/** @type {import('eslint').ESLint.Plugin} */
const eslintPluginImport = eslintConfigsImport.recommended.plugins.import;

export default config({
  plugins: {
    import: eslintPluginImport,
  },
  languageOptions: {
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

import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // Defina os arquivos que o ESLint deve verificar
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
    },
    extends: ["@rocketseat/eslint-config/react"] // Estendendo a config do Rocketseat
  },
];

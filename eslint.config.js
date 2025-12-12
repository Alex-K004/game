// eslint.config.js
import js from "@eslint/js";
import globals from "globals";

export default [
  // Конфигурация для исходных файлов (ES модули)
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-console": "warn",
      "no-unused-vars": ["error", {
        "varsIgnorePattern": "^_",
        "argsIgnorePattern": "^_"
      }]
    }
  },
  
  // Конфигурация для конфигурационных файлов (CommonJS)
  {
    files: ["webpack.config.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",  // Важно: CommonJS для Node.js файлов
      globals: {
        ...globals.node
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-console": "off"
    }
  }
];
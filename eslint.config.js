// eslint.config.js
import js from "@eslint/js";
import globals from "globals";

export default [
  // Конфигурация для файлов в папке src/ (браузерный JavaScript)
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser  // добавляет document, window, setInterval и т.д.
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-console": "warn",
      "no-unused-vars": ["error", {
        "varsIgnorePattern": "^_",  // игнорировать переменные, начинающиеся с _
        "argsIgnorePattern": "^_"   // игнорировать аргументы, начинающиеся с _
      }]
    }
  },
  
  // Конфигурация для файлов в папке dist/ (игнорировать скомпилированные файлы)
  {
    files: ["dist/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    },
    rules: {
      "no-undef": "off",      // отключаем проверку undefined переменных
      "no-unused-vars": "off" // отключаем проверку неиспользуемых переменных
    }
  },
  
  // Конфигурация для конфигурационных файлов Webpack (Node.js)
  {
    files: ["webpack*.js", "**/webpack/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",  // важно: CommonJS для Node.js файлов
      globals: {
        ...globals.node  // добавляет require, module, __dirname и т.д.
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-console": "warn"
    }
  }
];
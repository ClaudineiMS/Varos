// eslint.config.mjs
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  // --- IGNORE FILES GLOBALMENTE ---
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/build/**",
      "**/*.test.*",
      "**/*.spec.*",
      "**/__tests__/**",
      "jest.config.ts",
    ],
  },

  // --- BASE ESLINT RECOMMENDED ---
  js.configs.recommended,

  // --- CONFIGURAÇÕES DO PROJETO ---
  {
    files: ["src/**/*.{js,ts,jsx,tsx}"],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        console: "readonly",
        window: "readonly",
        document: "readonly",
        performance: "readonly",
        FormData: "readonly",
        fetch: "readonly",
        process: "readonly",
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "@typescript-eslint": ts,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      "unused-imports": unusedImports,
    },

    rules: {
      // --- ESTILO DE CÓDIGO ---
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "prefer-arrow-callback": "error",
      "prefer-template": "error",
      camelcase: ["error", { properties: "always" }],

      // --- LEGIBILIDADE / CLEAN CODE ---
      "max-lines-per-function": ["warn", 150],
      complexity: ["warn", 15],
      "no-console": "warn",
      "no-nested-ternary": "warn",
      "prefer-const": "warn",
      "react/display-name": "warn",

      // --- IMPORTAÇÃO E ORGANIZAÇÃO ---
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
          ],
          "newlines-between": "always",
        },
      ],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
      ],

      // --- REACT E HOOKS ---
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // --- TYPESCRIPT ---
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],

      // --- ACESSIBILIDADE ---
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/no-static-element-interactions": "warn",
      "jsx-a11y/aria-role": "warn",
      "jsx-a11y/no-autofocus": "warn",
    },

    settings: {
      react: { version: "detect" },
    },
  },
];

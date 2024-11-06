import globals from "globals";
import pluginJs from "@eslint/js";
import stylisticJs from '@stylistic/eslint-plugin-js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.node },
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules:{
      "@stylistic/js/indent": ["error", 2],
      "semi": "error"
    }
  },
  pluginJs.configs.recommended,
];
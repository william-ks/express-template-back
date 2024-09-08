import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import tsEslint from "typescript-eslint";

export default tsEslint.config(
	pluginJs.configs.recommended,
	...tsEslint.configs.recommended,
	eslintPluginPrettier,
	{
		files: ["**/*.{js,mjs,cjs,ts,tsx}"],
		languageOptions: {
			globals: globals.node,
			parser: tsEslint.parser,
		},
		rules: {
			quotes: ["error", "double"],
			"capitalized-comments": ["error", "always"],
			eqeqeq: "error",
			"no-unused-vars": "error",
			"no-console": "warn",
			"no-constant-condition": "warn",
		},
	},
);

// eslint.config.js
import js from "@eslint/js";

export default [
	js.configs.recommended,
	{
		languageOptions: {
			globals: {
				document: true,
				setTimeout: true
			},
		},
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "off"
		}
	}
];

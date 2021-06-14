module.exports = {
	env: {
		es2021: true,
		browser: true,
	},
	extends: ['xo', 'xo-react', 'xo-typescript'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/comma-dangle': 'off',
		'@typescript-eslint/triple-slash-reference': 'off',
		'react/jsx-tag-spacing': 'off',
	},
	ignorePatterns: ['dist'],
};

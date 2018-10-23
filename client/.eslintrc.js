module.exports = {
	root: true,
	env: {
		node: true,
	},
	plugins: ['vue'], // enable vue plugin
	extends: ['plugin:vue/essential', '@vue/airbnb', 'prettier'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};

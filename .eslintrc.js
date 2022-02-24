module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		"es6": true
	},
	'extends': ['eslint:recommended'],
	'parserOptions': {
		// 'ecmaVersion': 'latest'
		"ecmaVersion": 2017
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-undef': 'off'
	}
};

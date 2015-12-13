module.exports = {
	documentation: 'http://eslint.org/docs/rules',
	options: {
		configFile: '.eslintrc',
		format: require('eslint-tap')
	},
	dev: {
		src: '<%= projectPaths.linterJs %>'
	},
	dist: {
		src: '<%= projectPaths.linterJs %>'
	}
};

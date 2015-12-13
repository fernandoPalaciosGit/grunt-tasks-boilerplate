module.exports = {
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

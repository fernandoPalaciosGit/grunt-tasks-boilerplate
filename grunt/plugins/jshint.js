module.exports = {
	'documentation': 'http://jshint.com/docs/options',
	options: {
		jshintrc: '.jshintrc',
		reporter: require('jshint-stylish')
	},
	dev: '<%= projectPaths.linterJs %>',
	dist: '<%= projectPaths.linterJs %>'
};

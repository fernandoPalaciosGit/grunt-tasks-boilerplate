module.exports = {
	options: {
		jshintrc: '.jshintrc',
		reporter: require('jshint-stylish')
	},
	dev: '<%= projectPaths.linterJs %>',
	dist: '<%= projectPaths.linterJs %>'
};

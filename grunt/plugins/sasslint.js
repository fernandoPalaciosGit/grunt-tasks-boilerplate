module.exports = {
	options: {
		configFile: '.sass-lint.yml',
		force : false
	},
	dev: '<%= projectPaths.linterCss %>',
	dist: '<%= projectPaths.linterCss %>'
};

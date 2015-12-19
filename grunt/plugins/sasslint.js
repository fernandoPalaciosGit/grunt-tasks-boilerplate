module.exports = {
	documentation: [
		'https://github.com/sasstools/sass-lint/tree/develop/docs/rules',
		'github.com/CSSLint/csslint/wiki/Rules'
	],
	options: {
		configFile: '<%= projectPaths.gruntRuntimeConfig %>/.sass-lint.yml',
		force : false
	},
	dev: '<%= projectPaths.linterCss %>',
	dist: '<%= projectPaths.linterCss %>'
};

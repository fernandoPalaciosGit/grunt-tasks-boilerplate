module.exports = {
	documentation: 'http://jshint.com/docs/options',
	options: {
		jshintrc: '<%= projectPaths.gruntRuntimeConfig %>/.jshintrc',
		reporter: require('jshint-stylish')
	},
	dev: '<%= projectPaths.linterJs %>',
	devEs6: {
		options: {
			jshintrc: '<%= projectPaths.gruntRuntimeConfig %>/.jshintrc-es6'
		},
		files: {
			src: '<%= projectPaths.linterJsEs6 %>'
		}
	},
	dist: '<%= projectPaths.linterJs %>',
	distEs6: {
		options: {
			jshintrc: '<%= projectPaths.gruntRuntimeConfig %>/.jshintrc-es6'
		},
		files: {
			src: '<%= projectPaths.linterJsEs6 %>'
		}
	}
};

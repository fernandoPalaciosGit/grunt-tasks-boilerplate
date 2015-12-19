module.exports = {
	documentation: 'http://eslint.org/docs/rules',
	options: {
		configFile: '<%= projectPaths.gruntRuntimeConfig %>/.eslintrc',
		format: require('eslint-tap')
	},
	dev: {
		src: '<%= projectPaths.linterJs %>'
	},
	devEs6: {
		options: {
			configFile: '<%= projectPaths.gruntRuntimeConfig %>/.eslintrc-es6'
		},
		files: {
			src: '<%= projectPaths.linterJsEs6 %>'
		}
	},
	dist: {
		src: '<%= projectPaths.linterJs %>'
	},
	distEs6: {
		options: {
			configFile: '<%= projectPaths.gruntRuntimeConfig %>/.eslintrc-es6'
		},
		files: {
			src: '<%= projectPaths.linterJsEs6 %>'
		}
	}
};

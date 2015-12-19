module.exports = {
	options: {
		logConcurrentOutput: false
	},
	jsLinters: {
		tasks: [
			'newer:jsonlint:<%= taskEnvironment %>',
			'newer:jshint:<%= taskEnvironment %>',
			'newer:jshint:<%= taskEnvironment %>Es6',
			'newer:jscs:<%= taskEnvironment %>',
			'newer:eslint:<%= taskEnvironment %>',
			'newer:eslint:<%= taskEnvironment %>Es6'
		]
	},
	jsCompile: {
		tasks: ['babel:<%= taskEnvironment %>']
	},
	jsCompress: {
		tasks: [/*uglify*/]
	},
	htmlCompress: {
		tasks: [/*grunt-contrib-htmlmin, grunt-line-remover*/]
	},
	cssLinters: {
		tasks: ['newer:sasslint:<%= taskEnvironment %>']
	},
	cssOptimize: {
		tasks: ['newer:postcss:<%= taskEnvironment %>']
	},
	cssCompile: {
		tasks: ['sass:<%= taskEnvironment %>']
	},
	cssCompress: {
		tasks: [/*grunt-revizor, grunt-contrib-cssmin*/]
	},
	deployDependencies: {
		tasks: ['shell:installPackages', 'shell:installHooks']
	},
	deployProject: {
		options: {
			limit: 1
		},
		tasks: ['shell:startServer', 'shell:openProject']
	}
};

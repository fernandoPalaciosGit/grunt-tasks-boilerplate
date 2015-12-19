module.exports = {
	documentation: 'http://babeljs.io/docs/usage/options',
	options: '<%= projectPaths.gruntRuntimeConfig %>/.babelrc',
	dev: {
		files: [{
			expand: true,
			cwd: '<%= projectPaths.compileJs.cwd %>',
			src: ['**/*es6.js'],
			extDot: 'last',
			dest: '<%= projectPaths.compileJs.dirDev %>',
			ext: '.js'
		}]
	},
	dist: {
		files: [{
			expand: true,
			cwd: '<%= projectPaths.compileJs.cwd %>',
			src: ['**/*es6.js'],
			extDot: 'last',
			dest: '<%= projectPaths.compileJs.dirProd %>',
			ext: '.js'
		}]
	}
};

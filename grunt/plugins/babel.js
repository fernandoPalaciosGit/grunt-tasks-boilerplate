module.exports = {
	options: {
		sourceMap: false
	},
	dev: {
		files: [{
			expand: true,
			cwd: '<%= projectPaths.compileJs.cwd %>',
			src: ['**/*.{js,es6}'],
			extDot: 'last',
			dest: '<%= projectPaths.compileJs.dirDev %>',
			ext: '.js'
		}]
	},
	dist: {
		files: [{
			expand: true,
			cwd: '<%= projectPaths.compileJs.cwd %>',
			src: ['**/*.{js,es6}'],
			extDot: 'last',
			dest: '<%= projectPaths.compileJs.dirProd %>',
			ext: '.js'
		}]
	}
};

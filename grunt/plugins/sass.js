module.exports = {
	options: {
		sourceMap: false,
		outputStyle: 'expanded'
	},
	dev: {
		files: [{
			expand: true,
			cwd: '<%= projectPaths.compileCss.cwd %>',
			src: ['**/*.{scss,sass}'],
			extDot: 'last',
			dest: '<%= projectPaths.compileCss.dirDev %>',
			ext: '.css'
		}]
	},
	dist: {
		options: {
    },
		files: [{
			expand: true,
			cwd: '<%= projectPaths.compileCss.cwd %>',
			src: ['**/*.{scss,sass}'],
			extDot: 'last',
			dest: '<%= projectPaths.compileCss.dirProd %>',
			ext: '.css'
		}]
	}
};

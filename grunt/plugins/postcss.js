module.exports = {
	options: {
		map: false,
		failOnError: false,
		processors: [
			require('autoprefixer')({
				browsers: ['> 0.5%', 'last 2 versions'], //https://github.com/ai/browserslist#queries
				cascade: false,
				add: true,
				remove: true
			})
		]
	},
	dev: {
		src: '<%= projectPaths.compileCss.dirDev %>/*.css'
	},
	dist: {
		src: '<%= projectPaths.compileCss.dirProd %>/*.css'
	}
};

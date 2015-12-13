module.exports = {
	options: {
		config: '.jscsrc',
		verbose: false,
		fix: false
	},
	dev: {
		files: {
			src: '<%= projectPaths.linterJs %>'
		}
	},
	dist: {
		files: {
			src: '<%= projectPaths.linterJs %>'
		}
	}
};

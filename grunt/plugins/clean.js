module.exports = {
	dev: ['<%= projectPaths.development.publicDir %>'],
	devJs: ['<%= projectPaths.compileJs.dirDev %>'],
	devCss: ['<%= projectPaths.compileCss.dirDev %>'],
	dist: ['<%= projectPaths.production.publicDir %>']
};

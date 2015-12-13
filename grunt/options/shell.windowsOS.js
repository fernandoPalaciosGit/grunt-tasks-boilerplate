module.exports = {
	installPackages: {
		command: [
			'npm install',
			'bower install --save-exact'
		].join(' && ')
	},
	openProject: {
		command: [
			'start chrome \"<%= getProjectPath(\'development\') %>\"',
			'exit'
		].join(' && ')
	},
	installHooks: {
		command: 'cp git-hooks/pre-commit <%= projectPaths.git %>'
	},
	startServer: {
		command: ''
	}
};

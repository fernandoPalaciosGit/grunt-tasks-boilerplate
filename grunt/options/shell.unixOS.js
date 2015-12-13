module.exports = {
	installPackages: {
		command: [
			'npm install',
			'bower install --save-exact'
		].join(' && ')
	},
	openProject: {
		command: [
			'googlePath=$(which google-chrome)',
			'${googlePath} \"<%= getProjectPath(\'development\') %>\"',
			'exit'
		].join(' && ')
	},
	installHooks: {
		command: [
			'cp -a git-hooks/. <%= projectPaths.git %>',
			'chmod +x -R <%= projectPaths.git %>'
		].join(' && ')
	},
	startServer: {
		command: [
			'sudo <%= projectPaths.apache.unix %> startapache',
			'sudo <%= projectPaths.apache.unix %> startmysql'
		].join(' && ')
	},
	stopServer: {
		command: 'sudo <%= projectPaths.apache.unix %> stop'
	}
};

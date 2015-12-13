(function () {
	'use strict';

	var pluginProperties = {
		config: {
			src: 'grunt/plugins/*.js'
		},
		today: '<%= grunt.template.today(\'yyyy-mm-dd\') %>',
		packageJson: '<% grunt.file.readJSON(\'package.json\') %>',
		taskEnvironment: null,
		projectPaths: {
			development: {
				host: '127.0.0.1',
				port: '80',
				root: 'theypoll',
				publicDir: 'public'
			},
			production: {
				host: 'dev.host.com',
				port: '80',
				root: '/',
				publicDir: 'dist'
			},
			apache: {
				unix: '/opt/lampp/lampp',
				windows: ''
			},
			git: '.git/hooks/',
			linterJs: [
				'Gruntfile.js',
				'grunt/**/*.js',
				'application/**/*.js'
			],
			compileJs: {
				cwd: 'application/js',
				dirDev: '<%= projectPaths.development.publicDir %>/js',
				dirProd: '<%= projectPaths.production.publicDir %>/js'
			},
			linterCss: [
				'application/style/**/*.scss'
			],
			compileCss: {
				cwd: 'application/style/include',
				dirDev: '<%= projectPaths.development.publicDir %>/style',
				dirProd: '<%= projectPaths.production.publicDir %>/style'
			}
		},
		getProjectPath: function (env) {
			var projectPaths = this.projectPaths[env] || this.projectPaths.development;

			return projectPaths.host + ':' +
					projectPaths.port + '/' +
					projectPaths.root + '/' +
					projectPaths.publicDir;
		}
	};

	module.exports = pluginProperties;
}());

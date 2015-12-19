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
				root: 'grunt-tasks-boilerplate',
				publicDir: 'public', // for deployment in local environment
				application: 'application' // for develope
			},
			production: {
				host: 'dev.host.com',
				port: '80',
				root: '/',
				publicDir: 'dist' // for deployment in real environment
			},
			apache: {
				unix: '/opt/lampp/lampp',
				windows: ''
			},
			git: '.git/hooks/',
			gruntRuntimeConfig: 'grunt/runtime-config',
			linterJs: [
				'Gruntfile.js',
				'grunt/**/*.js',
				'<%= projectPaths.development.application %>/**/*.js',
				'!<%= projectPaths.development.application %>/**/*.es6.js'
			],
			linterJsEs6: [
				'<%= projectPaths.development.application %>/**/*.es6.js'
			],
			validateJson: [
				'grunt/**/*.json',
				'grunt/**/.{*rc,*rc-es6}',
				'<%= projectPaths.development.application %>/**/*.json',
				'bower.json'
			],
			validateYaml: [
				'grunt/**/.*yml'
			],
			compileJs: {
				cwd: '<%= projectPaths.development.application %>/js',
				dirDev: '<%= projectPaths.development.publicDir %>/js',
				dirProd: '<%= projectPaths.production.publicDir %>/js'
			},
			linterCss: [
				'<%= projectPaths.development.application %>/style/**/*.scss'
			],
			compileCss: {
				cwd: '<%= projectPaths.development.application %>/style/include',
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

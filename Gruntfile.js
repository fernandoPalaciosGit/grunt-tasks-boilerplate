/**
 * @namespace
 * @property {object} grunt.config.data
 *           any configuration property plugins
 * @property {boolean}  options.files.expand
 *           enable dynamic source files by glob path
 * @property {string}  options.files.extDot
 *           distinguish files fron [cwd + src] by the end of its name.
 * @property {number}  options.limit - When tasks take preference, run them syncronously, only fist task in concurrency
 */
module.exports = function (grunt) {
	'use strict';

	var loadTimer = require('time-grunt'),
			initTasks = require('load-grunt-tasks'),
			taskOptions = require('./grunt/options/tasks'),
			pluginOptions = require('./grunt/options/plugins'),
			loadConfigs = require('load-grunt-configs')(grunt, pluginOptions);

	loadTimer(grunt);
	initTasks(grunt, taskOptions);
	grunt.initConfig(loadConfigs);
	grunt.loadTasks('./grunt/tasks');
};

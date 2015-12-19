module.exports = function (grunt) {
	'use strict';

	var path = require('path'),
		GruntTask = require('../GruntTask')(grunt),
		task = new GruntTask();

	task.setName(path.basename(module.filename, '.js'))
		.setDescription('Start deployment project.')
		.setTaskEvironment('dev')
		.setPluginTasks([
			'clean:dev',
			'concurrent:deployDependencies',
			'css',
			'js',
			'concurrent:deployProject'
		])
		.register();
};

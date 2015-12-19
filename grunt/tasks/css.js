module.exports = function (grunt) {
	'use strict';

	var path = require('path'),
			GruntTask = require('../GruntTask')(grunt),
			task = new GruntTask();

	task.setName(path.basename(module.filename, '.js'))
		.setDescription('Deployment Sass.')
		.setTaskEvironment('dev')
		.setPluginTasks([
			'clean:devCss',
			'concurrent:cssLinters',
			'concurrent:cssCompile',
			'concurrent:cssOptimize'
		])
		.register();
};

module.exports = function (grunt) {
	'use strict';

	var path = require('path'),
			GruntTask = require('../GruntTask')(grunt),
			task = new GruntTask();

	task.setName(path.basename(module.filename, '.js'))
		.setDescription('Distribution deployment Tasks.')
		.setTaskEvironment('dist')
		.setPluginTasks([
			'clean:dist',
			'concurrent:jsLinters',
			'concurrent:jsCompile',
			'concurrent:jsCompress',
			'concurrent:cssLinters',
			'concurrent:cssCompile',
			'concurrent:cssOptimize',
			'concurrent:cssCompress'
		])
		.register();
};

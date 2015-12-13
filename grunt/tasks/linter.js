module.exports = function (grunt) {
	'use strict';

	var path = require('path'),
			GruntTask = require('../GruntTask')(grunt),
			task = new GruntTask();

	task.setName(path.basename(module.filename, '.js'))
		.setDescription('Linters for code: JSHINT, JSCS, ESLINT, SASSLINT')
		.setTaskEvironment('dev')
		.setSubtasks([
			'concurrent:cssLinters',
			'concurrent:jsLinters'
		])
		.register();
};

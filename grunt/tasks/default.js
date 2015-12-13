module.exports = function (grunt) {
	'use strict';

	var GruntTask = require('../GruntTask')(grunt),
			task = new GruntTask();

	task
		.setTaskEvironment('dev')
		.register();
};

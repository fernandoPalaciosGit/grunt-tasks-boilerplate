module.exports = function (grunt) {
	'use strict';

	var initTask = function () {
				grunt.log.writeln(this.description);
				grunt.task.run(this.subtasks);
			},

			GruntTask = function () {
				this.name = 'default';
				this.description = 'There is no ' + this.name + ' task.';
				this.subtasks = [];
				this.callback = initTask.bind(this);
			};

	GruntTask.prototype.setName = function (name) {
		this.name = name;

		return this;
	};

	GruntTask.prototype.setDescription = function (description) {
		this.description = description;

		return this;
	};

	GruntTask.prototype.setSubtasks = function (subtasks) {
		this.subtasks = subtasks;

		return this;
	};

	GruntTask.prototype.setTaskEvironment = function (env) {
		this.setCallbackTask(function () {
			grunt.config.set('taskEnvironment', env);
		});

		return this;
	};

	/**
	 * Append functionality for each task.
	 * @param {Function} cb clousure to task scope.
	 */
	GruntTask.prototype.setCallbackTask = function (newCallbackTask) {
		var oldCallbackTask = this.callback;
		this.callback = function () {
			oldCallbackTask();
			newCallbackTask();
		};

		return this;
	};

	GruntTask.prototype.register = function () {
		grunt.registerTask(this.name, this.description, this.callback);
	};

	return GruntTask;
};

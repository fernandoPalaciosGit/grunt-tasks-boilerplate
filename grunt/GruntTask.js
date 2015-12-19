module.exports = function (grunt) {
	'use strict';

	var GruntTask = function () {
				this.name = 'default';
				this.description = 'There is no ' + this.name + ' task.';
				this.pluginTasks = [];
				this.environment = 'env';
			};

	GruntTask.prototype.setName = function (n) {
		this.name = n;

		return this;
	};

	GruntTask.prototype.setDescription = function (desc) {
		this.description = desc;

		return this;
	};

	GruntTask.prototype.setPluginTasks = function (plugin) {
		this.pluginTasks = plugin;

		return this;
	};

	GruntTask.prototype.setTaskEvironment = function (env) {
		this.environment = env;

		return this;
	};

	GruntTask.prototype.register = function () {
		var callbackTask = function () {
			grunt.config.set('taskEnvironment', this.environment);
			grunt.log.writeln(this.description);
			grunt.task.run(this.pluginTasks);
		};

		grunt.registerTask(this.name, this.description, callbackTask.bind(this));
	};

	return GruntTask;
};

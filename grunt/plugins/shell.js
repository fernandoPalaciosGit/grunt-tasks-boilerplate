module.exports = function () {
	'use strict';

	var isWindowsOS = /^win/.test(process.platform),
			extend = require('util')._extend,
			OSoptions = null,
			defaultOptions = {
				stdout: true,
				stderr: true,
				failOnError: true,
				execOptions: {
					maxBuffer: Infinity
				}
			},
			windowsOS = require('../options/shell.windowsOS'),
			unixOS = require('../options/shell.unixOS');

	OSoptions = isWindowsOS ? windowsOS : unixOS;

	return extend(OSoptions, {
		options: defaultOptions
	});
};

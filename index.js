/*!
* DigitalOcean API V2
*/
'use strict';
/**
 * Module dependencies.
 */

var rest = require('restler');
var _ = require('lodash');

/**
 * Extend DropletApi
 */
module.exports = _.extend(
	require('./account/index'),
	require('./actions/index'),
	require('./domains/index'),
	require('./droplets/index'),
	require('./images/index'),
	require('./regions/index'),
	require('./sizes/index')
);
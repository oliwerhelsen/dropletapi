'use strict';

/** Module dependencies **/

var _ = require('lodash');

/** Extend the DropletAPi **/
module.exports = _.extend(
	require('./lib/digitalocean.droplets'),
	require('./lib/digitalocean.actions')
);
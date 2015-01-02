/*!
* DigitalOcean API V2
*/

/**
 * Module dependencies.
 */

var rest = require('restler');

var DO = function(token) {
	this.baseUri = "https://api.digitalocean.com/v2/";
	this.token = token;
};

DO.prototype.createQuery = function() {
	return {};
};

function makeRequest(fn, uri, options, callback) {
	fn(uri, options)
		.on('complete', function(result) {
			if(result instanceof Error) {
				callback(result);
			} else {
				callback(null, result);
			}
		});
}

/**
 * Create a new Droplet
 *
 * @param name {String} [Required]
 * @param region {String} [Required]
 * @param size {String} [Required]
 * @param image {Number} [Required]
 * @param ssh_keys {Array} [Optional]
 * @param backups {Boolean} [Optional]
 * @param ipv6 {Boolean} [Optional]
 * @param private_networking {Boolean} [Optional]
 * @param user_data {String} [Optional]
 *
 * @response Object containing the standard attributes for your new Droplet
 * 
 * Api documentation: https://developers.digitalocean.com/v2/#create-a-new-droplet
 */

DO.prototype.createDroplet = function(name, region, size, image, ssh_keys, backups, ipv6, private_networking, user_data, callback) {
	var querydata = this.createQuery();

	if(ssh_keys !== null) {
		querydata.ssh_keys = ssh_keys;
	}

	if(backups !== null) {
		querydata.backups = backups;
	}

	if(ipv6 !== null) {
		querydata.ipv6 = ipv6;
	}

	if(private_networking !== null) {
		querydata.private_networking = private_networking;
	}

	if(user_data !== null) {
		querydata.user_data = user_data;
	}

	querydata = {
		name				: 	name,
		region				: 	region,
		size				: 	size,
		image				: 	image
	}

	makeRequest(rest.post, this.baseUri + 'droplets', {data: querydata, headers: {Content-Type: application/json, Authorization: 'Bearer ' + this.token} }, callback);
};

module.exports = DO;
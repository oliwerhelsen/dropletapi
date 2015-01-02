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
	return {token: this.token};
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

DO.prototype.createDroplet = function(name, region, size, image, ssh_keys = null, backups = false, ipv6 = true, private_networking = null, user_data = null) {
	var querydata = this.createQuery();
	querydata = {
		name				: 	name,
		region				: 	region,
		size				: 	size,
		image				: 	image,
		ssh_keys			: 	ssh_keys,
		backups				: 	backups,
		ipv6				: 	ipv6,
		private_networking 	: 	private_networking,
		user_data			: 	user_data
	}

	makeRequest(rest.post, this.baseUri + 'droplets', {query: querydata}, callback);
};
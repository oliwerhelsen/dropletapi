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

DO.prototype.createDroplet = function(data) {
    makeRequest(rest.post, this.baseUri + 'droplets', {data: data, headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token}}, callback);
};

/**
 * Retrieve an existing Droplet by id
 *
 * @param id {number} [Required]
 *
 * @The response will be a JSON object with a key called droplet. This will be set to a JSON object that contains the Droplet's attributes:
 *
 * Api documentation: https://developers.digitalocean.com/v2/#retrieve-an-existing-droplet-by-id
 */

DO.prototype.getDropletById = function(dropletID, callback) {
    makeRequest(rest.get, this.baseUri + 'droplets/' + dropletID, {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token}}, callback);
};

/**
 * List all Droplets in your account
 *
 * @The response body will be a JSON object with a key of droplets. This will be set to an array containing objects representing each Droplet.
 *
 * Api documentation: https://developers.digitalocean.com/v2/#list-all-droplets
 */

DO.prototype.listDroplets = function(callback) {
    makeRequest(rest.get, this.baseUri + 'droplets', {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token}}, callback);
};

/**
* Delete a Droplet
*
* @No response body will be sent back, but the response code will indicate success.
* Specifically, the response code will be a 204, which means that the action was successful with no returned body data.
*
* Api documentation: https://developers.digitalocean.com/#delete-a-droplet
*/

DO.prototype.deleteDroplet = function(dropletID, callback) {
    makeRequest(rest.del, this.baseUri + 'droplets/' + dropletID, {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token}}, callback);
};

/*
    List all available Kernels for a Droplet

    Retrieve a list of all kernels available to a Dropet

    @param id {number} [Required]

    @ The response will be a JSON object that has a key called kernels.
      This will be set to an array of kernel objects, each of which contain the standard kernel attributes

    API documentation: https://developers.digitalocean.com/#list-all-available-kernels-for-a-droplet
*/
DO.prototype.availableKernelsForDroplet = function(dropletID, callback) {
    makeRequest(rest.get, this.baseUri + 'droplets/' + dropletID + '/kernels', {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token}}, callback);
};

/*
    Retrieve snapshots for a Droplet

    Retrieve the snapshots that have been created from a Droplet

    @param id {number} [Required]

    @ You will get back a JSON object that has a snapshots key.
      This will be set to an array of snapshot objects, each of which contain the standard image attributes

    API documentation: https://developers.digitalocean.com/#retrieve-snapshots-for-a-droplet
*/

DO.prototype.getSnapshotsForDroplet = function(dropletID, callback) {
    makeRequest(rest.get, this.baseUri + 'droplets/' + dropletID + '/snapshots', {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token}}, callback);
};

/*
    Retrieve backups for a Droplet

    Retrieve any backups associated with a Droplet

    @param id {number} [Required]

    @ You will get back a JSON object that has a backups key.
      This will be set to an array of backup objects, each of which contain the standard image attributes

    API documentation: https://developers.digitalocean.com/#retrieve-backups-for-a-droplet
*/

DO.prototype.getBackupsForDroplet = function(dropletID, callback) {
    makeRequest(rest.get, this.baseUri + 'droplets/' + dropletID + '/backups', {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token}}, callback);
};

/*
    Retrieve actions for a Droplet

    Retrieve all actions that have been executed on a Droplet

    @param id {number} [Required]

    @ The results will be returned as a JSON object with an actions key.
      This will be set to an array filled with action objects containing the standard action attributes

    API documentation: https://developers.digitalocean.com/#retrieve-actions-for-a-droplet
*/

DO.prototype.getActionsForDroplet = function(dropletID, callback) {
    makeRequest(rest.get, this.baseUri + 'droplets/' + dropletID + '/actions', {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token}}, callback);
};

/*
    List Droplet Upgrades

    Retrieve a list of droplets that are scheduled to be upgraded

    @ The results will be returned as a JSON array containing details about the schedule and droplet id

    API documentation: https://developers.digitalocean.com/#retrieve-actions-for-a-droplet
*/

DO.prototype.listDropletUpgrades = function(callback) {
    makeRequest(rest.get, this.baseUri + 'droplet_upgrades', {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token}}, callback);
};

module.exports = DO;
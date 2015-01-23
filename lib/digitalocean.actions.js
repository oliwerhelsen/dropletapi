/*!
* DigitalOcean API V3
*/


/**
Actions

Actions are records of events that have occurred on the resources in your account.
These can be things like rebooting a Droplet, or transferring an image to a new region.

An action object is created every time one of these actions is initiated.
The action object contains information about the current status of the action, start and complete timestamps, and the associated resource type and ID.

Every action that creates an action object is available through this endpoint.
Completed actions are not removed from this list and are always available for querying.

**/

/**
 * Module dependencies.
 */

var rest = require('restler');

var Actions = function(token) {
    this.baseUri = "https://api.digitalocean.com/v2/actions/";
    this.token = token;
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
 * List all Actions
 *
 * To list all of the actions that have been executed on the current account
 *
 * This will be the entire list of actions taken on your account, so it will be quite large.
 * As with any large collection returned by the API, the results will be paginated with only 25 on each page by default.
 *
 * @response The results will be returned as a JSON object with an actions key.
 * This will be set to an array filled with action objects containing the standard action attributes:
 *
 * Api documentation: https://developers.digitalocean.com/#list-all-action
 */

Actions.prototype.listAllActions = function(pageData, callback) {
    if(!pageData) {
        pageData = {
            page: 1,
            per_page:1
        };
    } else {
        pageData = pageData;
    }
    makeRequest(rest.get, this.baseUri, {query: pageData, headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token}}, callback);
};

/**
 * Retrieve an existing Action
 *
 * Retrieve a specific action object
 *
 * @response The result will be a JSON object with an action key.
 * This will be set to an action object containing the standard action attributes
 *
 * Api documentation: https://developers.digitalocean.com/#retrieve-an-existing-action
 */

Actions.prototype.getActionById = function(actionId, callback) {
    makeRequest(rest.get, this.baseUri + actionId, {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token}}, callback);
};


exports.Actions = Actions;
/*!
 * DigitalOcean API V3
 *
 * Domains
 *  Domain resources are domain names that you have purchased from a domain name registrar
 *  that you are managing through the DigitalOcean DNS interface.
 *
 *  This resource establishes top-level control over each domain.
 *  Actions that affect individual domain records should be taken on the [Domain Records] resource.
 *
 */

/**
 * Module dependencies.
 */

var rest = require('restler');

var Domains = function(token) {
    this.baseUri = "https://api.digitalocean.com/v2/domains/";
    this.token = token;
};

function makeRequest(fn, uri, options, callback) {
    fn(uri, options)
        .on('complete', function(result) {
            if (result instanceof Error) {
                callback(result);
            } else {
                callback(null, result);
            }
        });
}

function makeRequestJson(fn, uri, data, options, callback) {
    fn(uri, data, options)
        .on('complete', function(result) {
            if (result instanceof Error) {
                callback(result);
            } else {
                callback(null, result);
            }
        });
}

/**
 * Create a new Domain
 *
 * @param name {String} [Required]
 * @param ip_address {String} [Required]
 *
 * @response
 * The response will be a JSON object with a key called domain.
 * The value of this will be an object that contains the standard attributes associated with a domain
 *
 * Api documentation: https://developers.digitalocean.com/#create-a-new-domain
 */

Domains.prototype.createDomain = function(data, callback) {
    makeRequestJson(
        rest.postJson, this.baseUri, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            }
        },
        callback
    );
};

/**
 * Retrieve an existing Domain by name
 *
 * @param domainName {string} [Required]
 *
 * @response: Will be a JSON object with a key called domain.
 * The value of this will be an object that contains the standard attributes defined for a domain
 *
 * Api documentation: https://developers.digitalocean.com/#retrieve-an-existing-domain
 */

Domains.prototype.getDomainByName = function(domainName, callback) {
    makeRequest(rest.get, this.baseUri + domainName, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        }
    }, callback);
};

/**
 * List all Domains
 *
 * @Reponse:
 * Will be a JSON object with a key called domains.
 * The value of this will be an array of Domain objects, each of which contain the standard domain attributes
 *
 * Api documentation: https://developers.digitalocean.com/#list-all-domains
 */

Domains.prototype.listDomains = function(callback) {
    makeRequest(rest.get, this.baseUri, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        }
    }, callback);
};

/**
 * Delete a Domain
 *
 * @reponse:
 * The domain will be removed from your account and a response status of 204 will be returned.
 * This indicates a successful request with no response body.
 *
 * Api documentation: https://developers.digitalocean.com/#delete-a-domain
 */

Domains.prototype.deleteDomain = function(domainName, callback) {
    makeRequest(rest.del, this.baseUri + domainName, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        }
    }, callback);
};


exports.Domains = Domains;

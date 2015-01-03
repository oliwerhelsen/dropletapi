DropletApi
=======

[![NPM](https://nodei.co/npm/dropletapi.png?downloads=true&stars=true)](https://nodei.co/npm/dropletapi/)

(C) Oliwer Helsén (oliwer.helsen@live.com) 2015

A wrapper for DigitalOceans API v2

See [Version History](https://github.com/oliwerhelsen/DigitalOcean-API-v2/wiki/Version-History) for changes

Installing
----------

```
npm install dropletapi
npm install dropletapi --save
```

Features
--------

-- DROPLETS
* Create new Droplet
* Retrieve an existing Droplet by id
* List all Droplets in your account
* Delete a Droplet by id
* Retrieve a list of all kernels available to a Dropet
* Retrieve snapshots for a Droplet
* Retrieve backups for a Droplet
* Retrieve actions for a Droplet

API
---

### createDroplet(name, region, size, image, ssh_keys, backups, ipv6, private_networking, user_data, callback)

Create a new Droplet

Example usage
-------------

```javascript
var DIGITALOCEAN = require('dropletapi');

var digitalocean = new DIGITALOCEAN('Your API-TOKEN');

digitalocean.createDroplet('testingAPI', 'nyc3', '512mb', 'ubuntu-14-04-x64', null, false, true, null, null, function (error, result) {
          if (error) {
              console.log(error);
          }
          else {
              console.log(result);
          }
      });

```

### getDropletById(dropletID, callback)

Retrieve an existing Droplet by id

Example usage
-------------

```javascript
var DIGITALOCEAN = require('dropletapi');

var digitalocean = new DIGITALOCEAN('Your API-TOKEN');

digitalocean.getDropletById(PUT THE DROPLETID HERE, function (error, result) {
          if (error) {
              console.log(error);
          }
          else {
              console.log(result);
          }
      });

```

### listDroplets(callback) 

List all Droplets in your account

Example usage
-------------

```javascript
var DIGITALOCEAN = require('dropletapi');

var digitalocean = new DIGITALOCEAN('Your API-TOKEN');

digitalocean.listDroplets(function (error, result) {
          if (error) {
              console.log(error);
          }
          else {
              console.log(result);
          }
      });

```

### deleteDroplet(dropletID, callback)

Delete a Droplet by id

Example usage
-------------

```javascript
var DIGITALOCEAN = require('dropletapi');

var digitalocean = new DIGITALOCEAN('Your API-TOKEN');

digitalocean.deleteDroplet(PUT THE DROPLETID HERE, function (error, result) {
          if (error) {
              console.log(error);
          }
          else {
              console.log(result);
          }
      });

```

### availableKernelsForDroplet(dropletID, callback)

Retrieve a list of all kernels available to a Dropet

Example usage
-------------

```javascript
var DIGITALOCEAN = require('dropletapi');

var digitalocean = new DIGITALOCEAN('Your API-TOKEN');

digitalocean.availableKernelsForDroplet(PUT THE DROPLETID HERE, function (error, result) {
          if (error) {
              console.log(error);
          }
          else {
              console.log(result);
          }
      });

```

### getSnapshotsForDroplet(dropletID, callback)

Retrieve the snapshots that have been created from a Droplet

Example usage
-------------

```javascript
var DIGITALOCEAN = require('dropletapi');

var digitalocean = new DIGITALOCEAN('Your API-TOKEN');

digitalocean.getSnapshotsForDroplet(PUT THE DROPLETID HERE, function (error, result) {
          if (error) {
              console.log(error);
          }
          else {
              console.log(result);
          }
      });

```

### getBackupsForDroplet(dropletID, callback)

Retrieve any backups associated with a Droplet

Example usage
-------------

```javascript
var DIGITALOCEAN = require('dropletapi');

var digitalocean = new DIGITALOCEAN('Your API-TOKEN');

digitalocean.getBackupsForDroplet(PUT THE DROPLETID HERE, function (error, result) {
          if (error) {
              console.log(error);
          }
          else {
              console.log(result);
          }
      });

```

### getActionsForDroplet(dropletID, callback)

Retrieve all actions that have been executed on a Droplet

Example usage
-------------

```javascript
var DIGITALOCEAN = require('dropletapi');

var digitalocean = new DIGITALOCEAN('Your API-TOKEN');

digitalocean.getActionsForDroplet(PUT THE DROPLETID HERE, function (error, result) {
          if (error) {
              console.log(error);
          }
          else {
              console.log(result);
          }
      });

```

```

### listDropletUpgrades(callback)

Retrieve a list of droplets that are scheduled to be upgraded

Example usage
-------------

```javascript
var DIGITALOCEAN = require('dropletapi');

var digitalocean = new DIGITALOCEAN('Your API-TOKEN');

digitalocean.listDropletUpgrades(function (error, result) {
          if (error) {
              console.log(error);
          }
          else {
              console.log(result);
          }
      });

```

TODO
----
* Keep on adding more actions from the DigitalOcean API v2

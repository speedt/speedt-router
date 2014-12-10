/*!
 * speedt-router
 * Copyright(c) 2014 speedt <13837186852@qq.com>
 * MIT Licensed
 */
'use strict';

var conf = require('../settings'),
	EventProxy = require('eventproxy'),
	util = require('../lib/util');

var fs = require('fs'),
	path = require('path'),
	cwd = process.cwd(),
	qs = require('querystring'),
	velocity = require('velocityjs');

var title = 'FOREWORLD 洪荒',
	virtualPath = '/';

var macros = require('../lib/macro');

exports.installUI = function(req, res, next){
	res.send({
		success: true
	});
};
/*!
 * speedt-router
 * Copyright(c) 2014 speedt <13837186852@qq.com>
 * MIT Licensed
 */
'use strict';

var conf = require('../settings'),
	EventProxy = require('eventproxy'),
	util = require('../lib/util');

exports.api = function(req, res, next){
	var query = req.query;
	switch(query.command){
		case 'login':
			procLogin(req, res, next);
			break;
		default: {
			res.send({ success: !0 });
		}
	}
};

var procLogin = function(req, res, next){
	res.send({
		success: !0,
		token: 'require',
		clientVersion: '',
		apiKey: '',
		secKey: '',
		servers: [
			'192.168.0.101:5001',
			'192.168.0.101:5002'
		]
	});
};
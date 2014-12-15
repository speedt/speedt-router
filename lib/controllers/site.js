/*!
 * speedt-router
 * Copyright(c) 2014 speedt <13837186852@qq.com>
 * MIT Licensed
 */
'use strict';

var conf = require('../settings'),
	EventProxy = require('eventproxy');

var User = require('../biz/user');

var commands = ['login', 'connect'];

exports.api = function(req, res, next){
	var query = req.query;
	if(-1 === commands.indexOf(query.command))
		return res.send({ success: !1 });
	procValidation(req, res, next);
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

var procConnect = function(req, res, next){
	res.send({
		success: !0
	});
};

var procValidation = function(req, res, next){
	var query = req.query;

	var command = query.command,
		apiKey = query.apiKey,
		clientVersion = query.clientVersion,
		currentTime = query.currentTime,
		signature = query.signature;

	User.validation(command, apiKey, clientVersion, currentTime, signature, function (err){
		if(err) return res.send({ success: !1, msg: err.message });
		switch(command){
			case 'login':
				procLogin(req, res, next);
				break;
			case 'connect':
				procConnect(req, res, next);
				break;
		}
	});
};
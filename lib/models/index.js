/*!
 * speedt-router
 * Copyright(c) 2014 speedt <13837186852@qq.com>
 * MIT Licensed
 */
'use strict';

var mongoose = require('mongoose'),
	db = mongoose.connection;

var settings = require('../settings'),
	url = 'mongodb://'+ settings.user +':'+ settings.pass +'@'+ settings.host +':'+ settings.port +'/'+ settings.db;

db.on('error', console.error);
db.once('open', function(){
	console.log(url);
});

mongoose.connect(url, function (err){
	if(err){
		console.error('connect to %s Error: %s.', url, err.message);
		process.exit(1);
	}
});

// models
require('./User');

exports.User = mongoose.model('User');
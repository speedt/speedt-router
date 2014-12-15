/*!
 * speedt-router
 * Copyright(c) 2014 speedt <13837186852@qq.com>
 * MIT Licensed
 */
'use strict';

var models = require('../models'),
	User = models.User;

/**
 *
 * @params {String} command
 * @params {String} apiKey
 * @params {String} clientVersion
 * @params {String} currentTime
 * @params {String} signature
 * @params {Function} cb
 * @return
 */
exports.validation = function(command, apiKey, clientVersion, currentTime, signature, cb){
	cb();
};
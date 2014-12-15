/*!
 * speedt-router
 * Copyright(c) 2014 speedt <13837186852@qq.com>
 * MIT Licensed
 */
'use strict';

var site = require('../controllers/site');

var ERROR_COMMAND = 'command不能为空',
	ERROR_APIKEY = 'apiKey不能为空',
	ERROR_CLIENTVERSION = 'clientVersion不能为空',
	ERROR_CURRENTTIME = 'currentTime不能为空',
	ERROR_SIGNATURE = 'signature不能为空';

/**
 * get数据校验
 *
 * @params {Object} 
 * @params {Object} 
 * @return {Object} 
 */
var valiGetData = function(req, res, next){
	var query = req.query,
		result = { success: false };
	if(!query.command || '' === query.command.trim()){
		result.msg = ERROR_COMMAND;
		return res.send(result);
	}
	if(!query.apiKey || '' === query.apiKey.trim()){
		result.msg = ERROR_APIKEY;
		return res.send(result);
	}
	if(!query.clientVersion || '' === query.clientVersion.trim()){
		result.msg = ERROR_CLIENTVERSION;
		return res.send(result);
	}
	if(!query.currentTime || '' === query.currentTime.trim()){
		result.msg = ERROR_CURRENTTIME;
		return res.send(result);
	}
	if(!query.signature || '' === query.signature.trim()){
		result.msg = ERROR_SIGNATURE;
		return res.send(result);
	}
	next();
}

module.exports = function(app){
	app.get('/api$', valiGetData, site.api);
};
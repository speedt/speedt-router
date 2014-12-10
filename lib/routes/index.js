/*!
 * speedt-router
 * Copyright(c) 2014 speedt <13837186852@qq.com>
 * MIT Licensed
 */
'use strict';

var site = require('../controllers/site');

var title = 'FOREWORLD 洪荒',
	str1 = '参数异常';

var ERROR = {
	COMMAND: 'command参数不能为空',
	APIKEY: 'apiKey参数不能为空'
};

/**
 * post数据校验
 *
 * @params {Object} 
 * @params {Object} 
 * @return {Object} 
 */
var valiPostData = function(req, res, next){
	var data = req.body.data;
	if(!data) return res.send({
		success: false,
		msg: str1
	});
	try{
		data = JSON.parse(data);
		if('object' === typeof data){
			req._data = data;
			return next();
		}
		res.send({
			success: false,
			msg: str1
		});
	}catch(ex){
		res.send({
			success: false,
			msg: ex.message
		});
	}
}

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
		result.msg = ERROR.COMMAND;
		return res.send(result);
	}
	if(!query.apiKey || '' === query.apiKey.trim()){
		result.msg = ERROR.APIKEY;
		return res.send(result);
	}
	next();
}

module.exports = function(app){
	app.get('/api$', valiGetData, site.installUI);
};
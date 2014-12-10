/*!
 * speedt-router
 * Copyright(c) 2014 speedt <13837186852@qq.com>
 * MIT Licensed
 */
'use strict';

var express = require('express'),
	http = require('http');

var routes = require('./routes');

var app = express();

/* all environments */
app.set('port', process.env.PORT || 3000)
	/* use */
	.use(express.logger('dev'))
	.use(express.json())
	.use(express.urlencoded())
	.use(express.methodOverride())
	.use(app.router)

/* development only */
if('development' === app.get('env')){
	app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port %s.', app.get('port'));
	routes(app);
});
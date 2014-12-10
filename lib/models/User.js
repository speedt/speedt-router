/*!
 * speedt-router
 * Copyright(c) 2014 speedt <13837186852@qq.com>
 * MIT Licensed
 */
'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;

var UserSchema = new Schema({
	Status: {			// 状态：未激活0, 激活1, 禁用2
		type: Number,
		default: 0
	}, ApiKey: {
		type: String,
		required: true,
		index: true
	}, SecKey: {
		type: String,
		required: true,
		index: true
	}
}, {
	versionKey: false,
	toObject: {
		virtuals: true
	}, toJSON: {
		virtuals: true
	}
});

mongoose.model('User', UserSchema);
'use strict';
const uuidv1 = require('node-uuid').v1;

module.exports = function(options){
  this.title = options.title;
  this.content = options.content;
  this.id = uuidv1();
  this.created = new Date();
};

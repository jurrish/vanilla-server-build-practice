//export a function that is a constructor that has the ability to store callbacks on it and store some routes

'use strict';

const parseJson = require('../lib/parse-json');
const parseUrl = require('../lib/parse-url');

const Router = module.exports = function(){
  //we need a GET/POST/PUT/DELETE object that all do certain things and functions associated with those routes as prototypes
  this.routes = {
    GET: {},
    POST: {},
    PUT: {},
    DELETE: {},
  };
};

//call this function to get the other prototyped CRUD operations
Router.prototype.route = function(){
  return (req, res) => {
    //logic for invoking a route callback
    //is the request parsed?
    Promise.all([
      parseJson(req),
      parseUrl(req),
    ])
    .then(() => {
      //look for the request.method(GET/POST/ETC) and look for the pathname in that object...if it exists and it has a type of 'function', then we want to execute
      if(typeof this.routes[req.method][req.url.pathname] === 'function'){
        this.routes[req.method][req.url.pathname](req,res);
        return;
      }
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('not found');
      res.end();
    })
    .catch(err => {
      console.log(err);
      res.writeHead(400, {'Content-Type' : 'text/plain'});
      res.write('bad request');
      res.end();
    });
  };
};

//register the get callback
//any instance of the ROUTER has access to these functions.
Router.prototype.get = function(endpoint, callback){
  this.routes.GET[endpoint] = callback;
};

Router.prototype.post = function(endpoint, callback){
  this.routes.POST[endpoint] = callback;
};

Router.prototype.put = function(endpoint, callback){
  this.routes.PUT[endpoint] = callback;
};

Router.prototype.delete = function(endpoint, callback){
  this.routes.DELETE[endpoint] = callback;
};

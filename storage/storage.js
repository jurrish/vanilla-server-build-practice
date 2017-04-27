'use strict';

const debug = require('debug')('http:storage');
const storage = {};
// const storage = {
//   schemaOne: {
//     idOne: {},
//     idTwo: {},
//   },
//   schemaTwo: {
//     ...
//   }
// }

module.exports = exports = {};

exports.createNote = function(schemaName, note){
  if(!schemaName) return Promise.reject(new Error('Schema required'));
  if(!note) return Promise.reject(new Error('note required'));

  if(!storage[schemaName]) storage[schemaName] = {};

//assign note as an id on the schema in the storage object. note.id will already exist from importing it in!
  storage[schemaName][note.id] = note;

  return Promise.resolve(note);
};

exports.fetchNote = function(schemaName, id){
  return new Promise((resolve, reject) => {

    if(!schemaName) return reject(new Error('Schema required'));
    if(!id) return reject(new Error('note id required'));

    //doing a quick lookup
    let schema = storage[schemaName];
    if(!schema) return reject(new Error('Schema does not exist'));

    let note = schema[id];
    if(!note) return reject(new Error('Note does not exist'));

    resolve(note);
  });
};

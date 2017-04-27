'use strict';

const expect = require('chai').expect;
const Note = require('../model/note');

describe('testing note model', function(){
  it('should create a note', function(){
    //pass this data into our Note constructor
    //this is a mock
    let data = {
      title: 'shark in the dark',
      content: 'singing to a lark named mark',
    };

    //instantiate a new note using our mock data
    let tempNote = new Note(data);

    //setup our tests to have certain expects
    expect(Boolean(tempNote.id)).to.equal(true);
    expect(Boolean(tempNote.created)).to.equal(true);
    expect(tempNote.title).to.equal(data.title);
    expect(tempNote.content).to.equal(data.content);

    //WE WANT TO CRUD THIS MODEL!
    //Write routes to do so!

    //POST (with an id) Note with this route

    //GET (get many, or get one note) Note with this route
        //can be fetch or fetchAll

    //PUT (with an id) note with this route

    //DELETE (with an id) note with this id
  });
});

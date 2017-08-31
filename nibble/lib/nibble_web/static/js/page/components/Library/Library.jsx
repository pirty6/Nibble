'use strict';
import React, { Component } from 'react';
import Header from './../Header.jsx';

class Library extends Component{
  render() {
    const {
      header,
      books,
    } = this.props;

    let book = books.map((element, index) => (
      <div className = 'book' key = { index }
        style = { element.image
          ? { backgroundImage: 'url(' + element.image + ')' }
        : { backgroundColor: '#7AC9DD' } }>
        <h3 className = { 'title ' + (element.image ? 'hidden' : 'show')}>
          { element.title }
        </h3>
        <span className = { 'author ' + (element.image ? 'hidden' : 'show')}>
          { element.author }
        </span>
      </div>
    ));

    return (
      <div className = 'library'>
        <Header { ...header }/>
        <div className = 'books-container'>
          <div className = 'container'>
            { book }
          </div>
        </div>
      </div>
    );
  }
}

export default Library;

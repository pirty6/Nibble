'use strict';
import React, { Component } from 'react';
import Header from './../Header.jsx';

class Library extends Component{
  constructor(props) {
    super(props);
    this.showInformation = this.showInformation.bind(this);
    this.renderInformation = this.renderInformation.bind(this);
  }

  state = {
    element: null,
  };

  //function for returning the information
  //of a specific element in the modal
  showInformation(element) {
    this.setState({ element });
  }

  renderInformation(element) {
    if (element) {
      return (
        <div className = 'modal'>
          <div className = 'close'>
            <div role = 'button' tabIndex = {0}
              onClick = { this.props.toggleModal }>
                X
              </div>
          </div>
          <div className = 'container'>
            <div className = 'left-column'>

            </div>
            <div className = 'right-column'>
              <h2>{ element.title }</h2>
              <p>Autor: { element.author }</p>
              <p>Editorial: { element.editorial }</p>
              <p>codigo: { element.id }</p>
              <p>Descripcion: { element.description }</p>
              { element.genre.map((tag, i) => (
                <span key = { i }>{ tag }</span>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return null;
  }

  render() {
    const {
      header,
      books,
      toggleModal,
      toggle,
    } = this.props;

    let book = books.map((element, index) => (
      <div className = 'book' key = { index }
        onClick = {() => {
        this.showInformation(element);
        toggleModal();
      }}

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
            <div className = {`modal ${toggle ? 'show' : 'hidden'}`}>
              { this.renderInformation(this.state.element) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Library;

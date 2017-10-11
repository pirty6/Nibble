'use strict';
import React, { Component } from 'react';
import Header from './../Header.jsx';

class Library extends Component{
  constructor(props) {
    super(props);
    this.showInformation = this.showInformation.bind(this);
    this.renderInformation = this.renderInformation.bind(this);
    this.renderImage = this.renderImage.bind(this);
  }

  state = {
    element: null,
  };

  //function for rendering a specific image
  renderImage(image) {
    if (image) {
      return (
        <img src = { image }/>
      );
    }

    return null;
  }

  //function for returning the information
  //of a specific element in the modal
  showInformation(element) {
    this.setState({ element });
  }

  //function for rendering the information
  //of a specific element
  renderInformation(element) {
    if (element) {
      return (
        <div className = 'modal-container'>
          <div className = 'close'>
            <div className = 'close-container'
              onClick = { this.props.toggleModal }>
                X
              </div>
          </div>
          <div className = 'container'>
            <div className = 'left-column'>
              <div className = 'square'></div>
              { this.renderImage(element.urlimg)}
            </div>
            <div className = 'right-column'>
              <div className = 'container-column'>
                <h3>{ element.title }</h3>
                <div className = 'rectangle'></div>
                <p className = 'enter'><strong>Autor: </strong>{ element.author }</p>
                <p className = 'enter'><strong>Editorial: </strong>{ element.editorial }</p>
                <p className = 'enter'><strong>codigo: </strong>{ element.id }</p>
                <p className = 'enter'><strong>Descripcion: </strong>{ element.description }</p>
                <p className = 'enter'><strong>Géneros: </strong>
                {/* { element.genre.map((tag, i) => (
                  <span className = 'genre' key = { i }>{ tag }</span>
                ))} */}
                </p>
                <div className = 'primary-button' onClick ={() => location.href=element.urlpdf}>
                  <span>Leer</span>
                </div>
              </div>
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
      page,
      toggleModal,
      toggle,
      headerEnglish,
      language,
      headerGerman,
    } = this.props;

    let headerInformation = header;
    if (language) {
      if (language === 'es') {
        headerInformation = header;
      } else if (language === 'en') {
        headerInformation = headerEnglish;
      } else if (language === 'de') {
        headerInformation = headerGerman;
      }
    }

    const currentPage = page.state.data;
    // console.log(currentPage);

    let book = currentPage.map((element, index) => (
      <div className = 'book' key = { index }
        onClick = {() => {
        this.showInformation(element);
        toggleModal();
      }}

        style = { element.urlimg != 'null'
          ? { backgroundImage: 'url(' + element.urlimg + ')' }
        : { backgroundColor: '#7AC9DD' } }>
        <h5 className = { 'title ' + (element.urlimg != 'null' ? 'hidden' : 'show')}>
          { element.title }
        </h5>
        <span className = { 'author ' + (element.urlimg != 'null' ? 'hidden' : 'show')}>
          { element.author }
        </span>
      </div>
    ));

    return (
      <div className = 'library'>
        <Header { ...headerInformation }/>
        <div className = 'books-container'>
          <div className = 'container'>
            { currentPage ? book : null }
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

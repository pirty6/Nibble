'use strict';
import React, { Component } from 'react';
import Header from './../Header.jsx';

class Library extends Component{
  constructor(props) {
    super(props);
    this.showInformation = this.showInformation.bind(this);
    this.renderInformation = this.renderInformation.bind(this);
    this.renderImage = this.renderImage.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.optionChecked = this.optionChecked.bind(this);
    this.renderBooks = this.renderBooks.bind(this);
    this.showAdvanceSearch = this.showAdvanceSearch.bind(this);
  }

  state = {
    element: null,
    inputValue: '',
    selectedOption: 'title',
    showAdvance: false,
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

  optionChecked(option) {
    this.setState({ selectedOption: option });
  };

  //function for returning the information
  //of a specific element in the modal
  showInformation(element) {
    this.setState({ element });
  }

  updateInputValue(evt) {
    this.setState({ inputValue:evt.target.value });
  };


  renderBooks(element, index) {
    if (element) {
      return (
        <div className='book-container'>
          <div className='book' key={ index } onClick={ () => {
            this.showInformation(element);
            this.props.toggleModal();
            }}
            style={ element.urlimg != 'null' ? {backgroundImage: `url(${element.urlimg})`}
            : { backgroundColor: '#7AC9DD' } }>
            <h5 className={'title ' + (element.urlimg != 'null' ? 'hidden' : 'show')}>
              { element.title }
            </h5>
            <span className={'author ' + (element.urlimg !='null' ? 'hidden' : 'show')}>
              { element.author}
            </span>
          </div>
          <div className='information'>
            <h5>{ element.title }</h5>
            <span>{ element.author }</span>
          </div>
        </div>
      );
    }
    return null;
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
                <p className = 'enter'><strong>Descripcion: </strong>{ element.description }</p>
                <p className = 'enter'><strong>Géneros: </strong>
                { element.genre }
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

  showAdvanceSearch(){
    this.setState({showAdvance: !this.state.showAdvance});
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
      genres,
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

    const genresRender=genres.map((element, index) => (
      <option key={index}>{element.name}</option>
    ));

    let book = currentPage.map((element, index) => {
      if(this.state.inputValue === ''){
        return (this.renderBooks(element, index));
      } else if (this.state.selectedOption === 'title' && element.title.toLowerCase().includes(this.state.inputValue.toLowerCase())){
        return (this.renderBooks(element, index));
      } else if (this.state.selectedOption === 'author' && element.author.toLowerCase().includes(this.state.inputValue.toLowerCase())){
        return (this.renderBooks(element, index));
      } else if (this.state.selectedOption === 'editorial' && element.editorial.toLowerCase().includes(this.state.inputValue.toLowerCase())) {
        return (this.renderBooks(element, index));
      } else if (this.state.selectedOption === 'genre' && element.genre.toLowerCase().includes(this.state.inputValue.toLowerCase())){
        return (this.renderBooks(element, index));
      }
    });

    console.log(this.state.showAdvance);

    let height;
    this.container ? height = this.container.clientHeight : null;
    this.bar ? height = height + this.bar.clientHeight : null;
    return (
      <div className = 'library'>
        <Header { ...headerInformation }/>
        <div className='search-bar' ref = {(bar) => {this.bar = bar}}>
          <div className='container'>
            <div className='search'>
              <input type="text" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
              <h6 onClick = {() => this.showAdvanceSearch() }>Busqueda Avanzada</h6>
            </div>
          </div>
          <div className={'advance-search ' + (this.state.showAdvance ? 'show' : 'hidden')} style = {height ? {height: height} : null }>
            <span onClick = { () => this.showAdvanceSearch() }>X</span>
            <div className='container'>
              <div className='options-container'>
                <div className='option'>
                  <input type="radio" onChange={() => this.optionChecked('title')} checked={this.state.selectedOption === 'title' ? true : false} /><p>Título</p>
                </div>
                <div className='option'>
                  <input type="radio" onChange={() => this.optionChecked('author')} checked={this.state.selectedOption === 'author' ? true : false} /><p>Autor</p>
                </div>
                <div className='option'>
                  <input type="radio" onChange={() => this.optionChecked('editorial')} checked={this.state.selectedOption === 'editorial' ? true : false} /><p>Editorial</p>
                </div>
                <div className='option'>
                  <input type="radio" onChange={() => this.optionChecked('genre')} checked={this.state.selectedOption === 'genre' ? true : false} /><p>Género</p>
                  { this.state.selectedOption === 'genre' ?
                  (<div className='genre-options' onChange={evt => this.updateInputValue(evt)}>
                    <select>
                      { genresRender }
                    </select>
                  </div>)
                : null }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className = 'books-container' ref = {(container) => {this.container = container;}}>
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

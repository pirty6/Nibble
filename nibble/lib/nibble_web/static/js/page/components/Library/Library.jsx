
import React, { Component } from 'react';
import Header from './../Header.jsx';

class Library extends Component {
  constructor(props) {
    super(props);
    this.showInformation = this.showInformation.bind(this);
    this.renderInformation = this.renderInformation.bind(this);
    this.renderImage = this.renderImage.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.optionChecked = this.optionChecked.bind(this);
    this.renderBooks = this.renderBooks.bind(this);
    this.showAdvanceSearch = this.showAdvanceSearch.bind(this);
    // this.setHeight = this.setHeight.bind(this);
  }

  state = {
    element: null,
    inputValue: '',
    selectedOption: 'title',
    showAdvance: false,
    // height: null,
  };

  // setHeight(sticky) {
  //   this.setState({ height: sticky });
  // }

  updateInputValue(evt) {
    this.setState({ inputValue: evt.target.value });
  }

  showInformation(element) {
    this.setState({ element });
  }

  optionChecked(option) {
    this.setState({ selectedOption: option });
  }
  showAdvanceSearch() {
    this.setState({ showAdvance: !this.state.showAdvance });
  }


  renderInformation(element) {
    if (element) {
      return (
        <div className='modal-container'>
          <div className='close'>
            <div
              className='close-container'
              onClick={this.props.toggleModal} role='button'
              tabIndex='0'
            >
                  X
            </div>
          </div>
          <div className='container'>
            <div className='left-column'>
              <div className='square' />
              { this.renderImage(element.urlimg)}
            </div>
            <div className='right-column'>
              <div className='container-column'>
                <h3>{ element.title }</h3>
                <div className='rectangle' />
                <p className='enter'><strong>Autor: </strong>{ element.author }</p>
                <p className='enter'><strong>Editorial: </strong>{ element.editorial }</p>
                <p className='enter'><strong>Descripcion: </strong>{ element.description }</p>
                <p className='enter'><strong>Géneros: </strong>
                  { element.genre }
                </p>
                <div className='primary-button' onClick={() => location.href = element.urlpdf} role='button' tabIndex='-1'>
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

  renderBooks(element, index) {
    if (element) {
      return (
        <div
          className='book-container' key={index}
          role='button' tabIndex='-2'
          onClick={() => {
            this.showInformation(element);
            this.props.toggleModal();
          }}
        >
          <div
            className='book'
            style={element.urlimg !== 'null' ? { backgroundImage: `url(${element.urlimg})` }
              : { backgroundColor: '#7AC9DD' }}
          >
            <h5 className={`title ${element.urlimg !== 'null' ? 'hidden' : 'show'}`}>
              { element.title }
            </h5>
            <span className={`author ${element.urlimg !== 'null' ? 'hidden' : 'show'}`}>
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

  renderImage(image) {
    if (image) {
      return (
        <img src={image} alt='book-cover' />
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

    const genresRender = genres.map((element, index) => (
      <option key={index}>{element.name}</option>
    ));

    const book = currentPage.map((element, index) => {
      if (this.state.inputValue === '') {
        return (this.renderBooks(element, index));
      } else if (this.state.selectedOption === 'title' && element.title.toLowerCase().includes(this.state.inputValue.toLowerCase())) {
        return (this.renderBooks(element, index));
      } else if (this.state.selectedOption === 'author' && element.author.toLowerCase().includes(this.state.inputValue.toLowerCase())) {
        return (this.renderBooks(element, index));
      } else if (this.state.selectedOption === 'editorial' && element.editorial.toLowerCase().includes(this.state.inputValue.toLowerCase())) {
        return (this.renderBooks(element, index));
      } else if (this.state.selectedOption === 'genre' && element.genre.toLowerCase().includes(this.state.inputValue.toLowerCase())) {
        return (this.renderBooks(element, index));
      }
      return null;
    });

    let height;
    this.container ? height = this.container.clientHeight : null;
    this.bar ? height += this.bar.clientHeight : null;
    return (
      <div className='library'>
        <Header {...headerInformation} />
        <div className='search-bar' ref={(bar) => { this.bar = bar; }}>
          <div className='container'>
            <div className='search'>
              <input type='text' value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
              <span onClick={() => this.showAdvanceSearch()}>Busqueda Avanzada</span>
            </div>
          </div>
          <div className={`advance-search ${this.state.showAdvance ? 'show' : 'hidden'}`} style={height ? { height } : null}>
            <span onClick={() => this.showAdvanceSearch()}>X</span>
            <div className='container'>
              <div className='options-container' ref={(sticky) => { this.sticky = sticky; }}>
                <div className='option'>
                  <input type='radio' onChange={() => this.optionChecked('title')} checked={this.state.selectedOption === 'title'} /><p>Título</p>
                </div>
                <div className='option'>
                  <input type='radio' onChange={() => this.optionChecked('author')} checked={this.state.selectedOption === 'author'} /><p>Autor</p>
                </div>
                <div className='option'>
                  <input type='radio' onChange={() => this.optionChecked('editorial')} checked={this.state.selectedOption === 'editorial'} /><p>Editorial</p>
                </div>
                <div className='option'>
                  <input type='radio' onChange={() => this.optionChecked('genre')} checked={this.state.selectedOption === 'genre'} /><p>Género</p>
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
        <div className='books-container' ref={(container) => { this.container = container; }}>
          <div className={`container ${this.state.showAdvance ? 'advance-show' : null}`}>
            { currentPage ? book : null }
            <div className={`modal ${toggle ? 'show' : 'hidden'}`}>
              { this.renderInformation(this.state.element) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Library;

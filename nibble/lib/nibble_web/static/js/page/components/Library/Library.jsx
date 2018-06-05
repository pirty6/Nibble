
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
    this.cropUrl = this.cropUrl.bind(this);
  }

  state = {
    element: null,
    inputValue: '',
    selectedOption: 'title',
    showAdvance: false,
  };

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

  cropUrl(url) {
    if (url.includes('images')) {
      const index = url.indexOf('images');
      const newUrl = `/${url.substring(index, url.lenght)}`;
      return newUrl;
    } else if (url.includes('pdf')) {
      const index = url.indexOf('pdf');
      const newUrl = `/${url.substring(index, url.lenght)}`;
      return newUrl;
    }
    return null;
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
              <span>
                  X
              </span>
            </div>
          </div>
          <div className='container'>
            <div className='left-column'>
              <div className='square' />
              { this.renderImage(this.cropUrl(element.urlimg))}
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
                <a className='primary-button' target='_blank' href={this.cropUrl(element.urlpdf)}>
                  <span>Leer</span>
                </a>
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
            style={element.urlimg !== 'null' ? { backgroundImage: `url(${this.cropUrl(element.urlimg)})` }
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
    this.bar ? height += this.bar.clientHeight - this.search.clientHeight : null;
    return (
      <div className='library'>
        <Header {...headerInformation} />
        <div className='search-bar' ref={(bar) => { this.bar = bar; }}>
          <div className='container' ref={(search) => { this.search = search; }}>
            <div className='search'>
              <input type='text' placeholder='Busqueda' value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
              <span onClick={() => this.showAdvanceSearch()}>Busqueda Avanzada</span>
            </div>
          </div>
          <div className={`advance-search ${this.state.showAdvance ? 'show' : 'hidden'}`} style={height ? { height } : null}>
            <div className='container'>
              <div className='options-container' ref={(sticky) => { this.sticky = sticky; }}>
                <div className='option'>
                  <input type='radio' id='title' onChange={() => this.optionChecked('title')} checked={this.state.selectedOption === 'title'} /><div className='check' /><label htmlFor='title'>Título</label>
                </div>
                <div className='option'>
                  <input type='radio' id='author' onChange={() => this.optionChecked('author')} checked={this.state.selectedOption === 'author'} /><div className='check' /><label htmlFor='author'>Autor</label>
                </div>
                <div className='option'>
                  <input type='radio' id='editorial' onChange={() => this.optionChecked('editorial')} checked={this.state.selectedOption === 'editorial'} /><div className='check' /><label htmlFor='editorial'>Editorial</label>
                </div>
                <div className='option'>
                  <input type='radio' id='genre' onChange={() => this.optionChecked('genre')} checked={this.state.selectedOption === 'genre'} /><div className='check' /><label htmlFor='genre'>Género</label>
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
          <div className={`container ${this.state.showAdvance ? 'advance-show' : 'no-advance'}`}>
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

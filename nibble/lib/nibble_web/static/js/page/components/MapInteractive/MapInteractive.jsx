import React, { Component } from 'react';
import Header from '../Header.jsx';

class MapInteractive extends Component {
  constructor(props) {
    super(props);
    this.renderInformation = this.renderInformation.bind(this);
    this.cropUrl = this.cropUrl.bind(this);
  }

  state = {
    sector: null,
    floor: 1,
  };

  cropUrl(url) {
    if (url.includes('images')) {
      const index = url.indexOf('images');
      const newUrl = `/${url.substring(index, url.lenght)}`;
      return newUrl;
    }
    return null;
  }

  renderInformation(sector, i) {
    if (sector) {
      if (parseInt(sector.sector) === this.state.sector) {
        return (
          <div className='site' key={i} style={(i % 2 === 1 ? { flexDirection: 'row-reverse' } : null)}>
            <div className='left-column' style={{ backgroundImage: `url(${this.cropUrl(sector.urlthumbimg)})` }} />
            <div className='right-column'>
              <div className='container'>
                <h3>{ sector.name }</h3>
                <div className='paragraph'>
                  <p>{ sector.description }</p>
                </div>
                <div
                  className='primary-button' onClick={() => {
                    this.props.setId(this.cropUrl(sector.url360)); this.props.goToPage();
                  }}
                  role='button' tabIndex={i}
                >
                  Ver Vista 360
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    return null;
  }

  render() {
    const {
      header,
      idVr,
      setId,
      goToPage,
      headerEnglish,
      language,
      headerGerman,
      page,
      button,
      buttonGerman,
      buttonEnglish,
      buttonFirst,
      buttonEnglishFirst,
      buttonGermanFirst,
    } = this.props;

    let headerInformation = header;
    let mapImageBot = '/images/piso1_esp.png';
    let mapImageTop = '/images/piso2_esp.png';
    let buttonRender = button;
    if (language) {
      if (language === 'es') {
        headerInformation = header;
        if (this.state.floor === 1) {
          buttonRender = button;
        } else {
          buttonRender = buttonFirst;
        }
        mapImageBot = (
          <picture>
            <source media='(max-width:767px)' srcSet='/images/piso1_espPhone.png' />
            <source media='(min-width:768px)' srcSet='/images/piso1_espIpad.png' />
            <source media='(min-width:1024px)' srcSet='/images/piso1_esp.png' />
            <img src='/images/piso1_esp.png' alt='mapa' />
          </picture>
        );
        mapImageTop = (
          <picture>
            <source media='(max-width:767px)' srcSet='/images/piso2_espPhone.png' />
            <source media='(min-width:768px)' srcSet='/images/piso2_espIpad.png' />
            <source media='(min-width:1024px)' srcSet='/images/piso2_esp.png' />
            <img src='/images/piso2_esp.png' alt='mapa' />
          </picture>
        );
      } else if (language === 'en') {
        if (this.state.floor === 1) {
          buttonRender = buttonEnglish;
        } else {
          buttonRender = buttonEnglishFirst;
        }
        headerInformation = headerEnglish;
        mapImageTop = (
          <picture>
            <source media='(max-width:767px)' srcSet='/images/piso2_ingPhone.png' />
            <source media='(min-width:768px)' srcSet='/images/piso2_ingIpad.png' />
            <source media='(min-width:1024px)' srcSet='/images/piso2_ing.png' />
            <img src='/images/piso2_ing.png' alt='map' />
          </picture>
        );
        mapImageBot = (
          <picture>
            <source media='(max-width:767px)' srcSet='/images/piso1_ingPhone.png' />
            <source media='(min-width:768px)' srcSet='/images/piso1_ingIpad.png' />
            <source media='(min-width:1024px)' srcSet='/images/piso1_ing.png' />
            <img src='/images/piso1_ing.png' alt='map' />
          </picture>
        );
      } else if (language === 'de') {
        if (this.state.floor === 1) {
          buttonRender = buttonGerman;
        } else {
          buttonRender = buttonGermanFirst;
        }
        headerInformation = headerGerman;
        mapImageBot = (
          <picture>
            <source media='(max-width:767px)' srcSet='/images/piso1_alePhone.png' />
            <source media='(min-width:768px)' srcSet='/images/piso1_aleIpad.png' />
            <source media='(min-width:1024px)' srcSet='/images/piso1_ale.png' />
            <img src='/images/piso1_ale.png' alt='karte' />
          </picture>
        );
        mapImageTop = (
          <picture>
            <source media='(max-width:767px)' srcSet='/images/piso2_alePhone.png' />
            <source media='(min-width:768px)' srcSet='/images/piso2_aleIpad.png' />
            <source media='(min-width:1024px)' srcSet='/images/piso2_ale.png' />
            <img src='/images/piso2_ale.png' alt='map' />
          </picture>
        );
      }
    }

    const currentPage = page.state.data;

    const place = currentPage.map((element, index) => (
      <div className='sector' key={index}>
        <div className='container'>
          {this.renderInformation(element, index)}
        </div>
      </div>
    ));

    // console.log(this.state.sector);

    return (
      <div className='map'>
        <Header {...headerInformation} />
        <div className='map-container'>
          <div className='information'>
            <div className='container'>
              <h3>Descubre las instalaciones que la Gómez Morín te ofrece.</h3>
              <p>El Centro Cultural Gomez Morin tiene muchas instalaciones
                .Da click en el area que quieres conocer sus instalaciones.</p>
              <div
                className='primary-button'
                role='button'
                tabIndex='0'
                onClick={() => {
                  this.state.floor === 1 ?
                    this.setState({ floor: 2 })
                    : this.setState({ floor: 1 });
                }
                }
              >
                { buttonRender }
              </div>
            </div>
          </div>
          <div className='map'>
            {this.state.floor === 1 ? mapImageBot : mapImageTop}
            <div className='biblioteca absolute' onClick={() => { this.setState({ sector: 1 }); }} />
            <div className='biblioteca-bottom absolute' onClick={() => { this.setState({ sector: 1 }); }} />
            <div className='infantil absolute' onClick={() => { this.setState({ sector: 2 }); }} />
            <div className='intantil-bottom absolute' onClick={() => { this.setState({ sector: 2 }); }} />
            {
              this.state.floor === 1 ? <div className='patio absolute' onClick={() => { this.setState({ sector: 3 }); }} />
                : null
            }
            <div className='aulas absolute' onClick={() => { this.setState({ sector: 4 }); }} />
            <div className='galerias absolute' onClick={() => { this.setState({ sector: 5 }); }} />
            <div className='aulas-top absolute' onClick={() => { this.setState({ sector: 5 }); }} />
            <div className='galerias-top absolute' onClick={() => { this.setState({ sector: 4 }); }} />
            <div className='pendulo absolute' onClick={() => { this.setState({ sector: 6 }); }} />
          </div>
        </div>
        { place }
      </div>
    );
  }
}

export default MapInteractive;

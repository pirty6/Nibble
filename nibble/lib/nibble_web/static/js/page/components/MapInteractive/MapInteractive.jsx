
import React, { Component } from 'react';
import Header from '../Header.jsx';

class MapInteractive extends Component {
  constructor(props) {
    super(props);
    this.renderInformation = this.renderInformation.bind(this);
  }

  state = {
    sector: null,
    floor: 1,
  };

  renderInformation(sector, i) {
    if (sector) {
      if (parseInt(sector.sector) === this.state.sector) {
        return (
          <div className='site' key={i} style={(i % 2 === 1 ? { flexDirection: 'row-reverse' } : null)}>
            <div className='left-column' style={{ backgroundImage: `url(${sector.urlthumbimg})` }} />
            <div className='right-column'>
              <div className='container'>
                <h3>{ sector.name }</h3>
                <div className='paragraph'>
                  <p>{ sector.description }</p>
                </div>
                <div
                  className='primary-button' onClick={() => {
                    this.props.setId(sector.url360); this.props.goToPage();
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
        mapImageBot = '/images/piso1_esp.png';
        mapImageTop = '/images/piso2_esp.png';
      } else if (language === 'en') {
        if (this.state.floor === 1) {
          buttonRender = buttonEnglish;
        } else {
          buttonRender = buttonEnglishFirst;
        }
        headerInformation = headerEnglish;
        mapImageTop = '/images/piso2_ing.png';
        mapImageBot = '/images/piso1_ing.png';
      } else if (language === 'de') {
        if (this.state.floor === 1) {
          buttonRender = buttonGerman;
        } else {
          buttonRender = buttonGermanFirst;
        }
        headerInformation = headerGerman;
        mapImageBot = '/images/piso1_ale.png';
        mapImageTop = '/images/piso2_ale.png';
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
            <img src={this.state.floor === 1 ? mapImageBot : mapImageTop} alt='map' />
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

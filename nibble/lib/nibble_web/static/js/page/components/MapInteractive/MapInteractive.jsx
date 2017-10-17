'use strict';
import React, { Component } from 'react';
import Header from '../Header.jsx';

class MapInteractive extends Component{
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
        console.log('entro');
        return (
          <div className='site' key = {i}>
            <div className = 'left-column'>
              <img className = 'image' src = { sector.urlthumbimg }/>
              <img className = 'play' src = '/images/play.svg'
              onClick = { () => {
                this.props.setId(sector.url360); this.props.goToPage();
                }
              }/>
            </div>
            <div className = 'right-column'>
              <div className='container'>
                <h3>{ sector.name } —</h3>
                <div className='paragraph'>
                  <p>{ sector.description }</p>
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
      sites,
      idVr,
      setId,
      goToPage,
      headerEnglish,
      language,
      headerGerman,
      page,
    } = this.props;

    let headerInformation = header;
    let mapImageBot = '/images/piso1_esp.png';
    let mapImageTop = '/images/piso2_esp.png';
    if (language) {
      if (language === 'es') {
        headerInformation = header;
        mapImageBot = '/images/piso1_esp.png';
        mapImageTop = '/images/piso2_esp.png';
      } else if (language === 'en') {
        headerInformation = headerEnglish;
        mapImageTop = '/images/piso2_ing.png';
        mapImageBot = '/images/piso1_ing.png';
      } else if (language === 'de') {
        headerInformation = headerGerman;
        mapImageBot = '/images/piso1_ale.png';
        mapImageTop = '/images/piso2_ale.png';
      }
    }

    const currentPage = page.state.data;

    let place = currentPage.map((element, index) => (
      <div className = 'sector' key = { index }>
        <div className = 'container'>
          {this.renderInformation(element, index)}
        </div>
      </div>
    ));

    // console.log(this.state.sector);

    return (
      <div className = 'map'>
        <Header { ...headerInformation }/>
        <div className = 'map-container'>
          <div className = 'information'>
            Hello World!
          </div>
          <div className = 'map'>
            <img src = { this.state.floor === 1 ? mapImageBot : mapImageTop } />
            <div className='biblioteca absolute' onClick={ () => { this.setState({sector: 1 })} }></div>
            <div className='biblioteca-bottom absolute' onClick={ () => { this.setState({sector: 1 })} }></div>
            <div className='infantil absolute' onClick={ () => { this.setState({sector: 2 })} }></div>
            <div className='intantil-bottom absolute' onClick={ () => { this.setState({sector: 2 })} }></div>
            <div className='patio absolute' onClick={ () => { this.setState({sector: 3 })} }></div>
            <div className='aulas absolute' onClick={ () => { this.setState({sector: 4 })} }></div>
            <div className='galerias absolute' onClick={ () => { this.setState({sector: 5 })} }></div>
            <div className='aulas-top absolute' onClick={ () => { this.setState({sector: 5 })} }></div>
            <div className='galerias-top absolute' onClick={ () => { this.setState({sector: 4 })} }></div>
            <div className='pendulo absolute' onClick={ () => { this.setState({sector: 6 })}}></div>
          </div>
        </div>
        { place }
      </div>
    );
  }
}

export default MapInteractive;

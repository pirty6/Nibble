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
  };

  renderInformation(sector, i) {
    if (sector) {
      console.log(sector.name);
      console.log(this.state.sector);
      if (parseInt(sector.sector) === this.state.sector) {
        console.log('entro');
        return (
          <div className='site' key = {i}>
            <div className = 'left-column'>
              <img className = 'image' src = { sector.urlthumbimg }/>
              <img className = 'play' src = '/images/play.svg'
              onClick = { () => {
                /* FIXME  setId is not defined*/
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
            <img src ='/images/FINAL.png' />
            <div className='biblioteca absolute' onClick={ () => { this.setState({sector: 1 })} }></div>
            <div className='biblioteca-bottom absolute' onClick={ () => { this.setState({sector: 1 })} }></div>
            <div className='infantil absolute' onClick={ () => { this.setState({sector: 2 })} }></div>
            <div className='intantil-bottom absolute' onClick={ () => { this.setState({sector: 2 })} }></div>
            <div className='patio absolute' onClick={ () => { this.setState({sector: 3 })} }></div>
            <div className='aulas absolute' onClick={ () => { this.setState({sector: 4 })} }></div>
            <div className='galerias absolute' onClick={ () => { this.setState({sector: 5 })} }></div>
            <div className='aulas-top absolute' onClick={ () => { this.setState({sector: 5 })} }></div>
            <div className='galerias-top absolute' onClick={ () => { this.setState({sector: 4 })} }></div>
          </div>
        </div>
        { place }
      </div>
    );
  }
}

export default MapInteractive;

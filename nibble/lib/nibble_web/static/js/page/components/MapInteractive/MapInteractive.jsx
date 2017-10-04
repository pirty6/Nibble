'use strict';
import React, { Component } from 'react';
import Header from '../Header.jsx';

class MapInteractive extends Component{
  constructor(props) {
    super(props);

    // this.renderInformation = this.renderInformation.bind(this);
  }

  // state = {
  //   sector: 1,
  // };

  // renderInformation(sector) {
  //   if (sector) {
  //     return (
  //       <div className = 'sector-container'>
  //         hello world!
  //       </div>
  //     );
  //   }
  //
  //   return null;
  // }

  render() {
    const {
      header,
      sites,
      idVr,
      setId,
      goToPage,
    } = this.props;

    console.log(idVr);

    let place = sites.map((element, index) => (
      <div className = 'sector' key = { index }>
        <div className = 'container'>
          { element.sector.map((sec, i) => (
            <div className = 'site' key = { i }>
              <div className = 'left-column'>
                <img className = 'image' src = { sec.image }/>
                <img className = 'play' src = '/images/play.svg'
              onClick = { () => {
                setId(sec.imageVr); goToPage();
              }
             }/>
              </div>
              <div className = 'right-column'>
                <h3>{ sec.title }</h3>
                <p>{ sec.information }</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ));

    return (
      <div className = 'map'>
        <Header { ...header }/>
        <div className = 'map-container'>
          <div className = 'information'>
            Hello World!
          </div>
          <div className = 'map'>
            <img src ='/images/FINAL.png' />
            <div className='biblioteca' onClick={ console.log('pee') }></div>
            <div className='bilioteca-2'></div>
            <div className='infantil'></div>
            <div className='patio'></div>
            <div className='aulas'></div>
            <div className='galerias'></div>
          </div>
        </div>
        { place }
      </div>
    );
  }
}

export default MapInteractive;

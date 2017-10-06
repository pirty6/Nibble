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
      if(sector.sector === this.state.sector){
        return (
          <div className='site' key = {i}>
            <div className = 'left-column'>
              <img className = 'image' src = { sector.image }/>
              <img className = 'play' src = '/images/play.svg'
              onClick = { () => {
                /* FIXME  setId is not defined*/
                this.props.setId(sector.imageVr); this.props.goToPage();
                }
              }/>
            </div>
            <div className = 'right-column'>
              <div className='container'>
                <h3>{ sector.title } —</h3>
                <div className='paragraph'>
                  <p>{ sector.information }</p>
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
    } = this.props;

    let place = sites.map((element, index) => (
      <div className = 'sector' key = { index }>
        <div className = 'container'>
          { element.sector.map((sec, i) => (
            this.renderInformation(sec, i)
            // <div className = 'site' key = { i }>
            //   <div className = 'left-column'>
            //     <img className = 'image' src = { sec.image }/>
            //     <img className = 'play' src = '/images/play.svg'
            //   onClick = { () => {
            //     setId(sec.imageVr); goToPage();
            //   }
            //  }/>
            //   </div>
            //   <div className = 'right-column'>
            //     <h3>{ sec.title }</h3>
            //     <p>{ sec.information }</p>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    ));

    // console.log(this.state.sector);

    return (
      <div className = 'map'>
        <Header { ...header }/>
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

'use strict';
import React, { Component } from 'react';

class Team extends Component {
  render() {
    const{
      team,
      title,
    } = this.props;

    // console.log(team);

    let teamRender=team.map((element, index) => (
      <div className='teammate' style={{ backgroundImage: `url(${element.image})`}}
        key={ index }>
        <h6>{ element.name}</h6>
        { element.links.map((el, i) => {
          <div className='icon'>
            <img src={ el.icon} />
          </div>
        })}
      </div>
    ));

    return (
      <div className='team'>
        <div className='container'>
          <div className='header-team'>
            <h1>{ title } <strong> Nibble</strong></h1>
          </div>
          <div className='team'>
            { teamRender }
          </div>
        </div>
      </div>
    );
  }
}

export default Team;

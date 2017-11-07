import React, { Component } from 'react';

class Cms extends Component {
  render() {
    let add = null;
    const form = document.getElementById('showBooks').outerHTML;
    let title = null;
    let back = null;

    if (this.props.location) {
      if (this.props.location.pathname.includes('libreria')) {
        title = 'Libreria';
      } else if (this.props.location.pathname.includes('usuarios')) {
        title = 'Usuarios';
      } else if (this.props.location.pathname.includes('sectores')) {
        title = 'Secciones';
      } else if (this.props.location.pathname.includes('roles')) {
        title = 'Roles';
      } else if (this.props.location.pathname.includes('llaves')) {
        title = 'Llaves';
      }
    }


    if (document.getElementById('add')) {
      add = document.getElementById('add').outerHTML;
    }

    if (document.getElementById('back')) {
      back = document.getElementById('back').outerHTML;
    }

    return (
      <div className='cms-library'>
        <div className='container'>
          <div className='title-container'>
            <h2>{ title }</h2>
            {(document.getElementById('add')
              ? <div
                dangerouslySetInnerHTML={{ __html: add }}
              />
              : null)}
          </div>
          <div
            className='text'
            dangerouslySetInnerHTML={{ __html: form }}
          />
          <div className='back-container'>
            {(document.getElementById('back')
              ? <div
                dangerouslySetInnerHTML={{ __html: back }}
              />
              : null)}
          </div>
        </div>
      </div>
    );
  }
}

export default Cms;

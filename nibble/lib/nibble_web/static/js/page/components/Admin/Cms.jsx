import React, { Component } from 'react';

class Cms extends Component {
  componentDidMount() {
    this.props.getRole(this.props.location.pathname);
  }
  render() {
    let add = null;
    const form = document.getElementById('showBooks').outerHTML;
    let title = null;
    let back = null;

    if (this.props.location) {
      if (this.props.location.state) {
        const aux = this.props.location.state.data.actions;
        if (this.props.location.pathname.includes('libreria')) {
          title = 'Libreria';
          for (let i = 0; i < aux.length; i++) {
            if (aux[i] === 'Puede Agregar Libros') {
              if (document.getElementById('add')) {
                add = document.getElementById('add').outerHTML;
              }
            }
            // if (aux[i] === 'Puede E')
          }
        } else if (this.props.location.pathname.includes('usuarios')) {
          title = 'Usuarios';
          for (let i = 0; i < aux.length; i++) {
            if (aux[i] === 'Puede Agregar Usuarios') {
              if (document.getElementById('add')) {
                add = document.getElementById('add').outerHTML;
              }
            }
          }
        } else if (this.props.location.pathname.includes('sectores')) {
          title = 'Secciones';
          for (let i = 0; i < aux.length; i++) {
            if (aux[i] === 'Puede Agregar Sectores') {
              if (document.getElementById('add')) {
                add = document.getElementById('add').outerHTML;
              }
            }
            if (aux[i] === 'Puede Borrar Secciones') {
              if (document.getElementById('delete')) {
                document.getElementById('delete').style.display = 'inline';
              }
            }
            if (aux[i] === 'Puede Modificar Secciones') {
              if (document.getElementById('edit')) {
                document.getElementById('edit').style.display = 'inline';
              }
            }
          }
        } else if (this.props.location.pathname.includes('roles')) {
          title = 'Roles';
          for (let i = 0; i < aux.length; i++) {
            if (aux[i] === 'Puede Agregar Roles') {
              if (document.getElementById('add')) {
                add = document.getElementById('add').outerHTML;
              }
            }
          }
        } else if (this.props.location.pathname.includes('llaves')) {
          title = 'Llaves';
          for (let i = 0; i < aux.length; i++) {
            if (aux[i] === 'Puede Crear Llaves') {
              if (document.getElementById('add')) {
                add = document.getElementById('add').outerHTML;
              }
            }
          }
        }
      }
    }


    // if (document.getElementById('add')) {
    //   add = document.getElementById('add').outerHTML;
    // }

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

'use strict';
import React, { Component } from 'react';

class Login extends Component {
  render() {
    console.log(document.getElementById("form-1"));
    return (
      <div className='login'>
        <div className='container'>
          <div className='column'>
            <div className='image/container'>
              <img src='/images/nibble.svg' alt='nibble-logo'/>
              <h1>Bienvenido</h1>
              <h3>Gestionador de contenido de la Gomez Morin</h3>
              <span>Desarrollado por Nibble</span>
            </div>
          </div>
          <div className='column'>
            <div className='column-container'>
              <h2>Login</h2>
              <div className='form'>
                BLABLABLA
              </div>
              <span>¿Olvidaste tu contraseña?</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;


import React, { Component } from 'react';

class Login extends Component {
  render() {
    const form = document.getElementById('form-1').outerHTML;
    return (
      <div className='login'>
        <div className='container'>
          <div className='column-image'>
            <div className='image-container'>
              <div className='purple' />
              <div className='text-container'>
                <img src='/images/nibble.svg' alt='nibble-logo' />
                <h1>Bienvenido</h1>
                <h6>Gestionador de contenido de la Gomez Morin</h6>
                <span>Desarrollado por Nibble</span>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='column-container'>
              <h2>Login</h2>
              <div
                className='text'
                dangerouslySetInnerHTML={{ __html: form }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

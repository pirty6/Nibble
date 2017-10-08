'use strict';
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
                <img src='/images/nibble.svg' alt='nibble-logo'/>
                <h1>Bienvenido</h1>
                <h3>Gestionador de contenido de la Gomez Morin</h3>
                <span>Desarrollado por Nibble</span>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='column-container'>
              <h2>Login</h2>
              {/* <form acceptCharset="UTF-8" action="/admin" method="post">
                <input name="_csrf_token" type="hidden" value={CSRF_TOKEN} />
                <input name="_utf8" type="hidden" value="✓" />
                <div className="form-group">
                  <label className="control-label" htmlFor="user_name">Name</label>
                  <input className="form-control" id="user_name" name="user[name]" type="text" />
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="user_password">Password</label>
                  <input className="form-control" id="user_password" name="user[password]" type="text" />
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="user_email">Email</label>
                  <input className="form-control" id="user_email" name="user[email]" type="text" />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary" type="submit">Submit</button>  </div>
                </form> */}
                <div
                  className='text'
                  dangerouslySetInnerHTML={{ __html: form }}
                />
              <span>¿Olvidaste tu contraseña?</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;


import React, { Component } from 'react';

class CMSSidebar extends Component {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
  }

  validate(element) {
    if (element.title === 'Dashboard') {
      return true;
    }
    if (this.props.page.state) {
      const aux = this.props.page.state.data.actions;
      for (let i = 0; i < aux.length; i++) {
        if (element) {
          if (aux[i].includes(element.title)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  render() {
    const link = this.props.links.map((element, index) => (
      this.validate(element) ?
        <div
          className='link'
          role='link'
          tabIndex='0'
          key={index}
          style={this.props.location.pathname.includes(element.link)
            ? { backgroundColor: '#425967' }
            : null} onClick={() => { window.location = `/cms${element.link}`; }}
        >
          <img
            src={this.props.location.pathname.includes(element.link)
              ? element.iconActive : element.icon} alt={`${element.title} icon`}
          />
          <span
            style={this.props.location.pathname.includes(element.link)
              ? { color: '#fff' }
              : null}
          >
            { element.title }
          </span>
        </div>
        : null
    ));

    return (
      <div className='cms-sidebar'>
        <div className='container'>
          <div className='logo'>
            <h6>Nibble</h6>
          </div>
          { link }
        </div>
      </div>
    );
  }
}

export default CMSSidebar;

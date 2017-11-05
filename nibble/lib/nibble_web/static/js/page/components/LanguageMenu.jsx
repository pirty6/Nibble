'use strict';
import React, {
  Component
} from 'react';

class LanguageMenu extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  state = {
    show: false,
  };

  toggle() {
    this.setState({
      show: !this.state.show
    });
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.state.show) {
      this.toggle();
    }
  }

  render() {
      let fL;
      let sL;
      var language = this.props.language;
      if (language === 'es') {
        fL = 'en';
        sL = 'de';
      } else if (language === 'en') {
        fL = 'es';
        sL = 'de';
      } else if (language === 'de') {
        fL = 'es';
        sL = 'en';
      }

    return (
      <div className='language-menu'>
        <div className='container' onClick = { () => this.toggle() }>
          <span>{language}</span>
          <img src='/images/down-arrow.svg'/>
        </div>
        <div className={'languages ' + (this.state.show ? 'show' : 'hidden') } ref={this.setWrapperRef}>
          <div className='language' onClick={() => {this.props.changeLanguage(fL); this.toggle()}}>
            <span>{ fL }</span>
          </div>
          <div className='language' onClick={() => {this.props.changeLanguage(sL); this.toggle()}} >
            <span>{ sL }</span>
          </div>
        </div>
      </div>
    );
  }
}

export default LanguageMenu;

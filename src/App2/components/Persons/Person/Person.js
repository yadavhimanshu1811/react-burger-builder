import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';



class Person extends Component {

  componentDidMount(){
    // document.querySelectorAll('input')[1].focus();
    this.inputElement.focus();
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <div className={classes.Person}>
      {this.props.isAuth ? <p>This Person is Authenticated</p> : <p>Please Log in</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={(inputEl) => {
            this.inputElement = inputEl;
          }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person;

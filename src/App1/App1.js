import React, { Component } from 'react';
// import Radium from 'radium';
import classes from './App1.css';
// import PersonComponent from './PersonComponent';
// import Assignment1char from './Assignment1char';
import Assignment1 from './Assignment1';
import Persons from './Persons.js';
import Cockpit from "./Cockpit.js"





class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        { id: ' bvcds', name: 'Max', age: 28 },
        { id: 'chadcc', name: 'Manu', age: 29 },
        { id: ' djcbc', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      userInput: 'default',
      showPersons: false,
      showCockpit: true
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    // or persons=[...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  // next assignment starts

  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  }

  deleteCharacterHandler = (index) => {
    const text = this.state.userInput.split('');         //Converting string into array to use splice
    text.splice(index, 1);
    const updatedText = text.join('');                // re-converting into string
    this.setState({ userInput: updatedText });

  }





  render() {
    console.log('[App.js] render')
    let btnClass = '';
    let personslist = null;

    const assignment1 = (
      <Assignment1
        changed={this.inputChangeHandler}
        userInput={this.state.userInput}
        clicked={this.deleteCharacterHandler}
      />
    )
    if (this.state.showPersons) {
      personslist = (
        < div >
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div >
      )
      btnClass = classes.Red;
    }

    return (

      <div className={classes.App} >

        <button
          onClick={() => {
            let flag= this.state.showCockpit
            this.setState({ showCockpit: !flag });
          }}
        >
          Remove Cockpit
        </button>

        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
        ) : null}

        <hr />
        
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {personslist}        <hr />
        {assignment1}        <hr />



      </div >
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id: 'wvvs', name: 'Austin', age: '6'},
      {id: 'vdsbn', name: 'Adrian', age: '4'},
      {id: '4t6y', name: 'Aila', age: '2'}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === personId;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons : persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);

    this.setState({persons: persons});
  }

  render() {

    const style = {
      backgroudColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '10px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person 
                  click={() => this.deletePersonHandler(index)}
                  name={person.name} 
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}/>
        })}
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <p>This actually works.</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
      //React.createElement('div', {className: 'App'} , React.createElement('h1', null, 'Hi, I\'am a React App!'))
    );
  }
}

export default App;



/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
To get started, edit <code>src/App.js</code> and save to reload.
</p> */
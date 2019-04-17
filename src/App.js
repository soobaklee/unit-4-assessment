import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

const button = ['button1', 'button2', 'button3', 'button4']


class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: button[0]
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            // {...props}
            button={button}
            handleChange={this.handleChange}
            selected={this.state.selected}
          />
          <Circles
            // {...props}
            button={button}
            handleChange={this.handleChange}
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}

export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Denis");

  function handleNameChange(e) {
    setName(e.target.value)
  }

  return (
    <div className="App">
      <input value={name} onChange={(e) => setName(e.target.value)} >
      </input>
      <p>Hello {name}</p>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div >
  );
}

class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState((state, props) => {
      return { count: this.state.count + 1 };
    });
  }
  render() {
    return (
      <div>
        <p>you clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>Click me</button>
      </div >
    )
  }
}


export default App;

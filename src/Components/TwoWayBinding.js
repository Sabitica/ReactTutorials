import React, { Component } from 'react'
// import './App.css';



class TwoWayBinding extends Component {
  state = {
    name: 'Sabitica'
  }

  changeName = (newName) => {
    this.setState({
      name: newName
    })
  }

  changeNameFromInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <br /><br />
        <button onClick={this.changeName.bind(this, 'Sarah Jane')}>Change State Using Bind</button>
        <button onClick={() => this.changeName('Sarah')}>Change State</button>
        <br /><br />
        <input type="text" onChange={this.changeNameFromInput} value={this.state.name}/>
        <div>{this.state.name}</div>
      </div>
    )
  }
}

export default TwoWayBinding;

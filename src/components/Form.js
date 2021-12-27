import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    return (
      <form>
        <label> Name</label>
        <input type="text" name="name" value={this.state.name}></input>
        <label> Number</label>
        <input type="tel"></input>
        <button type="submite">Add contact</button>
      </form>
    );
  }
}

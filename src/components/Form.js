import React, { Component } from 'react';
import shortid from 'shortid';
import s from './Phone.module.css';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  InputValue = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = e => {
    e.preventDefault();

    const checkName = this.props.contactList({ name: this.state.name });
    if (checkName) {
      alert('Это имя уже существует');

      return;
    }

    this.props.onSubmit({
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    });
    this.resetInputvalues();
  };

  resetInputvalues = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const idName = shortid.generate();
    const idNumber = shortid.generate();

    return (
      <form className={s.form} onSubmit={this.addContact}>
        <label htmlFor={idName} className={s.labelName}>
          {' '}
          Name
        </label>
        <input
          id={idName}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.InputValues}
          autoComplete="off"
        ></input>
        <label htmlFor={idNumber} className={s.labelNumber}>
          {' '}
          Number
        </label>
        <input
          id={idNumber}
          type="tel"
          pattern="^[ 0-9]+$"
          name="number"
          value={this.state.number}
          onChange={this.InputValues}
          autoComplete="off"
        ></input>
        <button type="submite" className={s.btnForm}>
          Add contact
        </button>
      </form>
    );
  }
}

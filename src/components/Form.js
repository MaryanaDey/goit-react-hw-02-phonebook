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
    const { name, number } = this.state;

    return (
      <form className={s.form} onSubmit={this.addContact}>
        <label htmlFor={idName} className={s.labelName}>
          Name
        </label>
        <input
          id={idName}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          name="name"
          value={name}
          placeholder="Name"
          onChange={this.InputValue}
          autoComplete="off"
        />

        <label htmlFor={idNumber} className={s.labelNumber}>
          Number
        </label>

        <input
          id={idNumber}
          type="number"
          pattern="^[ 0-9]+$"
          name="number"
          value={number}
          placeholder="Number"
          onChange={this.InputValue}
          autoComplete="off"
        />

        <button type="submite" className={s.btnForm}>
          Add contact
        </button>
      </form>
    );
  }
}

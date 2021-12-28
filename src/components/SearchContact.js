import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './Phone.module.css';

export default function SearchContact({ value, SearchContact }) {
  const id = shortid.generate();

  return (
    <div className={s.containerSearch}>
      <label htmlFor={id} className={s.labelSearch}>
        Поиск контактов по имени
      </label>
      <input
        type="tex"
        name="filter"
        value={value}
        onChange={SearchContact}
        id={id}
        className={s.inputSearch}
      ></input>
    </div>
  );
}

SearchContact.propTypes = {
  value: PropTypes.string.isRequired,
  SearchContact: PropTypes.func.isRequired,
};

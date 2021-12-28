import React from 'react';
import PropTypes from 'prop-types';
import s from './Phone.module.css';

export default function СontactList({ contactList, onDeleted }) {
  return (
    <ul className={'js-list'}>
      {contactList.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button className={s.btnList} type="button" onClick={() => onDeleted(id)}>
              Видалити
            </button>
          </li>
        );
      })}
    </ul>
  );
}

СontactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleted: PropTypes.func.isRequired,
};

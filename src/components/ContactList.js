import React from 'react';
import PropTypes from 'prop-types';

export default function СontactList({ contactList, onDeleted }) {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button type="button">Видалити</button>
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

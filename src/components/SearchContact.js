import React from 'react';

export default function SearchContact({ velue, SearchContact }) {
  return (
    <div>
      <label>Поиск контактов по имени</label>
      <input type="tex" name="filter" value="value" onChange={SearchContact}></input>
    </div>
  );
}

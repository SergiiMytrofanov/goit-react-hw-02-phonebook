import React from 'react';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <input
        type="text"
        name="filter"
        placeholder="Пошук за ім'ям"
        value={filter}
        onChange={onChange}
      />
    </>
  );
};

export default Filter;

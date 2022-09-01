import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../Redux/filter';
import { getFilterContacts } from '../../Redux/filter';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterContacts);
  return (
    <label>
      Пошук контактів за іменами
      <input
        type="filter"
        name="filter"
        value={filter}
        onChange={event =>
          dispatch(setFilter(event.currentTarget.value.toLowerCase()))
        }
      />
    </label>
  );
};

export default Filter;

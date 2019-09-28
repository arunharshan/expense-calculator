import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCategory } from '../actions/categoryActions';

const SelectBox = ({ selected, style, disable, label, optionChange }) => {
  const dispatch = useDispatch();
  const categoryState = useSelector(state => state.categories);
  const [select, setSelect] = useState(selected ? selected : 1);
  useEffect(() => {
    const loadCat = () => {
      dispatch(fetchCategory());
    };
    loadCat();
  }, [dispatch]);
  useEffect(() => {
    setSelect(selected ? selected : 1);
  }, [selected]);
  const onChangeHandler = e => {
    const val = e.target.value;
    setSelect(value => ({ ...value, val }));
    optionChange(e.target.value);
  };
  if (categoryState.category) {
    return (
      <>
        <label className='label-sm'>{label}</label>
        <select
          className={`browser-default ${style}`}
          value={select}
          disabled={disable}
          onChange={onChangeHandler}
        >
          {categoryState.category.map(cat => {
            return (
              <option value={cat.id} key={cat.id}>
                {cat.value}
              </option>
            );
          })}
        </select>

        <div className='invalid-feedback'>Please select category.</div>
      </>
    );
  } else {
    return null;
  }
};

export default SelectBox;

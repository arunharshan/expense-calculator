import React from 'react';

const CategoryIcon = ({ icons }) => {
  const displayIcons = () => {
    switch (icons) {
      case 1:
        return (
          <>
            <span className='avatar spcl-danger text-white mr-1'>
              <i className='fas fa-home'></i>
            </span>
          </>
        );
      case 2:
        return (
          <>
            <span className='avatar spcl-success  text-white mr-1'>
              <i className='fas fa-car'></i>
            </span>
          </>
        );
      case 3:
        return (
          <>
            <span className='avatar spcl-warning  text-white mr-1'>
              <i className='fas fa-utensils'></i>
            </span>
          </>
        );
      case 4:
        return (
          <>
            <span className='avatar spcl-message text-white mr-1'>
              <i className='fas fa-user-tag'></i>
            </span>
          </>
        );
      default:
        return (
          <>
            <span className='avatar spcl-warning  text-white mr-1'>
              <i className='fas fa-clipboard-list'></i>
            </span>
          </>
        );
    }
  };

  return displayIcons();
};

export default CategoryIcon;

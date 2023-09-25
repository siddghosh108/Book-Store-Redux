import React from 'react';
import PropTypes from 'prop-types';

function BookComp({
  id, title, author, category, onClick,
}) {
  const handleRemoveClick = () => {
    onClick(id);
  };

  return (
    <div className="books-container">
      <div className="book-container">
        <h3 className="book-category">{category}</h3>
        <h2 className="book-title">{title}</h2>
        <h3 className="book-author">{author}</h3>
      </div>
      <ul className="options">
        <li>
          <button type="button">Comments</button>
        </li>

        <li>
          <button type="button" onClick={handleRemoveClick}>
            Remove
          </button>
        </li>

        <li>
          <button type="button">Edit</button>
        </li>
      </ul>
    </div>
  );
}

BookComp.defaultProps = {
  id: '',
  title: '',
  author: '',
  category: '',
  onClick: () => {},
};

BookComp.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  onClick: PropTypes.func,
};

export default BookComp;

import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { book } = props;
  const {
    title, author, category,
  } = book;
  return (
    <div className="books-container">
      <div className="book-container">
        <h3 className="book-category">{category}</h3>
        <h2 className="book-title">{title}</h2>
        <h3 className="book-author">{author}</h3>
      </div>
      <ul className="options">
        <li>
          <a href="/">Comments</a>
        </li>
        <li>
          <a href="/">Remove</a>
        </li>
        <li>
          <a href="/">Edit</a>
        </li>
      </ul>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
export default Book;

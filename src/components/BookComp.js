import React from 'react';
import PropTypes from 'prop-types';

function BookComp({
  bookId, title, author, category, onClick,
}) {
  return (
    <div className="books-container">
      <div className="book-container">
        <h3 className="book-category">{category}</h3>
        <h2 className="book-title">{title}</h2>
        <h3 className="book-author">{author}</h3>
        <ul className="options">
          <li>
            <button type="button">Comments</button>
          </li>
          <li>
            <button type="button" onClick={onClick} id={bookId}>
              Remove
            </button>
          </li>
          <li>
            <button type="button">Edit</button>
          </li>
        </ul>
      </div>
      <div className="book-prog">
        <div className="book-container">
          <h3 className="book-percentage">50%</h3>
          <p className="book-comp">Completed</p>
        </div>
        <div className="chapter-container">
          <p className="current">Current Chapter</p>
          <h4 className="chapter">Chapter 17</h4>
          <button className="btn-progress" type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
}

BookComp.defaultProps = {
  title: '',
  author: '',
  bookId: '',
  onClick: '',
  category: '',
};

BookComp.propTypes = {
  bookId: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  onClick: PropTypes.func,
};

export default BookComp;

import React from 'react';
import PropTypes from 'prop-types';
import './styles/BookComp.css';

function BookComp({
  bookId, title, author, category, onClick,
}) {
  return (
    <div className="book-container">
      <div className="bookss">
        <h3 className="book-category">{category}</h3>
        <h2 className="book-title">{title}</h2>
        <h3 className="book-author">{author}</h3>
        <ul className="options">
          <li>
            <button type="button" className="button">Comments</button>
          </li>
          <li>
            <button type="button" className="button" onClick={onClick} id={bookId}>
              Remove
            </button>
          </li>
          <li>
            <button type="button" className="button">Edit</button>
          </li>
        </ul>
      </div>
      <div className="book-prog">
        <div className="progress-section">
          <progress
            value="75"
            min="0"
            max="100"
            style={{
              height: 0,
              width: 0,
            }}
          >
            75%
          </progress>
        </div>
        <div className="book-container2">
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

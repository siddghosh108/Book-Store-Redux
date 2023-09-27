import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookComp from '../components/BookComp';
import { removeBook } from '../redux/books/booksSlice';
import Form from '../components/Form';

function Books() {
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <>
      {books.map((book) => (
        <BookComp
          key={book.bookId + book.author}
          title={book.title}
          author={book.author}
          category={book.category}
          id={book.bookId}
          onClick={() => clickHandler(book.bookId)}
        />
      ))}
      <Form />
    </>
  );
}

export default Books;

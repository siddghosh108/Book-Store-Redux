import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, deleteTheBook } from '../redux/books/booksSlice';
import Form from '../components/Form';
import BookComp from '../components/BookComp';

function Books() {
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const bookItems = Object.entries(books).map(([id, books]) => {
    const [item] = books;
    return { id, ...item };
  });

  const clickHandler = (e) => {
    dispatch(deleteTheBook(e.target.id));
  };

  return (
    <>
      <div className="books-container">
        {bookItems.map((book) => (
          <BookComp
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            bookId={book.id}
            onClick={clickHandler}
          />
        ))}
      </div>
      <hr />
      <Form className="form" />
    </>
  );
}

export default Books;

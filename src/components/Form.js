import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);

  const submitHandler = (e) => {
    e.preventDefault();
    const id = books.length + 1;
    const newBook = {
      bookId: `item${id}`,
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="book-title"
          required
        />
        <input
          type="text"
          placeholder="Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          name="book-author"
          required
        />
        <Dropdown
          options={[
            'Action',
            'Science Fiction',
            'Economy',
            'Fiction',
            'Nonfiction',
          ]}
          value={category}
          onChange={(selectedOption) => setCategory(selectedOption.value)}
          placeholder="Category"
          required
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </>
  );
}

export default Form;

import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const APPID = 'LQYGPUQgAZCQeGfRpgA8';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APPID}`;

const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`${url}/books`);
  return response.data;
});

const addTheBook = createAsyncThunk('books/addTheBook', async (book, API) => {
  try {
    await axios.post(`${url}/books`, book);
    API.dispatch(fetchBooks());
    const response = API.getState().books;
    return response;
  } catch (error) {
    throw new Error(error);
  }
});

const deleteTheBook = createAsyncThunk(
  'books/deleteTheBook',
  async (bookId, API) => {
    try {
      await axios.delete(`${url}/books/${bookId}`);
      API.dispatch(fetchBooks());
      return bookId;
    } catch (error) {
      throw new Error(error);
    }
  },
);

const initialState = {
  books: [],
  Loading: 'idle',
  error: null,
};

export const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(
        (book) => book.bookId !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTheBook.fulfilled, (state, action) => {
      state.Loading = false;
      Object.assign(state.books, action.payload);
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.Loading = false;
      state.error = null;
      state.books = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.Loading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchBooks.pending, (state) => {
      state.Loading = true;
      state.error = null;
    });
    builder.addCase(deleteTheBook.fulfilled, (state, action) => {
      delete state.books[action.payload];
    });
  },
});

export { fetchBooks, addTheBook, deleteTheBook };

export const { addBook, removeBook } = booksSlice.actions;
export const displayBook = (state) => state.book.books;
export default booksSlice.reducer;


// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useParams } from 'react-router-dom';
import BookList from './components/BookList';
import QRCodeGenerator from './components/QRCodeGenerator';
import BookDetails from './components/BookDetails';

const App = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Hulk',
      isbn: '1234567890',
      cost: 20.0,
      availability: true,
      category: 'Superhero',
      bookCount: 5,
      row: 3,
    },
    {
      id: 2,
      title: 'Thor',
      isbn: '0987654321',
      cost: 25.0,
      availability: false,
      category: 'Superhero',
      bookCount: 8,
      row: 30,
    },
    // Add more books as needed
  ]);


  const handleAddBook = (newBook) => {
    setBooks([...books, { id: books.length + 1, ...newBook }]);
  };

  const handleDeleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const handleEditBook = (id, updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, ...updatedBook } : book
      )
    );
  };

  return (
    <Router>
      <div>

        <nav>
          <ul>
            <li>
              <Link to="/">Bookshelf</Link>
            </li>
            <li>
              <Link to="/generate-qr">Generate QR Code</Link>
            </li>
          </ul>
        </nav>

        <hr />
        <Routes>
          <Route
            path="/"
            exact element={<BookList books={books} onAddBook={handleAddBook} onDeleteBook={handleDeleteBook} onEditBook={handleEditBook} />}
          />
          <Route
            path="/generate-qr"
            exact element={<QRCodeGenerator books={books} />}
          />
          <Route
            path="/book/:id"
            element={<BookDetails books={books} onEditBook={handleEditBook} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


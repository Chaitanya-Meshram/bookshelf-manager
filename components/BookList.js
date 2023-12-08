// BookList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookDetails from './BookDetails';

const BookList = ({ books, onAddBook, onDeleteBook, onEditBook }) => {
    const [newBook, setNewBook] = useState({
        title: '',
        isbn: '',
        cost: '',
        availability: '',
        category: '',
        count: 0,
        row: 0,
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [editingBookId, setEditingBookId] = useState(null);

    const handleAddBook = () => {
        onAddBook(newBook);
        setNewBook({
            title: '',
            isbn: '',
            cost: '',
            availability: '',
            category: '',
            count: 0,
            row: 0,
        });
    };

    const handleDeleteBook = (id) => {
        onDeleteBook(id);
    };

    const handleEditTitle = (id, newTitle) => {
        onEditBook(id, { title: newTitle });
    };

    const handleUpdateBook = () => {
        if (newBook.title !== '') {
            onEditBook(editingBookId, newBook.title);
            setEditingBookId(null);
            setNewBook('');
        }
    };

    const handleCancelEdit = () => {
        setEditingBookId(null);
        setNewBook('');
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleAddChange = (e) => {
        setNewBook({
            ...newBook,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h2>Bookshelf</h2>

            <div>
                <label>
                    Search by Title or ISBN:
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </label>
            </div>

            <ul>
                {books
                    .filter((book) =>
                        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        book.isbn.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((book) => (
                        <li key={book.id}>
                            <Link to={`/book/${book.id}`}>{book.title}</Link>
                            <p>

                                <button onClick={() => onDeleteBook(book.id)}>Delete</button>
                                <button onClick={() => handleEditTitle(book.id, prompt('Enter new title:', book.title))}>
                                    Edit Title
                                </button>
                            </p>
                        </li>
                    ))}
            </ul>

            <div>
                <h3>Add New Book</h3>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={newBook.title}
                        onChange={handleAddChange}
                    />
                </label>
                <p />
                <label>
                    ISBN:
                    <input
                        type="text"
                        name="isbn"
                        value={newBook.isbn}
                        onChange={handleAddChange}
                    />
                </label>
                <p />
                <label>
                    Cost:
                    <input
                        type="text"
                        name="cost"
                        value={newBook.cost}
                        onChange={handleAddChange}
                    />
                </label>
                <p />
                <label>
                    Availability:
                    <input
                        type="text"
                        name="availability"
                        value={newBook.availability}
                        onChange={handleAddChange}
                    />
                </label>
                <p />
                <label>
                    Category:
                    <input
                        type="text"
                        name="category"
                        value={newBook.category}
                        onChange={handleAddChange}
                    />
                </label>
                <p />
                <label>
                    Book Count:
                    <input
                        type="number"
                        name="count"
                        value={newBook.count}
                        onChange={handleAddChange}
                    />
                </label>
                <p />
                <label>
                    Row Number:
                    <input
                        type="number"
                        name="row"
                        value={newBook.row}
                        onChange={handleAddChange}
                    />
                </label>
                <p />
                <button onClick={handleAddBook}>Add Book</button>
            </div>
        </div>
    );
};

export default BookList;

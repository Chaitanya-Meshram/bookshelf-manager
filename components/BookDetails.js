// BookDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QRCode from 'qrcode.react';


const BookDetails = ({ books, onEditBook }) => {
    const { id } = useParams();
    const [editMode, setEditMode] = useState(false);
    const [editedBook, setEditedBook] = useState(null);

    useEffect(() => {
        const book = books.find((book) => book.id === parseInt(id, 10));
        setEditedBook(book);
    }, [books, id]);

    if (!editedBook) {
        return <p>Book not found</p>;
    }

    const handleEdit = () => {
        setEditMode(true);
        setEditedBook({ ...editedBook }); // Create a copy of the book for editing
    };

    const handleSave = () => {
        onEditBook(editedBook.id, editedBook);
        setEditMode(false);
    };

    const handleChange = (e) => {
        setEditedBook({
            ...editedBook,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h2>Book Details</h2>
            {!editMode ? (
                <>
                    <p>Title: {editedBook.title}</p>
                    <p>ISBN: {editedBook.isbn}</p>
                    <p>Cost: {editedBook.cost}</p>
                    <p>Availability: {editedBook.availability}</p>
                    <p>Category: {editedBook.category}</p>
                    <p>Book Count: {editedBook.count}</p>
                    <p>Row Number: {editedBook.row}</p>
                    <p></p>
                    <QRCode value={`Book: ${editedBook.title}, ISBN: ${editedBook.isbn}`} />
                    <p></p>
                    <button onClick={handleEdit}>Edit</button>
                </>
            ) : (
                <>
                    <label>
                        Title:
                        <input
                            type="text"
                            name="title"
                            value={editedBook.title}
                            onChange={handleChange}
                        />
                    </label>
                    <p></p>
                    <label>
                        ISBN:
                        <input
                            type="text"
                            name="isbn"
                            value={editedBook.isbn}
                            onChange={handleChange}
                        />
                    </label>
                    <p></p>
                    <label>
                        Cost:
                        <input
                            type="text"
                            name="cost"
                            value={editedBook.cost}
                            onChange={handleChange}
                        />
                    </label>
                    <p></p>
                    <label>
                        Availability:
                        <input
                            type="text"
                            name="availability"
                            value={editedBook.availability}
                            onChange={handleChange}
                        />
                    </label>
                    <p></p>
                    <label>
                        Category:
                        <input
                            type="text"
                            name="category"
                            value={editedBook.category}
                            onChange={handleChange}
                        />
                    </label>
                    <p></p>
                    <label>
                        Book Count:
                        <input
                            type="number"
                            name="count"
                            value={editedBook.count}
                            onChange={handleChange}
                        />
                    </label>
                    <p></p>
                    <label>
                        Row Number:
                        <input
                            type="number"
                            name="row"
                            value={editedBook.row}
                            onChange={handleChange}
                        />
                    </label>
                    <p></p>
                    <button onClick={handleSave}>Save</button>
                </>
            )}
        </div>
    );
};

export default BookDetails;

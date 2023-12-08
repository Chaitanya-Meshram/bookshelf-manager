// QRCodeGenerator.js
import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ books }) => {
    return (
        <div>
            <h2>Generate QR Code</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <p>{book.title}</p>
                        <QRCode value={`/book/${book.id}`} />
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QRCodeGenerator;

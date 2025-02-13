import React from 'react';
import GetBooks from './GetBooks.jsx';
 
const Pagebooks = () => {
    const { book, error } = GetBooks();

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Book Listings</h1>
            <br/>

            <ul>
                {book.map((books) => (
                    <li key={books.id}>
                        <p>Book Title: {books.title}</p>
                        <p>Salary: {books.author}</p>
                        <br/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagebooks;
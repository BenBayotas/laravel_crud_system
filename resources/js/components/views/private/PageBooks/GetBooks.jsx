import { useState, useEffect } from 'react';
import axios from 'axios';

const GetBooks = () => {
    const [book, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get('/api/book');
            setBooks(response.data.book);
        };

        fetchBooks().catch((error) => {
            setError(error.message);
        });
    }, []);

    return {
        book,
        error
    };
};

export default GetBooks;
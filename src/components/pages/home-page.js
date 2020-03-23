import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
    return (
        <BookList books={[
            {
                id: 1,
                title: 'Book1 title',
                author: "Book1 author"
            },
            {
                id: 2,
                title: 'Book2 title',
                author: "Book2 author"
            }]} />
    );
};

export default HomePage;
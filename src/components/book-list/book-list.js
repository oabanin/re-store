import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';

import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    
    const { bookstoreService, booksLoaded } = this.props;

    bookstoreService.getBooks()         // 1. receive data
      .then(data => booksLoaded(data))  // 2. dispacth action to store

  }

  render() {
    const { books } = this.props;
    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book} /></li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);

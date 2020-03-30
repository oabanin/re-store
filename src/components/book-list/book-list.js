import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';




class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) return <Spinner />

    if (error) return <ErrorIndicator />

    return (
      <BookList
        onAddedToCart={onAddedToCart}
        books={books} />
    );
  }
}

const BookList = ({ books, onAddedToCart }) => (<ul className="book-list">
  {
    books.map((book) => {
      return (
        <li key={book.id}>
          <BookListItem
            onAddedToCart={() => onAddedToCart(book.id)}
            book={book} />
        </li>
      )
    })
  }
</ul>);

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  }
};




export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);

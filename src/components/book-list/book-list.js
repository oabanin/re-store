import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';


import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';

import './book-list.css';

class BookList extends Component {

  componentDidMount() {

    //0) get props and dispatchActionsFunc from redux
    const { bookstoreService, booksLoaded } = this.props;

    //1) get data from service
    const data = bookstoreService.getBooks();

    //2 Dispatch action to store
    booksLoaded(data);


  }

  render() {
    const { books } = this.props;
    return (
      <ul>
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
  return { books }
}

const mapDispatchToProps = {
  booksLoaded
}


export default compose(
withBookstoreService(),
connect(mapStateToProps, mapDispatchToProps)
)(BookList)


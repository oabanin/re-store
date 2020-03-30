const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}


export const fetchBooks = (dispatch, bookstoreService) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()                   // 1. receive data
        .then(data => dispatch(booksLoaded(data)))  // 2. dispacth action to store
        .catch(err => dispatch(booksError(err)));    //3. onError
}

export const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

export const deleteAllBooks = (bookId) => {
    return {
        type: 'BOOK_DELETE',
        payload: bookId
    }
}

export const deleteOneBook = (bookId) => {
    return {
        type: 'ONE_BOOK_DELETE',
        payload: bookId
    }
}


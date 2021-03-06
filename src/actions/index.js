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


export const fetchBooksOld = (dispatch, bookstoreService) => () => {
    dispatch(booksRequested());                     //0.clear state
    bookstoreService.getBooks()                   // 1. receive data
        .then(data => dispatch(booksLoaded(data)))  // 2. setState on loading
        .catch(err => dispatch(booksError(err)));    //3. onError
}

export const fetchBooks = (bookstoreService)=> () => (dispatch) => {
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

export const bookRemovedFromCart = (bookId) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: bookId
    }
}

export const allBooksRemovedFromCart = (bookId) => {
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload: bookId
    }
}




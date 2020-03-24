const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    }
}

const test = () => {
    return {
        type: 'test'
    }
}

export { booksLoaded, test};
const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 100
}

const updateCartItems = (cartItems, item, idx) => {

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
}



const deleteCartItems = (cartItems, idx) => {
    return [
        ...cartItems.splice(idx, 1)
    ]
}


const updateCartItem = (book, item = {}) => {

    const { id = book.id, title = book.title, count = 0, total = 0 } = item;
    return {
        id,
        title,
        count: count + 1,
        total: total + book.price
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }

        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }

        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }

        case 'BOOK_ADDED_TO_CART':

            let bookId = action.payload;
            const book = state.books.find((book) => book.id === bookId);
            let itemIndex = state.cartItems.findIndex(({ id }) => id === bookId);
            const item = state.cartItems[itemIndex];
            const newItem = updateCartItem(book, item);

            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
            }

        case 'BOOK_DELETE':

            const bookId2 = action.payload;
            //const book = state.books.find((book) => book.id === bookId);
            const itemIndex2 = state.cartItems.findIndex(({ id }) => id === bookId2);
            //console.log(`bookIDinSErvice - ${bookId2}, indexinCartArray - ${itemIndex2}`);
            const item2 = state.cartItems[itemIndex2];
            console.log(item2);
            console.log(itemIndex2);
            console.log(state.cartItems)
            return state;
            return {
                ...state,
                cartItems: deleteCartItems(state.cartItems, itemIndex2)
            }

        default:
            return state;
    }
}

export default reducer;
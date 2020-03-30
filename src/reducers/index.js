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

const decreaseOneBookInCartItem = (cartItems, item, idx) => {

    if (item.count < 1) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
}




const deleteCartItems = (cartItems, idx) => {
    return [...cartItems].splice(idx, 1)
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

const decreaseCartItem = (book, item = {}) => {

    const { id = book.id, title = book.title, count = 0, total = 0 } = item;
    return {
        id,
        title,
        count: count - 1,
        total: total - book.price
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

        case 'ONE_BOOK_DELETE':
            const bookId3 = action.payload;
            const book3 = state.books.find((book) => book.id === bookId3);
            let itemIndex3 = state.cartItems.findIndex(({ id }) => id === bookId3);
            const item3 = state.cartItems[itemIndex3];
            const newItem3 = decreaseCartItem(book3, item3);
            console.log( newItem3.count < 1);
            //return state;
            return {
                ...state,
                cartItems: decreaseOneBookInCartItem(state.cartItems, newItem3, itemIndex3)
            }

        case 'BOOK_DELETE':
            const bookId2 = action.payload;
            const itemIndex2 = state.cartItems.findIndex(({ id }) => id === bookId2);
            const newCart = [...state.cartItems]
            newCart.splice(itemIndex2, 1);
            return {
                ...state,
                //cartItems: [...state.cartItems].splice(itemIndex2, 1) DO NOT WORK!!
                 //cartItems: deleteCartItems(state.cartItems, itemIndex2)
                cartItems: newCart
            }

        default:
            return state;
    }
}

export default reducer;
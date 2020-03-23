import React, { useState } from 'react';
import Spinner from '../spinner';
import { withBookstoreService } from '../hoc';



const App = ({bookstoreService}) => {

    console.log(bookstoreService.getBooks());
    const [data, setData] = useState({
        loading: false,
        data: null
    });


    if (!data.loading) {
        return (
            <Spinner />);
    }


    return (<p>Hello world</p>);
}

export default withBookstoreService()(App);
import React, { useState } from 'react';
import Spinner from '../spinner';



const App = () => {
    const [data, setData] = useState({
        loading: false,
        data: null
    });


    if (!data.loading) {
        return (
        <Spinner/>);
    }


    return (<p>Hello world</p>);
}

export default App;
import React, { useState } from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Spinner from '../spinner';
import {HomePage, CartPage} from '../pages';



const App = ({ bookstoreService }) => {


    // const [data, setData] = useState({
    //     loading: false,
    //     data: null
    // });


    // if (!data.loading) {
    //     return (
    //         <Spinner />);
    // }


    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/cart" component={CartPage} />
                <Route path="/" component={HomePage} exact/>
            </Switch>
        </div>);
}

export default App;
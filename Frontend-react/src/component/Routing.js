import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './home/home';
import Header from './Header';
import ListingApi from './RestaurentListing/listingApi';
import RestaurentDetails from './RestaurentDetails/RestaurentDetails';
import Form from './orders/forms';
import Order from './orders/orderApi';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/list/:id" component={ListingApi}></Route>
                <Route exact path="/rest/:id" component={RestaurentDetails}></Route>
                <Route exact path="/order/:id" component={Form}></Route>
                <Route exact path="/vieworder" component={Order}></Route>
            </div>
        </BrowserRouter>
    )
}

export default Routing
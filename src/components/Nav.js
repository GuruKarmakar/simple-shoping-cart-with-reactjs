import React from 'react';
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className="nav-wrapper container">
            <a href="#!" className="brand-logo">@didas</a>
            <ul className="right hide-on-med-and-down">
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/cart">My cart</Link></li>
                <li> <span class="badge new">{props.cart}</span><i className="material-icons">add_shopping_cart</i></li>
            </ul>
        </div>);
}

export default Nav;
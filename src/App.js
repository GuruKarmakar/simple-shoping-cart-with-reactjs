import React from 'react';
import './App.css';
import { connect, } from 'react-redux'
import Nav from './components/Nav';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import { Route, Switch } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="teal darken-4">
          <Nav
            cart={this.props.cart.length} />
        </nav>

        <div className="container">
          <Switch>
            <Route exact path="/" component={Shop} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.addedItem
  }
}

export default connect(mapStateToProps)(App)

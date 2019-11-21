import React, { Component } from 'react';
import { connect } from 'react-redux'
import Item from './Item';
import {addToCart} from '../../store/actions/actionCart'

class Shop extends Component {
    _onAddClick = (id) => {
        this.props.addToCart(id)
    }
    render() {
        const { items } = this.props
        return (
            <div className="contanier">
                <h3 className="center">Our Products</h3>
                <div className="row">
                    {
                        items.map((item, index) => (
                            <Item
                                key={item.id}
                                onClick={() => this._onAddClick(item.id)}
                                image={item.img}
                                title={item.title}
                                content={item.desc}
                                price={item.price} 
                                />
                        ))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.cartReducer.items,
        addedItem : state.cartReducer.addedItem
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addToCart : (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop)
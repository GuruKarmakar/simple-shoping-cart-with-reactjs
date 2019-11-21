import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeItem, addQuantity, subQuantity } from '../../store/actions/actionCart'

class Cart extends Component {
    _removeItem = (id) => {
        this.props.removeItem(id)
    }

    _addQuantity = (id) => {
        this.props.addQuantity(id)
    }

    _subQuantity = (id) => {
        this.props.subQuantity(id)
    }


    render() {
        return (
            <ul className="collection">
                {
                    this.props.cartItem.length ? (this.props.cartItem.map(item => {
                        return (
                            <li className="collection-item avatar" key={item.id}>
                                <div className="item-img">
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <img src={item.img} style={{ width: 130 }} alt="" />
                                        <div style={{ marginLeft: 20 }}>
                                            <p style={{ fontSize: 18, color: '#004d40' }}>{item.title}</p>
                                            <p style={{ marginTop: 20 }}>
                                                {item.desc}
                                            </p>
                                            <p>
                                                <b>Quantity: {item.quantity}</b>
                                            </p>
                                            <p>
                                                <b>Price: {item.price}</b>
                                            </p>
                                            <div className="add-remove">
                                                <i onClick={() => this._subQuantity(item.id)} style={{ cursor: 'pointer' }} className="material-icons" >remove</i>
                                                <i onClick={() => this._addQuantity(item.id)} style={{ cursor: 'pointer' }} className="material-icons" >add</i>
                                            </div>
                                            <button onClick={() => this._removeItem(item.id)} className="waves-effect waves-light btn pink remove" >Remove</button>
                                        </div>

                                    </div>
                                </div>

                            </li>
                        )
                    })) : <h6 className="center">Nothing...</h6>
                }

                <div>
                    { this.props.cartItem.length > 0 &&
                        <p className="center">
                            <b>
                                Total : {this.props.total}
                            </b>
                        </p>
                    }
                </div>
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartItem: state.cartReducer.addedItem,
        total: state.cartReducer.total
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addQuantity: (id) => dispatch(addQuantity(id)),
        subQuantity: (id) => dispatch(subQuantity(id)),
        removeItem: (id) => dispatch(removeItem(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
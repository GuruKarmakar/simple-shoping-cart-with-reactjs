import React from 'react';

const Item = ({price,content,image,title,onClick}) => {
    return (
        <div className="col s12 m3">
            <div className="card">
                <div className="card-image">
                    <img  src={image} style={{height:200,padding:10}} alt=""/>
                    <span className="card-title teal-text text-darken-2">{title}</span>
                    <button onClick={onClick} className="btn-floating halfway-fab waves-effect waves-light teal darken-4"><i className="material-icons">add</i></button>
                </div>
                <div className="card-content">
                    <p>{content}</p>
                    <p><b>Price :  ₹{price}</b></p>
                </div>
            </div>
        </div>
    );
}

export default Item;
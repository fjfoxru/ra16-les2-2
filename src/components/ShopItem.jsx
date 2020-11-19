import React from 'react';

export default class ShopItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="item">
            <div className="item__name">{this.props.item.name}</div>
            <div className="item__price">{this.props.item.price}</div>
            <div className="item__color">{this.props.item.color}</div>
            <img className="item__img" src={this.props.item.img}/>
            <button className="card__button">Add to cart</button>
            </div>
        )
    }
}
import React from 'react';

export default class CardsView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card">
                <div className="card__title">{this.props.card.name}</div>
                <div className="card__color">{this.props.card.color}</div>
                <img className="card__img" src={this.props.card.img}/>
                <div className="card__footer">
                    <div className="card__price">{this.props.card.price}</div>
                    <button className="card__button">Add to cart</button>
                </div>
            </div>
        )
    }
}
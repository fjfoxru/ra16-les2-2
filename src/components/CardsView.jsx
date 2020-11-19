import React from 'react';
import ShopCard from '../components/ShopCard';

export default class CardsView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="cards">
            {this.props.cards.map(card => <ShopCard card={card} key={card.name} />)}
            </div>
        )
    }
}
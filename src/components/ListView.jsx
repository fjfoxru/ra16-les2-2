import React from 'react';
import ShopItem from '../components/ShopItem';

export default class ListView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="list">
            {this.props.items.map(item => <ShopItem item={item} key={item.name} />)}
            </div>
        )
    }
}
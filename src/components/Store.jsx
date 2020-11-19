import React from 'react';
import IconSwitch from '../components/IconSwitch';
import CardsView from '../components/CardsView';
import ListView from '../components/ListView';



export default class Store extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            viewStatus: 'list',
        }
    }
    onSwitchView = () => {
        this.setState(prev => ({
            viewStatus : prev.viewStatus === 'list' ? 'cards' : 'list'
        }));
    }


    render() {
        return (
            <>
            <IconSwitch icon={this.state.viewStatus} onSwitch={this.onSwitchView}/>
            {this.state.viewStatus === 'list' ? <CardsView cards={this.props.products}/> : <ListView items={this.props.products}/>}
            </>
        )
    }


}
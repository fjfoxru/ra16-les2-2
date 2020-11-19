import React from 'react';


export default class IconSwitch extends React.Component {
    constructor(props) {
        super(props)
    }

    onClickSwitch = () => {
        this.props.onSwitch();
    }


    render() {
        return (
            <i className="" onClick={this.onClickSwitch}>{this.props.icon}</i>
        )
    }


}
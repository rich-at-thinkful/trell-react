import React, { Component } from 'react';

export default class CardComponent extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return(
            <div>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

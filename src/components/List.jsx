import React, { Component } from 'react';
import CardComponent from './Card';

export default class ListComponent extends Component {
    constructor(props){
        super(props);

        this.onAddInputChanged = this.props.onAddInputChanged.bind(this);
        this.onAddClick = this.props.onAddClick.bind(this);
    }

    render() {
        return(
            <div>
                <h4>{ this.props.title }</h4>
                { this.props.cards.map((card, i) => <CardComponent text={card} key={i} />) }
                <div className="add-new-card">
                    New list: <input type="text" onChange={this.onAddInputChanged} />
                    <button onClick={this.onAddClick}>Add</button>
                </div>
            </div>
        )
    }
}

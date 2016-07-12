import React, { Component } from 'react';
import ListComponent from './List';

export default class BoardComponent extends Component {
    constructor(props){
        super(props);
    }
    
    onAddInputChanged() {
        console.log('changed');
    }
    
    onAddClick() {
        console.log('add button clicked');
    }
    
    render() {
        return(
            <div>
                <h2>{ this.props.title }</h2>
                { this.props.lists.map(list => { 
                    return <ListComponent 
                        title={list.title} 
                        key={list.title} 
                        cards={list.cards}
                        onAddClick={this.onAddClick}
                        onAddInputChanged={this.onAddInputChanged}
                    />;
                }) }
            </div>
        )
    }
}

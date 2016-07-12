import React, { Component } from 'react';
import BoardComponent from './Board';

const Lists = [
  {
    title: "To Do",
    cards: [
      "Get milk",
      "Feed cat",
      "Find shoes"
    ]
  },
  {
    title: "Done",
    cards: [
      "Do homework"
    ]
  },
  {
    title: "Unassigned",
    cards: [
      "Do jury duty",
      "Solve bike theft"
    ]
  }
];

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Trells</h1>
        <BoardComponent title="My First Board" lists={Lists} />
      </div>
    );
  }
}

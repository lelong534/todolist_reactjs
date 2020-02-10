import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import TodoItem from './TodoItem';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class App extends Component {
  state = {
    items: [],
    id: 0,
    item: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    console.log(newItem);
    const updateItems = [...this.state.items, newItem];
    
    this.setState({
      items: updateItems,
      item:'',
      id: this.state.id + 1,
      editItem: false
    })
  }
  handleRemove = id => {
    const filtedItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filtedItems,
    })
  }
  handleEdit = id => {
    const filtedItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item=>item.id===id);

    this.setState({
      items: filtedItems,
      item: selectedItem.title,
      editItem: true
    })
  }
  clearList = e => {
    this.setState({
      items: []
    })
  }
  render() {
    return (
      <div> 
        <TodoInput 
          item = {this.state.item}
          editItem = {this.state.editItem}
          handleChange = {this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList 
          items={this.state.items}
          handleRemove={this.handleRemove}
          handleEdit={this.handleEdit}
        />
        <button onClick={this.clearList}>Clear</button>
      </div>
    );
  }
}

export default App;
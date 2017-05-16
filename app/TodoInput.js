// @flow

import React from 'react';

export default class TodoInput extends React.Component {
  node: HTMLInputElement

  props: {
    addTodo: (string) => void
  }

  addTodo = (e: Event) => {
    e.preventDefault();
    this.props.addTodo(this.node.value);
    this.node.value = "";
  }

  render() {
    return (
      <form onSubmit={this.addTodo}>
        <input ref={node => this.node = node}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

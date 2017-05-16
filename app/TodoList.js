// @flow
import React from 'react';
import type { TodoType, FilterType } from './typedefs';

export default class TodoList extends React.Component {
  props: {
    todos: TodoType[],
    toggleTodo: (number) => void,
    currentFilter: FilterType
  }

  filterTodos = (currentFilter: FilterType): TodoType[] => {
    switch(currentFilter) {
    case "COMPLETED":
      return this.props.todos.filter(todo => todo.completed)
    case "PENDING":
      return this.props.todos.filter(todo => !todo.completed)
    default:
      return this.props.todos;
    }
  }

  render() {
    return (
      <ul>
        {
          this.filterTodos(this.props.currentFilter).map((todo) => {
            return(
              <li key={todo.id}
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer'
                  }}
                  onClick={() => this.props.toggleTodo(todo.id)}>
                {todo.text}
              </li>
            );
          })
        }
      </ul>
    )
  }
}

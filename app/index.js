// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import Filter from './Filter';
import type { TodoType, FilterType } from './typedefs';

type State = {
  todos: TodoType[],
  currentFilter: FilterType
}

class App extends React.Component {
  todoCount =  0

  state = {
    todos: [],
    currentFilter: "SHOW_ALL"
  }

  addTodo = (text: string): void => {
    let newTodo: TodoType = {
      id: this.todoCount++,
      text: text,
      completed: false
    };
    this.setState((prevState: State): {todos: TodoType[]} => {
      return { todos: [...prevState.todos, newTodo] }
    });
  }

  changeFilter = (filter: FilterType): void => {
    this.setState({currentFilter: filter});
  }

  toggleTodo = (id: number) => {
    this.setState((prevState: State) => {
      let updatedTodos = prevState.todos.map((todo: TodoType) => {
        if(todo.id === id) {
          return Object.assign({}, todo, {completed: !todo.completed});
        }
        else {
          return todo;
        }
      });

      return { todos: updatedTodos };
    });
  }

  render() {
    return (
      <div>
        <h2>TODO with Flow</h2>
        <TodoInput addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo}
                  currentFilter={this.state.currentFilter} />
        <Filter changeFilter={this.changeFilter}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App name="tejas"/>,
  document.getElementById("app")
);

import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm";
    

const todoData = [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      },
      
    ];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      task: "Finish mvp",
      todo: todoData
    };
  }

    toggleItem = id => {
      console.log(id)
      this.setState({
        todo: this.state.todo.map(item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      });
    };

    addItem = itemName => {
      const newItem = {
          task: itemName,
          id: Date.now(),
          completed: false
      };
      this.setState({
          todo: [...this.state.todo, newItem]
      });
  };

  clearPurchased = () => {
    this.setState({
      todo: this.state.todo.filter(item => item.completed === false)
    });
  };
  
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem}/>
        <TodoList clearPurchased={this.clearPurchased}
                  todo={this.state.todo}
                  toggleItem={this.toggleItem}/>
      </div>
    );
  }
}

export default App;

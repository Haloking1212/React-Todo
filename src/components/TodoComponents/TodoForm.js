import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
    
        this.state = {

                  item: ""
        };
    }
        handleChanges = e => {
            this.setState({
                [e.target.name]: e.target.value 
            });
        };

        submitItem = e => {
            e.preventDefault();
            this.props.addItem(this.state.item)
    };

        render() {
            return (
                <form onSubmit={e => this.submitItem(e)}>
                <input type="text" 
                        placeholder="add todo..." 
                        value={this.item}
                        name="item"
                        onChange={e => this.handleChanges(e)}/>
                <button>Add Todo</button>
            </form>
            )
        }
    }

export default TodoForm;
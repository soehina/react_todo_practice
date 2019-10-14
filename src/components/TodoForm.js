import React,{Component} from 'react';

class TodoForm extends Component{
    render(){
        return(
            <form onSubmit={this.props.addTask}>
                <input
                    type="text"
                    value={this.props.currentTask}
                    onChange={this.props.updateTask}
                />
                <button type="submit">追加</button>
            </form>
        )
    }
}

export default TodoForm;
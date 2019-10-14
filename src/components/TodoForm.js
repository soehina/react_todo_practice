import React,{Component,PropTypes} from 'react';

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

// TodoForm.propTypes={
//     currentTask:React.PropTypes.string.isRequired,
//     updateTask:React.PropTypes.func.isRequired,
//     addTask:React.PropTypes.func.isRequired,
// }

export default TodoForm;
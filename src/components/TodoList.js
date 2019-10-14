import React,{Component} from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class TodoList extends Component{
    constructor(){
        super();
        this.changeStatus=this.changeStatus.bind(this);
        this.updateTask=this.updateTask.bind(this);
        this.addTask=this.addTask.bind(this);
        this.deleteTask=this.deleteTask.bind(this);
        this.state={
            tasks:[
                {
                    name:"Buy Milk",
                    completed:false
                },
                {
                    name:"Buy Cheees",
                    completed:false
                }
            ],
            currentTask:''
        }
    }
    deleteTask(index){
        console.log(index)
        let tasks=this.state.tasks;
        tasks.splice(index,1);
        this.setState({
            tasks
        })
    }
    addTask(evt){
        evt.preventDefault();
        let tasks=this.state.tasks;
        let currentTask=this.state.currentTask;
        tasks.push({
            name:currentTask,
            completed:false
        })
        this.setState({
            tasks,
            currentTask:''
        })
    }
    updateTask(newValue){
        this.setState({
            currentTask:newValue.target.value
        })
    }
    editTask=(index,newValue)=>{
        var tasks=this.state.tasks;
        var task=tasks[index];
        task['name']=newValue;
        this.setState({
            tasks
        })
    }
    changeStatus(index){
        var tasks=this.state.tasks;
        var task=tasks[index];
        task.completed=!task.completed;
        this.setState({
            tasks:tasks
        })
    }
    render(){
        return(
            <section>
                <TodoForm
                    currentTask={this.state.currentTask}
                    updateTask={this.updateTask}
                    addTask={this.addTask}
                />
                <ul>
                    {
                        this.state.tasks.map((task,index)=>{
                            return(
                                <TodoItem
                                    key={index}
                                    clickHandle={this.changeStatus}
                                    index={index}
                                    deleteTask={this.deleteTask}
                                    editTask={this.editTask}
                                    details={task}
                                />
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default TodoList;
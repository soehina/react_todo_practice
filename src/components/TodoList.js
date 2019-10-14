import React,{Component} from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class TodoList extends Component{
    constructor(){
        super();
        this.changeStatus=this.changeStatus.bind(this);  //タスクの編集
        this.updateTask=this.updateTask.bind(this); //タスクの追加
        this.addTask=this.addTask.bind(this);  //タスクのの追加
        this.deleteTask=this.deleteTask.bind(this);  //タスクの削除
        this.state={
            tasks:[],  //リストの初期値
            currentTask:''  //現在のタスクの初期値
        }
    }

    //タスクの削除
    deleteTask(index){
        console.log(index)
        let tasks=this.state.tasks;
        tasks.splice(index,1);
        this.setState({tasks})
    }

    //タスクの追加
    addTask(evt){
        evt.preventDefault(); //リロードを防ぐ
        let tasks=this.state.tasks;  //配列
        let currentTask=this.state.currentTask;  //現在のタスク
        tasks.push({
            name:currentTask,  //入力したタスク
            completed:false  //初期状態では変更してない状態
        })
        this.setState({
            tasks,  //配列
            currentTask:''  //空にする
        })
    }
    updateTask(newValue){
        this.setState({
            currentTask:newValue.target.value  //現在のタスクの値に新しい内容
        })
    }

    //タスクの編集
    editTask=(index,newValue)=>{
        var tasks=this.state.tasks;
        var task=tasks[index];
        task['name']=newValue;
        this.setState({tasks})
    }
    changeStatus(index){
        var tasks=this.state.tasks;
        var task=tasks[index];
        task.completed=!task.completed;  //completedがtrueの状態
        this.setState({tasks:tasks})
    }

    render(){
        return(
            <section>
                <TodoForm
                    currentTask={this.state.currentTask}  //TodoFormでvalueに入る
                    updateTask={this.updateTask}  //taskが追加される
                    addTask={this.addTask}  //配列に入力した新しいタスクを加える
                />
                <ul>
                    {
                        this.state.tasks.map((task,index)=>{
                            return(
                                <TodoItem
                                    key={index}  //key
                                    clickHandle={this.changeStatus}  //タスクの編集
                                    index={index}  //タスクの内容
                                    deleteTask={this.deleteTask}  //タスクの削除
                                    editTask={this.editTask}  //タスクの編集
                                    details={task}  //taskの内容
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
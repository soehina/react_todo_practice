import React,{Component} from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state={isEditing:false}   //初期値
        this.renderForm=this.renderForm.bind(this);
        this.renderItem=this.renderItem.bind(this);
        this.toggleState=this.toggleState.bind(this);
    }
    toggleState(){
        const {isEditing}=this.state;  //初期値を代入
        this.setState({isEditing:!isEditing})  //クリックで反転
    }
    updateItem=(evt)=>{
        evt.preventDefault(); //リロードを防ぐ
        this.props.editTask(this.props.index,this.input.value);  //TodoListからeditTaskの呼び出し
        this.toggleState();  //初期値に戻る
    }
    renderItem(){
        return(
            <li>
                {this.props.details.name}
                <button
                    onClick={(evt)=>{
                        evt.stopPropagation();  //イベントの伝搬を防ぐ
                        this.props.deleteTask(this.props.index)  //deleteTaskの呼び出し
                    }}
                >削除</button>
                <button
                    onClick={(evt)=>{
                        evt.stopPropagation();
                        this.toggleState();
                    }}
                >編集</button>
            </li>
        )
    }
    renderForm(){
        return(
            <form onSubmit={this.updateItem}>
                <input
                    type="text"
                    ref={(value)=>{
                        this.input=value
                    }}
                    defaultValue={this.props.details.name}
                />
                <button type="submit">変更</button>
            </form>
        )
    }
    render(){
        const {isEditing}=this.state;
        return(　　//上二つ呼び出し
            <section>
                {isEditing ? this.renderForm() : this.renderItem()}
            </section>
        )
    }
}

export default TodoItem;
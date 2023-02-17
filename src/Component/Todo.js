import React from 'react'
import TodoItem from './TodoItem'

const Todo = (props) => {
    return (
        <div className="card mt-3">
            <div className="card-header">
                Task List
                <a href="#" onClick={props.DeleteAll} className="float-right btn btn-danger">Delete All</a>
            </div>
            <div className="card-body">
                <ul className='list-group'>
                    {props.state.items.map((item,index)=>{
                        return <TodoItem key={index} item={item} deleteItem={props.DeleteItem}/>
                    })}
                </ul>

            </div>
        </div>
    )
}

export default Todo
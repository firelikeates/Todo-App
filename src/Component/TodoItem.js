import React from 'react'

const TodoItem = (props) => {
    const deleteItem=()=>{
        console.log(props.item);
        props.deleteItem(props.item)
    }
  return (
    <li className="list-group-item list-group-item-secondary">
        {props.item} <a href="#" onClick={deleteItem} className='float-right '><i className="fas fa-times"></i></a>
    </li>
  )
}

export default TodoItem
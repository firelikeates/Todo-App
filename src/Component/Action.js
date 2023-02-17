import React from 'react'

const Action = (props) => {
    const onFormSubmit=(e)=>{
        e.preventDefault();
        const item = e.target.elements.txtItem.value.trim();
        props.AddItem(item)
        e.target.elements.txtItem.value=""
    }
    return (
        <div className="card mt-3">
            <div className="card-header">
                <h5>Add a Task</h5>
            </div>
            <div className="card-body">
                <form onSubmit={onFormSubmit }>
                    <div className="input-group">
                        <input type="text" name="txtItem" className='form-control' placeholder='add a task' />
                        <div className="input-group-append">
                            <button className="btn btn-primary"><i className="fas fa-plus"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Action
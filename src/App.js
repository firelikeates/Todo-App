import React, { Fragment, Component } from 'react'
import Action from './Component/Action'
import Navbar from './Component/Navbar'
import Todo from './Component/Todo'

export class App extends Component {
    constructor(props) {
        super(props);
        this.AddItem = this.AddItem.bind(this)
        this.DeleteAll = this.DeleteAll.bind(this)
        this.DeleteItem = this.DeleteItem.bind(this)

        this.state = {
            items: []
        }
    }



    componentDidMount(){
        const item = localStorage.getItem("items")
        const json = JSON.parse(item)
        if(json){
            this.setState({
                items:json
            })
        }
    }

    componentDidUpdate(prevProps,PrevState){
        if(PrevState.items.length!==this.state.items.length){
            localStorage.setItem("items",JSON.stringify(this.state.items))
        }
    }

    AddItem(item) {
        this.setState(prevState => {
            if (prevState.items.indexOf(item) > -1) {
                alert(`You have already added ${item}!`)
            } else {
                return { items: prevState.items.concat(item) }
            }
        })
    }
    DeleteAll() {
        this.setState({
            items: []
        })
    }
    DeleteItem(item) {
        this.setState(PrevState => {
            const arr = PrevState.items.filter(i => {
                return item !== i
            })
            return { items: arr }
        })
    }
    render() {
        return (
            <Fragment>
                <Navbar />
                <div className="container mt-3" id='main-cont'>

                    <Action AddItem={this.AddItem} />
                    <Todo state={this.state} DeleteAll={this.DeleteAll} DeleteItem={this.DeleteItem} />
                </div>

            </Fragment>
        )
    }
}

export default App

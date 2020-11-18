import React, { Component } from 'react'
import Trello from './components/Trello'
import Card from "./components/Card"
import {connect} from "react-redux"
import {add_task} from './redux/actions/cardAction'

class App extends Component {
  state={
    task:""
  }
  sub=(e)=>{
    e.preventDefault();
    this.props.add_task(this.state.task)
    }

  render() {
    return (
      <div className="App">
        <div>
          <form onSubmit={(e)=>this.sub(e)}>
          <label htmlFor="exampleInputEmail1">ADD NEW TASK</label>
          <input id ="exampleInputEmail1" 
            onChange={(event)=>this.setState({task:event.target.value})} 
            placeholder="Enter here"
            />
          <button type="submit" style={{margin:"10px"}}>ADD </button>
          </form>
        </div>
        <div className="flexbox">
            <Trello id="trello-1" className="trello">
              <h3>Todo</h3>
              {this.props.box.map((map,index)=><Card id={index} className="card" draggable="true">
                <p>{map}</p>
              </Card>)} 
            </Trello>
            
            <Trello id="trello-2" className="trello">
            <h3>In Progress</h3>
              
            </Trello>

            <Trello id="trello-3" className="trello">
              <h3>Completed</h3>
              
            </Trello>
            
        </div>
      </div>
    )
  }
}

const mapStatetoprops=(storeState)=>{
  console.log(storeState.card.task)
  return{
    box:storeState.card.task

  }
}

export default connect(mapStatetoprops,{add_task})(App);
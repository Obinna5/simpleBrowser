import React, {Component} from 'react';
//mport MainLayout from "../../laouts/MainLayout";
//import styled from 'styled-components'
//import { makeStyles } from '@material-ui/core/styles';
import './App.css';

/*
2.25.21
This class is used to create an edit input box option with an update and cancel option. 
It is ran on port 3000 and with the command `npm start`

*/


class EditButton extends Component {
state = {
value: "**TEST**  ENTER User Bio Text",
isInEditMode: false
}

changeEditMode = () => {
this.setState({
  isInEditMode: !this.state.isInEditMode})
}

updateComponentValue  = () => {
    this.setState ({
      isInEditMode: false,
      value: this.refs.theTextInput.value
    })

}

renderEditView = () => {



  return <div  

style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}}>

<div> <h1 style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}}>RSB Biography     </h1>
  </div>

<div>
   <input 
    type="text"
    defaultValue={this.state.value}
    ref="theTextInput" 
    style={{width: "400px", height: "30px"}}
  /> 
  <button onClick={this.changeEditMode}>X</button>
  <button onClick={this.updateComponentValue}>EDIT</button>
</div>
</div>

}

renderDefaultView = () => {
return <div onDoubleClick={this.changeEditMode}>{this.state.value}</div>
}


render() {

return this.state.isInEditMode ?
this.renderEditView() :
this.renderDefaultView()

}


}

export default EditButton;



/* 

 <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


*/
import React, { Component } from 'react'
import './CSS/todo.css'
import Name from './Form.js'


class Form extends Component {
constructor(props) {
    super(props)

    this.state = {
        firstName: "",
        lastName: "",
        address: "",
        age: "",
        id: "",
        allergy: "",
       
    }
    this.handleSubmit= this.handleSubmit.bind(this)
}

// first handleSubmit => {
//     this.setState
// };
firsthandler = (event) => {
    this.setState({
        firstName: event.target.value
    })
}

lasthandler = (event) => {
    this.setState({
        lastName: event.target.value
    })
}

addresshandler = (event) => {
    this.setState({
        address: event.target.value
    })
}

agehandler = (event) => {
    this.setState({
        age: event.target.value
    })
}

idhandler = (event) => {
    this.setState({
        id: event.target.value
    })
}
allergyhandler = (event) => {
    this.setState({
        allergy: event.target.value
    })
}
handleSubmit = (event) => {
    alert(`${this.state.firstName} ${this.state.lastName} Registered Succeddfully !!`)
    console.log(this.state);
    this.setState({
        firstName: "",
        lastName: "",
        address: "",
        age: "",
        id: "",
        allergy: "",
  
    })
    
    event.preventDefault()
}




render() {
    return (
        <div>

            <form onSubmit={this.handleSubmit}>
                <h1>User Registration</h1>

   <label>firstName : </label> 
   <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..."/> <br />           
        
   <label>lastName : </label> 
   <input type="text" value={this.state.laststName} onChange={this.lasthandler} placeholder="LastName..."/> <br />           

   <label>address : </label> 
   <input type="text" value={this.state.address} onChange={this.addresshandler} placeholder="Address..."/> <br />           


       <label>age : </label> 
   <input type="text" value={this.state.age} onChange={this.agehandler} placeholder="Age..."/> <br />     

   
       <label>id : </label> 
   <input type="text" value={this.state.id} onChange={this.idhandler} placeholder="ID..."/> <br />   

   
       <label>allergy : </label> 
   <input type="text" value={this.state.allergy} onChange={this.allergyhandler} placeholder="Allergy..."/> <br />         
{/* 
       <label>firstName : </label> 
   <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..."/> <br />            */}
   

<input type ="search" value="search" />
      <input type="submit" value="Submit" />     
</form>
        </div>
    );
}
}
export default Form
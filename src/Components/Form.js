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
    this.handleSubmit= this.handleSubmit.bind(this);
    this.handlerChange= this.handlerChange.bind(this)
}
handlerChange(event) {
    const {name, value} = event.target;
    this.setState({ 
    [name] : value
        } 
    );
}



handleSubmit = (event) => {
    event.preventDefault()
    alert(`${this.state.firstName} ${this.state.lastName} Registered Succeddfully !!`)
    this.setState({
        firstName: "",
        lastName: "",
        address: "",
        age: "",
        id: "",
        allergy: "",
        
    })
    
    console.log(this.state)
}




render() {
    return (
        <div>

            <form onSubmit={this.handleSubmit}>
                <h1>User Registration</h1>

   <label>firstName : </label> 
   <input type="text" value={this.state.firstName} name= "firstName" onChange={this.handlerChange} placeholder="FirstName..."/> <br />           
        
   <label>lastName : </label> 
   <input type="text" value={this.state.lastName} name="lastName" onChange={this.handlerChange} placeholder="LastName..."/> <br />           

   <label>address : </label> 
   <input type="text" value={this.state.address} name= "address" onChange={this.handlerChange} placeholder="Address..."/> <br />           


       <label>age : </label> 
   <input type="text" value={this.state.age} name="age" onChange={this.handlerChange} placeholder="Age..."/> <br />     

   
       <label>id : </label> 
   <input type="text" value={this.state.id} name= "id" onChange={this.handlerChange} placeholder="ID..."/> <br />   

   
       <label>allergy : </label> 
   <input type="text" value={this.state.allergy} name= "allergy" onChange={this.handlerChange} placeholder="Allergy..."/> <br />         
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
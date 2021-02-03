import React, { Component } from 'react'
import './CSS/todo.css'


class Form extends Component {
constructor(props) {
    super(props)

    this.state = {
        firstName: "",
        lastName: "",
        address: "",
        age: "",
        ID: "",
        allergie: "",

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

allergiehandler = (event) => {
    this.setState({
        allergie: event.target.value
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
        allergie: "",

    })
    
    event.preventDefault()
}

render() {
    return (
        <div>

            <form onSubmit={this.handleSubmit}>
                <h1>User Registration</h1>
<boby>
   <label>firstName : </label> 
   <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..."/> <br />           
        
   <label>lastName : </label> 
   <input type="text" value={this.state.laststName} onChange={this.lasthandler} placeholder="LastName..."/> <br />           

   <label>address : </label> 
   <input type="text" value={this.state.address} onChange={this.addresshandler} placeholder="Address..."/> <br />           


       <label>age : </label> 
   <input type="text" value={this.state.age} onChange={this.agehandler} placeholder="Age..."/> <br />     

   <label>id : </label> 
   <input type="text" value={this.state.id} onChange={this.agehandler} placeholder="ID..."/> <br />     

   
   <label>allergie : </label> 
   <input type="text" value={this.state.allergie} onChange={this.agehandler} placeholder="Allergie..."/> <br />     

   
         
{/* 
       <label>allirgies : </label> 
   <input type="text" value={this.state.allergies} onChange={this.allergies} placeholder="Allegies..."/> <br />            */}
   

<input type ="search" value="Search" />
      <input type="submit" value="Submit" />     
      </boby>
</form>
        </div>
    );
}
}
export default Form
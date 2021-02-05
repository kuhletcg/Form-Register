// import React, { Component } from 'react'
// import './CSS/todo.css'
// import Name from './AddButton.js'

// function App () {
//     const [inputList, setInputList] = useState([
//         { firstName: "test", lastName: "last name 2"}
//         { firstName: "test2", lastName: "last name 2"}
//     ]);

//     const handleChange = (e, index) => {
//         canst { name, value } = e.target;
//         const List = [...setInputList];
//         list[index][name] = value;
//         setInputList(list);
//     }
//     const handleChange = () => {
//         setInputList([...inputList, {firstName: "", lastName: ""}]);
//     }
//     return handleChange = () => {
//         <div className="App">
//             <b>Name list</b>
//             </div>
//     }
// }

// {inputList.map((item, i) => {
//     return (
//         <div key={i} className ="box">

//          <input type="text" name="lastName" placeholder="Last Name" className="mr10" value={iterm.firstName}
//          onChange={a => handleChange(e, i)}
//          />
//   <input type="text" name="lastName" placeholder="Last Name" className="mr10" value={iterm.firstName}
//          onChange={a => handleChange(e, i)}
//          />
// <input type="button" value="Add" onClick={handleChange} />
// <input type="button" value="Delete" onClick={handleChange} />


//         </div>
//     )
// })}
// <pre>
//     {JSON.stringify(inputList, null, 2)}
// </pre>

// export default App;


// import React, { Component } from 'react'

// class Form extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             firstName: "",
//             lastName: "",
//             address: "",
//             age: "",
//             id: "",
//             allergy: "",
            

//         }
//     }

//     firsthandler=(event)=>{
//         this.setState({
//         [event.target.firstName]:event.target.value
//         })
//     }
//     lasthandler=(event)=>{
//         this.setState({
//             [event.target.lastName]:event.target.value
//         })
//     }
    
//     addresshandler=(event)=>{
//         this.setState({
//            [event.target.password]:event.target.value
//         })
//     }

//     agehandler=(event)=>{
//         this.setState({
//             [event.target.value]:event.target.value
//         })
//     }

//     handleSubmit=()=>{
//         alert("User Registered Successfully !!!!")
//         console.log(this.state);
//         this.setState({
//             firstName:"",
//             lastName:"",
//            address:"",
//           age:"",
//           id: "",
//           allergy: ""
//         })
//     }




//     render() {
//         return (
//             <div>

//                 <form onSubmit={this.handleSubmit}>
//                     <h1>User Registration</h1>
                 
//                     <button type="submit">Submit</button>
//                 </form>

//             </div>
//         )
//     }
// }

// export default Form


// import React from "react";
// import TextField from "material-ui/TextField";
// import RaisedButton from "material-ui/RaisedButton";
// import CheckIcon from "material-ui/svg-icons/navigation/check";
// import CancelIcon from "material-ui/svg-icons/navigation/cancel";
// import { TableRow, TableRowColumn } from "material-ui/Table";

// export default class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       values: {
//         ...props.x
//       },
//       errors: {
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         username: ""
//       }
//     };
//   }

//   change = e => {
//     const { name, value } = e.target;
//     this.setState(state => ({
//       values: {
//         ...state.values,
//         [name]: value
//       }
//     }));
//   };

//   validate = () => {
//     let isError = false;
//     const errors = {
//       firstName: "",
//       lastName: "",
//       username: "",
//       email: "",
//       password: ""
//     };

//     const { username, email } = this.state.values;

//     if (username.length < 5) {
//       isError = true;
//       errors.username = "Username needs to be atleast 5 characters long";
//     }

//     if (email.indexOf("@") === -1) {
//       isError = true;
//       errors.email = "Requires valid email";
//     }

//     this.setState({
//       errors
//     });

//     return isError;
//   };

//   onSubmit = e => {
//     e.preventDefault();
//     const err = this.validate();
//     if (!err) {
//       this.props.handleSave(this.props.i, this.state.values);
//     }
//   };

//   render() {
//     const { header, x, i } = this.props;
//     return [
//       header.map((y, k) => (
//         <TableRowColumn key={`trc-${k}`}>
//           <TextField
//             name={y.prop}
//             onChange={this.change}
//             value={this.state.values[y.prop]}
//             errorText={this.state.errors[y.prop]}
//           />
//         </TableRowColumn>
//       )),
//       <TableRowColumn key="icon-row-column">
//         <CheckIcon onClick={this.onSubmit} />
//         <CancelIcon onClick={this.props.stopEditing} />
//       </TableRowColumn>
//     ];
//   }
// }
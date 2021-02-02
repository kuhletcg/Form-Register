// import React from " Ract";
   
// export default class  Form extends React.Component {
//  state = {
//     firstName: "",
//     LastName: "",
//     ID: "",
//     Address: "",
//     Age: ""
//   };

//   change = e=> {
//       this.setState ({
//           [e.terget.name]: e.target.value
//       });
//   };


//   onSubmit = e  => {
//       e.preventDefault();
// this.props.onSubmit(this.state);

// this.setState({
//     firstName: "",
//     lastName: "",
//     ID: "",
//     Address: "",
//     Age: ""

// });
// };

//   render() {
//     return (
//       <form>
//         <input name="First name"
//         value ={ this.state.firstName} onChange={e => this.change(e)} />

// <input name="Last name"
//         value ={ this.state.lasttName} onChange={e => this.change(e)} />

// <input name="ID"
//         value ={ this.state.id} onChange={e => this.change(e)} />

// <input name="Address"
//         value ={ this.state.address} onChange={e => this.change(e)} />

// <input name="Age"
//         value ={ this.state.age} onChange={e => this.change(e)} />


// <button onClick={e => this.onSubmit(e)}>Submit</button>
//       </form>
//     );
//   }
// }

// import React, { Component } from 'react'


// class App extends React.Components {
//     state = {
//         names: [
//             'Kuhle',
//             'John',
//             'Leonard',
//             'Bob',
//             'Queen',
//         ],
//         searchTerm: ""
//     }
// editSearchTerm = (e) => {
//     this.setState({editSearchTerm: e.target.value})
// }
// dynamicSearch = () => {
//     return this.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
// }
// render() {
//     return (

// <div style = {{textAlign: 'center', paddingTop: '30vh'}}>
// <input type= "text" value= {this.state.searchTerm} onChange={this.editSearchTerm} placeholder= 'Search for a name!'/>
//    <br></br>
// <h3>These are the important names:</h3>   
// <NamesContainer name = {this.dynamicSearch()}/>  
// </div>
// );
//     }
// }


import React from 'react';

// export default class SearchBarComponent extends React.Component {

class Form extends Component {
    state = {
        initialItems: [],
        items: []
    }

    filterList = (event) => {
      let items = this.state.initialItems;
      items = items.filter((item) => {
        return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
      });
      this.setState({items: items});
    }

    componentWillMount = () => {
      this.setState({
          initialItems: this.props.content,
          items: this.props.content
      })
    }

    render() {
      return (
        <div>
          <form>
                <input type="text" placeholder="Search" onChange={this.filterList}/>
          </form>
          <div>
            {
                this.state.items.map(function(item) {
                    return <div key={item}>{item}</div>
                })

                
            }
            </div>
        </div>
      );
    }
};
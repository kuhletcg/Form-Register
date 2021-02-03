class App extends React.Components {
    state = {
        names: [
            'Kuhle',
            'John',
            'Leonard',
            'Bob',
            'Queen',
        ],
        searchTerm: ""
    }
editSearchTerm = (e) => {
    this.setState({editSearchTerm: e.target.value})
}
dynamicSearch = () => {
    return this.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
}
render() {
    return (

<div style = {{textAlign: 'center', paddingTop: '30vh'}}>
<input type= "text" value= {this.state.searchTerm} onChange={this.editSearchTerm} placeholder= 'Search for a name!'/>
   <br></br>
<h3>These are the important names:</h3>   
<NamesContainer name = {this.dynamicSearch()}/>  
</div>
);
    }
}

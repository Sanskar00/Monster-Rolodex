// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {CardList} from './component/card-list/card-list.component'
import { SearchField } from './component/searchField/searchField';

class App extends Component{
  constructor(){
    super();
    
    this.state={
      monsters:[],
      searchField:""
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}));
  }
  handleChange=e=>{
    this.setState({searchField: e.target.value})
  }
  render(){
    const {monsters,searchField}=this.state
    const filteredMonster=monsters.filter(monster=>(
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ))
    return (
     
      <div className="App">
        <h1>Monters Rolodex</h1>
        <SearchField placeholder='Search Monster' handleChange={this.handleChange}/>
        <CardList name={filteredMonster} />
      </div>
    );
  }
}
export default App;

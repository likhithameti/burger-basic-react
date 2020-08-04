import React,{Component} from 'react';
import './App.css';
import Data from './person/people
import styled from 'styled-components';

const StyledButton=styled.button`
  text-align:center;
  border:2px solid black;
  background-color:${props=>props.alt ?'red':'green'};
  &:hover{
    width:100px;
  }
`;
const DivNew=styled.div`
text-align:center;
`;
class App extends Component{
  state={
    people:[
      {name:"Ramesh",age:30},
      {name:"Mohan",age:29},
      {name:"Saleem",age:47}
    ],
    visible:false
  }
  toggleHandler = () =>
  {
    const ans=this.state.visible;
    this.setState({
      visible:!ans
    })
  }
  render(){
    let lists=null;
    if(this.state.visible){
      lists = (
        <div>
          {this.state.people.map(p=>{
            return <Data name={p.name} age={p.age} />
          })}
        </div>
      )
    }
    return( 
      <DivNew>
        <StyledButton alt={this.state.visible} onClick={this.toggleHandler} >View/Hide Names</StyledButton>
        {lists}
      </DivNew>
     
    )
  }
}

export default App;
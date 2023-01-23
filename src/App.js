
import './App.css';
import {useState} from 'react';

function App() {

  //create a state=>counter-to hold value
  const [counter,setCounter]=useState(0)
  function incrementCounter(){
    setCounter(counter+1)
  }
  function decrementCounter(){
    if(counter!==0)
    setCounter(counter-1)
  }
  function reset(){
    setCounter(0)
  }

  return (
    <div 
    style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      border:'2px solid gray' ,
      margin:'20px',
      padding:'200px',
      
    }} 
    className="App">
      <header className="App-header">
      <h3 className='h1'>Your Turn....!</h3>

        
       <h1
       className='text-center'
       >{counter}</h1>
       <button className='b1'
       style={{
       
        color:'white',
        padding:'10px',
        border:'2px solid gray',
        margin:'4px'
             }}
       onClick={incrementCounter}>Add</button>
       <button className='b2'
       style={{
        // backgroundColor:'red',
        color:'white',
        padding:'10px',
        border:'2px solid gray',
        margin:'4px'
             }}
       onClick={decrementCounter}>Reduce</button>
       <button className='b3'
       style={{
        // backgroundColor:'black',
        color:'white',
        padding:'10px',
        border:'2px solid gray',
        margin:'4px'
             }}
       onClick={reset}>Reset</button>
      </header>
    </div>
  );
}

export default App;

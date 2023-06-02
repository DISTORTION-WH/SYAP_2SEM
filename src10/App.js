import React from 'react';
import './App.css'
import Catalog from './components/SortTable/Catalog/Catalog';
import SignUpForm from './components/SignUpForm/SignUpForm';

function App(props) {
  return (
    <div className="App">
    
      <SignUpForm state={props.state} flags={props.state.flags} days={props.state.flags} months={props.state.months} minYear={props.state.minYear}/>
      <Catalog products={props.state.products}/>
    </div>
  );
}



export default App;

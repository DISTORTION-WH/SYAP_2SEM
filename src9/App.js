import React from 'react';
import logo from './logo.svg';
import './App.css'
import Catalog from './components/SortTable/Catalog/Catalog';

function App(props) {
  return (
    <div className="App">
      <Welcome />
      <Catalog products={props.state.products}/>
    </div>
  );
}

const Welcome = () => {
  return (''  );
}

export default App;

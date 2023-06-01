import React from 'react';
import "../styles/buttons.module.css"

class SwitchJob extends React.Component {
  render() {

    return (
    <div>
      <button value={'Инженер'} onClick={(e) => {this.props.switchProfession(e.target.value)}}>Инженер</button>  
      <button value={'Водитель'} onClick={(e) => {this.props.switchProfession(e.target.value)}}>Водитель</button>  
      <button value={'Модельер'} onClick={(e) => {this.props.switchProfession(e.target.value)}}>Модельер</button>  
      <button value={'Программист'} onClick={(e) => {this.props.switchProfession(e.target.value)}}>Программист</button>  
      <button value={'Учитель'} onClick={(e) => {this.props.switchProfession(e.target.value)}}>Учитель</button>  
     
    </div>
    );
  }
}

export default SwitchJob;

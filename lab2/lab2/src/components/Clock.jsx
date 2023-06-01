import React from "react";
import Time from "./Time";
import "../styles/clockUI.module.css"

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {timeZone: undefined};
        this.state = {format: '12'}
    }

    setTimeZone(timeZone) {
        this.setState({timeZone: timeZone});
    }

    setFormat(format){
        this.setState({format : format})
    }

   

    selectFormat = () => {
        return(
            <div className="radiobuttons">
                <input type="radio" name="timeFormat" value={'12'} onChange={(e) => this.setFormat(e.target.value)}></input> 
                    <label>12 часовой режим</label>
                <input type="radio" name="timeFormat" value={'24'} onChange={(e) => this.setFormat(e.target.value)}></input>
                    <label>24 часовой режим</label>
            </div>
        )
    }
    selectCountry = () =>{
        return(
            <select onChange={(e) => this.setTimeZone(e.target.value)}>
                <option value={'local'}>Беларусь</option>
                <option value={'Africa/Harare'}>Харера +02:00</option>
                <option value={'Asia/Kathmandu'}>Бангкок +5:45</option>
            </select>
        )
    }
    render(){
        return(
            <div>
              
                {this.selectFormat()}
                
                
                <div>
                    <h1>Текущее время: </h1>
                    {this.selectCountry()}
                    <Time format={this.state.format} timeZone={this.state.timeZone}/>
                </div>
                <hr style={{color: "black"}}/>
            </div>
            )
    }
}

export default Clock;
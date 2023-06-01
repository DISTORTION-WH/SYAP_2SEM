import React from 'react';

class CalendarHeader extends React.Component {
    constructor(){
        super()
        this.months = ['Январь', 'Феварль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    }
    render() {
        
    return (
 <div className="calendar-header">
              <div className="title">
                <h2>{this.months[this.props.currentDay.getMonth()]} 
                    {this.props.currentDay.getFullYear()}</h2>
              </div>
              <div className="tools">
                <p>{this.months[this.props.selectedDay.getMonth()].substring(0, 3)} {this.props.selectedDay.getDate()}</p>
                <button onClick={this.props.previousMonth}>
                  <span>
                     &lt;
                  </span>
                </button>
                <button onClick={this.props.nextMonth}>
                  <span>
                    &gt;
                  </span>
                </button>
              </div>
            </div>
        )
    }
}

export default CalendarHeader;

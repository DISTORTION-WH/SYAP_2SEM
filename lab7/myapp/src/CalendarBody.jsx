import React from 'react';

const CalendarBody = ({ date, setSelectedDays, selectedDays, notes, noteDate, setNotes }) => {
    const currentDate = new Date();
    
    const startDay = (date) => {
        let startDay; date.getDay() === 0 ? (startDay = 6) : (startDay = date.getDay() - 1);
        return startDay;
    }

    const oneMonth = (date) => {
        let Month = [], day = 1 - startDay(date), month = date.getMonth(), year = date.getFullYear();
        for (let i = 0; i < 6; i++) { 
            Month[i] = [];
            for (let j = 0; j < 7; j++) { 
                Month[i][j] = new Date(year, month, day++);
            }
        }

        return Month;
    }

    const class_assignment = (weekDate, currentDate, date, selectedDays) => {
        
        if (date.getMonth() !== weekDate.getMonth())
            return "NotCurrentMounthDate";

        if (notes.filter(note => note.noteDate.valueOf() === weekDate.valueOf()).length > 0) {

           
            if (noteDate !== null && noteDate.getDate() === weekDate.getDate() && noteDate.getMonth() === weekDate.getMonth() && noteDate.getFullYear() === weekDate.getFullYear())
                return "selectedNoteDay red";

            
            for (let i = 0; i < selectedDays.length; i++) {
                if (selectedDays[i].getDate() === weekDate.getDate() && selectedDays[i].getMonth() === weekDate.getMonth() && selectedDays[i].getFullYear() === weekDate.getFullYear())
                    return "selectedDate red";
            }
            
            if (weekDate.getDate() === currentDate.getDate() && weekDate.getMonth() === currentDate.getMonth() && weekDate.getFullYear() === currentDate.getFullYear())
                return "todayDate red";

            return "red";
        }

        else {
        
            if (noteDate !== null && noteDate.getDate() === weekDate.getDate() && noteDate.getMonth() === weekDate.getMonth() && noteDate.getFullYear() === weekDate.getFullYear())
                return "selectedNoteDay";

        
            for (let i = 0; i < selectedDays.length; i++) {
                if (selectedDays[i].getDate() === weekDate.getDate() && selectedDays[i].getMonth() === weekDate.getMonth() && selectedDays[i].getFullYear() === weekDate.getFullYear())
                    return "selectedDate";
            }
           
            if (weekDate.getDate() === currentDate.getDate() && weekDate.getMonth() === currentDate.getMonth() && weekDate.getFullYear() === currentDate.getFullYear())
                return "todayDate";
        }
      
        if (date.getMonth() !== weekDate.getMonth())
            return "NotCurrentMounthDate";
    };

    const selectDays = (weekDate) => {
        setSelectedDays(weekDate);
    };
    const newDate = new Date(date.getFullYear(), date.getMonth(), 1);

    return (
        <tbody> {oneMonth(newDate).map((week, index) => (
            <tr key={index}> {week.map((weekDate, index) => (
                <td key={index} className={class_assignment(weekDate, currentDate, newDate, selectedDays, notes)}
                    onClick={() => { if (newDate.getMonth() === weekDate.getMonth()) selectDays(weekDate); }} >
                    {weekDate.getDate()}
                </td>))}
            </tr>))}
        </tbody>)
}
export default CalendarBody
import React, { useState } from 'react';
import CalendarHead from './CalendarHead';
import CalendarBody from './CalendarBody';
import Notes from './Notes';


const Calendar = () => {
    let [date, setDate] = useState(new Date());
    let [selectedDays, setSelectedDays] = useState([]);
    let [noteDate, setNoteDate] = useState(null);
    let [notes, setNotes] = useState([]);
    const setCurrentDate = (date) => setDate(date);

    const selectDays = (day) => {
        for (let i = 0; i < selectedDays.length; i++) {
            if (day.valueOf() === selectedDays[i].valueOf()) {
                if (noteDate !== null && day.valueOf() === noteDate.valueOf()) {
                    setSelectedDays([...selectedDays.slice(0, i), ...selectedDays.slice(i + 1),]);
                    setNoteDate(null);
                    return
                } else {
                    setNoteDate(day);
                    return;
                }
            }
        }
        setSelectedDays([...selectedDays, day]);
    };
    return (

        <>
            <table className="item">
                <CalendarHead setDate={setCurrentDate} noteDate={noteDate} />
                <CalendarBody date={date} setSelectedDays={selectDays} selectedDays={selectedDays} noteDate={noteDate} notes={notes} setNotes={setNotes} />
            </table>
            <div className='NotesBottom'>
                <Notes date={noteDate} notes={notes} setNotes={setNotes} />
            </div>
        </>);
}
export default Calendar;
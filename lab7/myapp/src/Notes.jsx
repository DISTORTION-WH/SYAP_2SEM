import React from 'react';
import Createnote from './Createnote';
import NotesList from './NotesList';


const Notes = ({ date, notes, setNotes }) => {
    console.log(notes)
    if (date) return (
        <>
            <Createnote notes={notes} setNotes={setNotes} date={date} />
            <NotesList notes={notes.filter(note => note.noteDate.valueOf() === date.valueOf())} />
        </>);
    else return null;
}
export default Notes
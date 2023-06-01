import React, { useState } from 'react';

const NotesList = ({ notes }) => {
    if (notes.length > 7) alert(' заметок больше 7')
    return (
        <div>
            {notes.map(note => <div className="NotesList" key={note.title + note.noteDesc}>
                <div className="title">{note.noteTitle} </div>
                <br />
                <hr />
                <div className="description"> {note.noteDesc}</div>
            </div>)}
        </div>
    );
}
export default NotesList
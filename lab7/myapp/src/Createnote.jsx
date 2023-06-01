import React, { useState } from 'react';

function Createnote({ notes, setNotes, date}) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const addButtonHandler = (e) => {
        setNotes([...notes, {
            noteDate: date,
            noteTitle: title,
            noteDesc: text,
        }])
    }

    const deleteAllNotes = (e) => {
        setNotes(notes.filter(note => note.noteDate.valueOf() !== date.valueOf()));
    }
  
    const deleteFirstNote = (e) => {
        const noteToDelete = notes.findIndex(note => note.noteDate.valueOf() === date.valueOf());
        setNotes(notes.filter((note, index) => index !== noteToDelete));
    }
    const deleteLastNote = (e) => {
        let arr = [...notes];
        arr.reverse();
        const noteToDelete = arr.length - 1  - arr.findIndex(note => note.noteDate.valueOf() === date.valueOf());
        setNotes(notes.filter((note, index) => index !== noteToDelete));
    }

    return (
        <form className="myNoteForm">
             <div>Все заметки: {Object.keys(notes).length} </div>
                <div>Заметок на конкретную дату: {notes.filter(note => note.noteDate.valueOf() === date.valueOf()).length}</div>

                <br /><br />
            <input className="myInput"
                type="text"
                placeholder="Название"
                value={title}
                onChange={(event => setTitle(event.target.value))} />

            <textarea
                className="myTextarea"
                value={text}
                onChange={(event => setText(event.target.value))}
                placeholder="Текст" />

               
            <div className="buttons">
                <input type="button" className="button" onClick={addButtonHandler} value="Добавить заметку" />
                <br /><br />
                <input type="button" className="button" onClick={deleteFirstNote} value="Удалить первую заметку" />
                <br /><br />
                <input type="button" className="button" onClick={deleteAllNotes} value="Удалить все заметки" />
                <br /><br />
                <input type="button" className="button" onClick={deleteLastNote} value="Удалить последнюю заметку" />
                
            </div>
        </form>)
}
export default Createnote
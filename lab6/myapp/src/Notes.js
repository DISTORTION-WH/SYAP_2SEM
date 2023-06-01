import React, { useState } from 'react';
import './Notes.css';

const Notes = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (notes.length >= 7) {
      alert('У вас слишком много заметок');
    }
    setNotes([...notes, { title, date, content }]);
    setTitle('');
    setDate('');
    setContent('');
  };

  const handleQuickAdd = () => {
    if (notes.length >= 7) {
      alert('У вас слишком много заметок');
    }
    const quickTitle = 'Быстрая заметка';
    const quickDate = new Date().toLocaleDateString();
    const quickContent = 'Это текст быстрой заметки.';
    setNotes([...notes, { title: quickTitle, date: quickDate, content: quickContent }]);
  };

  const handleDeleteFirst = () => {
    setNotes(notes.slice(1));
  };

  const handleDeleteLast = () => {
    setNotes(notes.slice(0, -1));
  };

  return (
    <div className="notes">
      <form onSubmit={handleSubmit} className="note-form">
        <label>Заголовок заметки</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Дата заметки</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label>Текст заметки</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit" className="add-note-btn">Добавить заметку</button>
      </form>
      <button onClick={handleQuickAdd} className="quick-add-btn">Быстрая заметка</button>
      {notes.length > 3 && (
        <div className="delete-buttons">
          <button onClick={handleDeleteFirst}>Удалить первую заметку</button>
          <button onClick={handleDeleteLast}>Удалить последнюю заметку</button>
        </div>
      )}
      <div className="notes-list">
        {notes.map((note, index) => (
          <div
            key={index}
            className={`note ${notes.length >= 7 && index >= 7 ? 'warning' : ''}`}
          >
            <h3>{note.title}</h3>
            <p>{note.date}</p>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;

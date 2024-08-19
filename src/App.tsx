import React, { useState } from 'react';
import { Note } from './types/Note';
import NotesList from './NotesList';
import AddNote from './AddNote';

const App: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);

    const addNote = (content: string) => {
        const newNote: Note = {
            id: Date.now(),
            content,
        };
        setNotes([...notes, newNote]);
    };

    const deleteNote = (id: number) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <div>
            <h1>Notes App</h1>
            <AddNote onAdd={addNote} />
            <NotesList notes={notes} onDelete={deleteNote} />
        </div>
    );
};

export default App;

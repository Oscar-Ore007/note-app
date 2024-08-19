import React from 'react';
import { Note } from './types/Note';

interface NoteItemProps {
    note: Note;
    onDelete: (id: number) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onDelete }) => {
    return (
        <div>
            <p>{note.content}</p>
            <button onClick={() => onDelete(note.id)}>Delete</button>
        </div>
    );
};

export default NoteItem;

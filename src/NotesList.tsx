import React from "react";
import { Note } from "./types/Note";
import NoteItem from "./Noteitem";

interface NotesListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

const NotesList: React.FC<NotesListProps> = ({ notes, onDelete }) => {
  return (
    <div>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NotesList;

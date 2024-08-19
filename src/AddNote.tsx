import React, { useState } from 'react';

interface AddNoteProps {
    onAdd: (content: string) => void;
}

const AddNote: React.FC<AddNoteProps> = ({ onAdd }) => {
    const [content, setContent] = useState('');

    const handleAdd = () => {
        if (content.trim()) {
            onAdd(content);
            setContent('');
        }
    };

    return (
        <div>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleAdd}>Add Note</button>
        </div>
    );
};

export default AddNote;

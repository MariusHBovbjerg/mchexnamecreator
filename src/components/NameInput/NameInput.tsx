import { Input } from 'antd';
import React from 'react';
import './NameInput.css'; // Assuming styles are moved to NameInput.css

interface NameInputProps {
    name: string;
    setName: (value: string) => void; // More specific type for setName
}

export const NameInput: React.FC<NameInputProps> = ({ name, setName }) => {
    return (
        <div className="name-input-container">
            <Input.TextArea
                className="name-input"
                placeholder="Nickname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Nickname"
            />
        </div>
    );
};
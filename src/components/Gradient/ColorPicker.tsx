import React from 'react';
import { ChromePicker } from 'react-color';

interface ColorPickerProps {
    color: string;
    setColor: React.Dispatch<React.SetStateAction<string>>;
}

// Move the static style object outside of the component to prevent it from being recreated on each render
const pickerStyle = { margin: 4 };

export const ColorPicker: React.FC<ColorPickerProps> = ({ color, setColor }) => {
    return (
        <div style={pickerStyle}>
            <ChromePicker
                disableAlpha
                color={color}
                onChange={({ hex }) => setColor(hex)}
            />
        </div>
    );
};
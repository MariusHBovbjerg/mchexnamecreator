import React, { useState } from 'react';
import { ColorPicker } from "./ColorPicker";

interface GradientProps {
    colorGradient: string,
    setColours: (color: string) => void, // Changed to match the expected function signature
}

export const Gradient: React.FC<GradientProps> = ({ colorGradient, setColours }) => {
    let [ColourPickerColor, setColour] = useState(colorGradient); // Initialize with colorGradient

    const handleColorChange = (color: string) => {
        setColour(color);
        setColours(color); // Call setColours with the new color
    };

    // Adjusted to match Dispatch<SetStateAction<string>>
    const setColorWrapper = (color: string | ((prevState: string) => string)) => {
        if (typeof color === 'function') {
            // If color is a function, call it with the current ColourPickerColor to get the new color
            const newColor = color(ColourPickerColor);
            handleColorChange(newColor);
        } else {
            // If color is a string, directly pass it to handleColorChange
            handleColorChange(color);
        }
    };

    return (
        <ColorPicker color={ColourPickerColor} setColor={setColorWrapper} />
    );
};
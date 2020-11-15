import React, {useState} from 'react'
import {ChromePicker} from 'react-color'
interface ColorPickerProps {
    color: string,
    setColor: (color: string) => void
}

export const ColorPicker: React.FC<ColorPickerProps> = ({color, setColor}) => {

    return (
        <>
            <ChromePicker disableAlpha color={color} onChange={((color, event) => {
                setColor(color.hex);
            })} />
            <p>{color}</p>
        </>
    );
}
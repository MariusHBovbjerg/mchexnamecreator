import React from 'react'
import {ChromePicker} from 'react-color'
interface ColorPickerProps {
    color: string,
    setColor: React.Dispatch<React.SetStateAction<string>>,
}

export const ColorPicker: React.FC<ColorPickerProps> = ({color, setColor}) => {

    return (
        <>
            <div style={{margin:4}}>
                <ChromePicker disableAlpha color={color} onChange={((color, event) => {
                    setColor(color.hex);
                })} />
            </div>
        </>
    );
}
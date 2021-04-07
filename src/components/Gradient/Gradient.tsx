import React, { useState } from 'react'
import {ColorPicker} from "./ColorPicker";
interface GradientProps {
    colorGradient:string,
    setColours: React.Dispatch<React.SetStateAction<string>>,
}

export const Gradient: React.FC<GradientProps> = ({colorGradient, setColours}) => {
    let [ColourPickerColor, setColour] = useState("");
           
    const colourPicker: JSX.Element = <ColorPicker color={ColourPickerColor} setColor={setColour}/>
        
    colorGradient = ColourPickerColor;
    setColours(colorGradient);
    return (
        <>
            {colourPicker}
        </>
    );
    
}
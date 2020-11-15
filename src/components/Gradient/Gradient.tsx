import React, { useState } from 'react'
import {ColorPicker} from "./ColorPicker";
interface GradientProps {
    colorCodes:string[],
    setColours: React.Dispatch<React.SetStateAction<string[]>>,
}

export const Gradient: React.FC<GradientProps> = ({colorCodes, setColours}) => {

    let colourCount = 2;
    
    let [Colour, setColour] = useState("");

    const handleColourChange = (index: number, colourcode: string) => {
        console.log(`Index: ${index}\nColourcode: ${colourcode}`)
    }

    const colourPickers: JSX.Element[] = [];

    for (let i = 0; i < colourCount; i++) {
        colourPickers.push(
            <ColorPicker color={Colour} setColor={setColour}/>
            
        )
        
        colorCodes[i] = Colour;
    }

    setColours(colorCodes);

    return (
        <>
            {colourPickers}
        </>
    );
}
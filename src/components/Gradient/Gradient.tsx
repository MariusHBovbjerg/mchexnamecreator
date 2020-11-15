import React from 'react'
import {ColorPicker} from "./ColorPicker";
interface GradientProps {

}

export const Gradient: React.FC<GradientProps> = ({}) => {

    let colourCount = 1;

    const handleColourChange = (index: number, colourcode: string) => {
        console.log(`Index: ${index}\nColourcode: ${colourcode}`)
    }

    const colourCodes: string[] = [];
    const colourPickers: JSX.Element[] = [];

    for (let i = 0; i < colourCount; i++) {
        colourPickers.push(
            //<ColorPicker bo key={i}/>
        )      
    }

    return (
        <>
            {colourPickers}
        </>
    );
}
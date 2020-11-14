import React from 'react'

interface GamerProps {
    textToDisplay: string, 
    moreText?: string
}

export const Gamer: React.FC<GamerProps> = ({textToDisplay, moreText}) => {

    let textToPrint = textToDisplay;
    if (moreText) { 
        textToPrint += moreText
    }
    
    return (
        <>
            <p>{textToPrint}</p>
            <p>{textToPrint}</p>
        </>
    );
}
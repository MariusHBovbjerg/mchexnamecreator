import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState } from 'react'
import {Gradient} from "./Gradient";
interface GradientProviderProps {
    IsChecked: boolean,
    colorCodes:string[],
    setColours: React.Dispatch<React.SetStateAction<string[]>>,
    Amount:number,
    setAmount: React.Dispatch<React.SetStateAction<number>>,
}

export const GradientProvider: React.FC<GradientProviderProps> = ({IsChecked, colorCodes, setColours, Amount, setAmount}) => {

    let [ColourGradientColour, setColour] = useState("");
    let [ColourGradientColour2, setColour2] = useState("");
    let [ColourGradientColour3, setColour3] = useState("");
    let [ColourGradientColour4, setColour4] = useState("");
    let [ColourGradientColour5, setColour5] = useState("");
    let [ColourGradientColour6, setColour6] = useState("");
    
    const colourPickers: JSX.Element[] = [];

    colourPickers.push(
        <Gradient colorGradient={ColourGradientColour} setColours={setColour}/>
    );
    colourPickers.push(
        <Gradient colorGradient={ColourGradientColour2} setColours={setColour2}/>
    );
    colourPickers.push(
        <Gradient colorGradient={ColourGradientColour3} setColours={setColour3}/>
    );
    colourPickers.push(
        <Gradient colorGradient={ColourGradientColour4} setColours={setColour4}/>
    );
    colourPickers.push(
        <Gradient colorGradient={ColourGradientColour5} setColours={setColour5}/>
    );
    colourPickers.push(
        <Gradient colorGradient={ColourGradientColour6} setColours={setColour6}/>
    );
    colorCodes[0] = ColourGradientColour;
    colorCodes[1] = ColourGradientColour2;
    colorCodes[2] = ColourGradientColour3;
    colorCodes[3] = ColourGradientColour4;
    colorCodes[4] = ColourGradientColour5;
    colorCodes[5] = ColourGradientColour6;
    
    setColours(colorCodes);
    setAmount(Amount);

    if(IsChecked){
        return (
            <>
            <div style={{position:'relative', margin:8}}>
                <Button 
                    type="primary" 
                    shape="circle" 
                    size="large"
                    icon={<PlusOutlined />}
                    style={{position:'relative',margin:4,left:"23rem"}}
                    onClick={(e) => {
                        if(Amount<6){
                            setAmount(Amount+1);
                        }
                    }}
                            
                />
                <Button 
                    type="primary" 
                    shape="circle" 
                    size="large"
                    icon={<MinusOutlined />}
                    style={{position:'relative',margin:4,left:"23rem"}}
                    onClick={(e) => {
                        if(Amount>0){
                            setAmount(Amount-1);
                        }
                    }} 
                />
                <p style={{position:'relative',margin:4,left:345}}>Active Colours {Amount}</p>
                <div style={{position:'relative',display:"flex",flexDirection:"row",flexWrap:"wrap",left:60}}>
                    
                    {colourPickers}
        
                </div>
            </div>
            </>
        );
    }
    return(
        <>
            
        </>
    );
}

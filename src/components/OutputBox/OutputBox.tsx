import { Input, Button } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import React from 'react'
interface OutputBoxProps {
    colours:string[],
    name:string,
    coloured: boolean,
    underlined: boolean,
    amount: number,
    bold: boolean,
    italicized: boolean,
    strikethrough: boolean,
}

let setGradientResolution: (nameSize: number, gradientSize: number) => number = function(
    nameSize: number, 
    gradientSize: number
): number {
	if (nameSize > gradientSize) {
		return Math.ceil(nameSize / gradientSize);

	}
	else {
		return 1;
			
	}
}
let res = 0;
export const OutputBox: React.FC<OutputBoxProps> = ({coloured, colours, name, underlined, amount, bold, italicized, strikethrough}) => {
    
    let newName:string = "";
    let code:string ="";

    if(name === ""){
        newName = "";
    }

    if(underlined){
        code += "&n";
    }
    if(bold){
        code += "&l";
    }
    if(italicized){
        code += "&o";
    }
    if(strikethrough){
        code += "&m";
    }

    res = setGradientResolution(name.length,amount);
    let colorVal = 0;
	let power = 0;
    if(coloured){

        newName = "&" + colours[colorVal] + code;
        for(var i = 1; i < name.length - power + 1; ++i){
            
		    newName = newName + name[i-1+power];

            if(i/res === 1 && (power + i) !== name.length){
                colorVal++;
                
                newName= newName + "&" + colours[colorVal] + code;
                
                power = power + i;

                i = 0;
            }
        }
    }
    else{
        for(var j = 0; j < name.length; j++){
            
            newName += code;

            newName += name[j];
        }
    }
    return (
        <>
            <div style={{ margin: 8 }}>
                <Input.TextArea
                    value={newName}
                    disabled
                    style={{width:400, height:100, fontSize:"25px",backgroundColor:"#1A1919",borderColor:"#1A1919",color:"#FFFFFF"}}
                     
                />
                <Button 
                    type="primary" 
                    shape="circle" 
                    icon={<CopyOutlined />} 
                    size="large"
                    style={{position:'absolute', marginLeft:8}}
                    onClick={(e) => { navigator.clipboard.writeText("/nick " + newName)}}
                    
                />
            </div>
        </>
    );
}
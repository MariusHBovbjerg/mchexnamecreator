import { Input, Button, Tooltip } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import React from 'react'
interface OutputBoxProps {
    colours:string[],
    name:string,
    coloured: boolean,
    underlined: boolean,
    bold: boolean,
    italicized: boolean,
    strikethrough: boolean,
}

export const OutputBox: React.FC<OutputBoxProps> = ({coloured, colours, name, underlined, bold, italicized, strikethrough}) => {
    
    //do colour here

    let code:string ="";
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

    let newName:string = "";
    
    newName += code;
    newName += name;
    return (
        <>
            <div style={{ marginBottom: 16 }}>
                <Input 
                    value={newName}
                    disabled
                    addonAfter={
                        <Button 
                            type="primary" 
                            shape="circle" 
                            icon={<CopyOutlined />} 
                            size="small"
                            onClick={(e) => { navigator.clipboard.writeText(newName)}}
                        />
                    } 
                />

            </div>
        </>
    );
}
import { CopyOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import React from 'react';

interface OutputBoxProps {
    colours: string[];
    name: string;
    coloured: boolean;
    underlined: boolean;
    amount: number;
    bold: boolean;
    italicized: boolean;
    strikethrough: boolean;
}

const calculateGradientResolution = (nameSize: number, gradientSize: number): number =>
    nameSize > gradientSize ? Math.ceil(nameSize / gradientSize) : 1;

const applyFormattingCodes = (underlined: boolean, bold: boolean, italicized: boolean, strikethrough: boolean): string => {
    let code = "";
    if (underlined) code += "&n";
    if (bold) code += "&l";
    if (italicized) code += "&o";
    if (strikethrough) code += "&m";
    return code;
};

const applyColoursAndCodes = (name: string, colours: string[], amount: number, formattingCodes: string): string => {
    const resolution = calculateGradientResolution(name.length, amount);
    let colouredName = "";
    let colourIndex = 0;
    for (let i = 0; i < name.length; i += resolution) {
        colouredName += `&${colours[colourIndex++ % colours.length]}${formattingCodes}`;
        colouredName += name.substring(i, i + resolution);
    }
    return colouredName;
};

export const OutputBox: React.FC<OutputBoxProps> = ({ coloured, colours, name, underlined, amount, bold, italicized, strikethrough }) => {
    const formattingCodes = applyFormattingCodes(underlined, bold, italicized, strikethrough);
    const newName = coloured ? applyColoursAndCodes(name, colours, amount, formattingCodes) : `${formattingCodes}${name}`;

    return (
        <>
            <div style={{ margin: 8 }}>
                <Input.TextArea
                    value={newName}
                    disabled
                    style={{ width: 400, height: 100, fontSize: "25px", backgroundColor: "#1A1919", borderColor: "#1A1919", color: "#FFFFFF" }}
                />
                <Button
                    type="primary"
                    shape="circle"
                    icon={<CopyOutlined />}
                    size="large"
                    style={{ position: 'absolute', marginLeft: 8 }}
                    onClick={() => { navigator.clipboard.writeText(`/nick ${newName}`) }}
                />
            </div>
        </>
    );
};
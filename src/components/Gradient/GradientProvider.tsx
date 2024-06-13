import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { Gradient } from "./Gradient";

interface GradientProviderProps {
    isChecked: boolean,
    colorCodes: string[],
    setColours: React.Dispatch<React.SetStateAction<string[]>>,
    amount: number,
    setAmount: React.Dispatch<React.SetStateAction<number>>,
}

export const GradientProvider: React.FC<GradientProviderProps> = ({ isChecked, colorCodes, setColours, amount, setAmount }) => {
    const initialColors = Array(6).fill("").map((_, index) => colorCodes[index] || "");
    const [colors, setColors] = useState<string[]>(initialColors);

    useEffect(() => {
        setColours(colors);
    }, [colors, setColours]);

    const handleColorChange = (index: number) => (newColor: string) => {
        const updatedColors = [...colors];
        updatedColors[index] = newColor;
        setColors(updatedColors);
    };

    const incrementAmount = () => setAmount(prevAmount => Math.min(prevAmount + 1, 6));
    const decrementAmount = () => setAmount(prevAmount => Math.max(prevAmount - 1, 0));

    if (!isChecked) {
        return null;
    }

    return (
        <>
            <div style={{ position: 'relative', margin: 8 }}>
                <Button
                    type="primary"
                    shape="circle"
                    size="large"
                    icon={<PlusOutlined />}
                    style={{ position: 'relative', margin: 4, left: "23rem" }}
                    onClick={incrementAmount}
                />
                <Button
                    type="primary"
                    shape="circle"
                    size="large"
                    icon={<MinusOutlined />}
                    style={{ position: 'relative', margin: 4, left: "23rem" }}
                    onClick={decrementAmount}
                />
                <p style={{ position: 'relative', margin: 4, left: 345 }}>Active Colours {amount}</p>
                <div style={{ position: 'relative', display: "flex", flexDirection: "row", flexWrap: "wrap", left: 60 }}>
                    {colors.slice(0, amount).map((color, index) => (
                        <Gradient key={index} colorGradient={color} setColours={handleColorChange(index)} />
                    ))}
                </div>
            </div>
        </>
    );
};
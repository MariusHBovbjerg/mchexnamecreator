import React from 'react'
import './CheckBox.css';

interface CheckBoxProps {
    checked: boolean,
    checkBoxName: string,
    setChecked: React.Dispatch<React.SetStateAction<boolean>>,
}

export const CheckBox: React.FC<CheckBoxProps> = ({checked,checkBoxName,setChecked}) => {
    
    
    return (
        <>
            <input className="checkBox" type="checkbox" id={checkBoxName} checked={checked} onChange={(e)=>{

                setChecked(e.target.checked);
            }}/>
            <label style={{margin:4}} htmlFor={checkBoxName}>{checkBoxName}</label>
        </>
    );
}
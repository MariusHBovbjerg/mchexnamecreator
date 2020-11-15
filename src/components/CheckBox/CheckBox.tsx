import React from 'react'

interface CheckBoxProps {
    checked: boolean,
    checkBoxName: string,
    setChecked: React.Dispatch<React.SetStateAction<boolean>>,
}

export const CheckBox: React.FC<CheckBoxProps> = ({checked,checkBoxName,setChecked}) => {
    
    
    return (
        <>
            <input className="checkBox" type="checkbox" checked={checked} onChange={(e)=>{

                setChecked(e.target.checked);
            }}/>
            {checkBoxName}
        </>
    );
}
import React from 'react';
import './CheckBox.css';

interface CheckBoxProps {
    checked: boolean;
    checkBoxName: string;
    setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckBox: React.FC<CheckBoxProps> = React.memo(({ checked, checkBoxName, setChecked }) => {
    return (
        <>
            <input
                className="checkBox"
                type="checkbox"
                id={checkBoxName}
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                aria-label={checkBoxName} // Accessibility improvement
            />
            <label className="checkBoxLabel" htmlFor={checkBoxName}>{checkBoxName}</label>
        </>
    );
});

export default CheckBox;
// Assuming you add .checkBoxLabel { margin: 4px; } to CheckBox.css
import { Input } from 'antd';
import React from 'react'

interface NameInputProps {
    name:string,
    setName: any,
}

export const NameInput: React.FC<NameInputProps> = ({name, setName}) => {
    return (
        <>
            <div style={{margin:8}}>
                <Input.TextArea style={{ width:350, height:20 }} placeholder="Nickname" value={name} onChange={(e) => {
                    setName(e.target.value);
                }}/>
           </div>
        </>
    );
}
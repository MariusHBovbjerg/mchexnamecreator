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
                <Input.TextArea style={{ position:"relative", width:510, height:30, fontSize:"25px",backgroundColor:"#E8E7E7",borderColor:"#E8E7E7"}} placeholder="Nickname" value={name} onChange={(e) => {
                    setName(e.target.value);
                }}/>
           </div>
        </>
    );
}
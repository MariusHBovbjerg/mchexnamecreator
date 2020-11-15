import { Input } from 'antd';
import React from 'react'

interface NameInputProps {
    name:string,
    setName: any,
}

export const NameInput: React.FC<NameInputProps> = ({name, setName}) => {
    return (
        <>
           <Input placeholder="Nickname" value={name} onChange={(e) => {
               setName(e.target.value);
           }}/>
        </>
    );
}
import { TextInputProps } from "../../types/TextInputProps"
import { useState } from 'react';

export const TextInput = (
    {placeholder='Enter text',borderRaidus=24}:TextInputProps) => {
    const [input, setInput] = useState("")
    return (
        <div>
            <input type="text" value={input} onChange={(event)=>{setInput(event.target.value)}}/>
            <p>{input}</p>
        </div>
    )
}
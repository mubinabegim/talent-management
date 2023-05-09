import { regStyles } from '@/styles';
import React, { FC } from 'react';
interface IInput {
    type?: "text" | "password" | "number" | "email";
    label?: string;
    placeholder?: string;
}

const Input: FC<IInput> = ({ type = "text", label, placeholder }) => {
    const labelLower = label?.toLowerCase();
    return (
        <div>
            <label className={regStyles.inputLabel} htmlFor={labelLower}>{label}</label>
            <input className={regStyles.input} type={type} id={labelLower} placeholder={placeholder} />
        </div>
    )
}

export default Input;
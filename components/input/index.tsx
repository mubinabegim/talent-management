import { regStyles } from '@/styles';
import React, { FC } from 'react';
interface IInput {
    type?: "text" | "password" | "number" | "email" | "date";
    label?: string;
    placeholder?: string;
    classes?: string;
    inputWidth?: any;
    wrapperWidth?: any;
}

const Input: FC<IInput> = ({ type = "text", label, placeholder, classes, inputWidth }) => {
    const labelLower = label?.toLowerCase();
    return (
        <div>
            <label className={regStyles.inputLabel} htmlFor={labelLower}>{label}</label>
            <input className={`${regStyles.input} ${inputWidth} ${classes}`} type={type} id={labelLower} placeholder={placeholder} />
        </div>
    )
}

export default Input;
import React, { FC } from 'react';
interface IButton {
    title?: string;
    type?: "submit" | "button";
    classes?: string;
    onClick?:() => void;
}
const Button: FC<IButton> = ({ title, type, onClick, classes }) => {
    return (
        <button onClick={onClick} className={`bg-indigo-700 min-w-[100px] text-white rounded-xl  py-1.5 px-9 text-lg text-center  font-light ${classes}`}>
            {title}</button>
    )
}

export default Button;
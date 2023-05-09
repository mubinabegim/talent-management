import React, { FC } from 'react';
import { regStyles } from '@/styles';

interface ISelect {
    label?: string;
    options?: any[];
}

const SelectOption: FC<ISelect> = ({ label, options }) => {
    const labelLower = label?.toLowerCase();

    return (
        <div>
            <label className={regStyles.inputLabel} htmlFor={labelLower}>{label}</label>
            <select className={regStyles.input} id={labelLower}>
                {options?.map((option) => {
                    return (
                        <option value={option.value}>
                            {option.label}
                        </option>
                    )
                })}

            </select>
        </div>
    )
}

export default SelectOption;
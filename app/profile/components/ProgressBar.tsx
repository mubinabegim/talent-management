import { Button } from '@/components';
import { progressBarStyles } from '@/styles';
import React, { FC } from 'react'

interface IProgressBar {
    label?: string;
    percentage?: number;
    labelSize?: number;
    classes?: string;
}

const ProgressBar: FC<IProgressBar> = ({ label, percentage, classes, labelSize }) => {
    return (
        <>
            <style>
                {`
                    .progressContainer::before { 
                        width: ${percentage}%;
                    }                         
                `}
            </style>
            <div className={`${classes} text-start`}>
                <p style={{ fontSize: `${labelSize}px` }}>{label}</p>
                <div className={`${progressBarStyles.progressContainer} progressContainer`}>
                    <progress className={progressBarStyles.progress} max="100" value={`${percentage}%`}></progress>
                </div>
            </div>
        </>
    )
}

export default ProgressBar; 

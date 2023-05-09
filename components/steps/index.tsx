import React, { FC } from 'react'
import { data } from './data';
import { stepStyles } from '@/styles';

interface ISteps {
    name: string;
}
const Steps: FC<ISteps> = ({ name }) => {

    return (
        <ul className={stepStyles.stepsWrapper}>
            <div className={stepStyles.dottedLine} />
            {data.map((step, index) => {
                return (
                    <li className={stepStyles.step} key={step.title}>
                        <span className={name === step.route ? stepStyles.activeStep : ""}>{step.step}</span>
                        <span>{step.title}</span>
                    </li>
                )
            })}
        </ul>
    )
}
export default Steps
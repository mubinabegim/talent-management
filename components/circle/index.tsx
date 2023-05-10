
import { circleStyles } from '@/styles';
import React, { FC } from 'react';
interface ICircle {

    circles: any[];
}
const Circle: FC<ICircle> = ({ circles }) => {
    return (
        <div className={circleStyles.container}>
            {circles?.map((circle) => {
                return (
                    <div style={{gap:circle.radius}} className={circleStyles.circleWrapper}>
                        <span className={circleStyles.label}>{circle.label}</span>
                        <div style={{ width: 2*circle.radius, height: 2*circle.radius }} className={circleStyles.circle}></div>
                    </div>
                )
            })}

        </div>
    )
}
export default Circle

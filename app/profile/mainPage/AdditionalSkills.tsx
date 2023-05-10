
import React, { FC } from 'react';
import ProgressBar from '../components/ProgressBar';

const AdditionalSkills: FC = () => {
    return (
        <div>
            <div className="w-[620px]  ">
                <ProgressBar label='English' labelSize={24} percentage={90} classes={"h-100px"} />
            </div>
            <div className="w-[620px]  ">
                <ProgressBar label='Russian' labelSize={24} percentage={60} classes={"h-100px"} />
            </div>
        </div>
    )
}

export default AdditionalSkills;
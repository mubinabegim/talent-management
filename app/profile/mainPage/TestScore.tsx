import React, { FC } from 'react';
import ProgressBar from '../components/ProgressBar';

const TestScore: FC = () => {
    return (
        <div className="w-[620px] mt-4">
            <ProgressBar label='29/30' labelSize={36} percentage={70} classes={"h-100px"} />
        </div>
    )
}

export default TestScore;
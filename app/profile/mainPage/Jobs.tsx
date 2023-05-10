
import React, { FC } from 'react';

const Jobs: FC = () => {
    return (
        <div className='text-start justify-start w-[400px]'>
            <p>Completed - 10</p>
            <p className='my-3'>In progress - 3</p>
            <p>Failed to complete - 0</p>
        </div>
    )
}

export default Jobs;
import { Button } from '@/components';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

const MainPage: FC = () => {

    const router = useRouter()

    return (
        <div className='w-10/12 mx-auto my-24 text-center'>
            <h2 className='text-4xl font-bold'>Upskilling</h2>
            <p className='text-2xl my-6 w-8/12 mx-auto'>Recieve deep analysis of your skills and recommendations from experts for further improvements</p>
            <div className='w-4/12 flex justify-center items-center mx-auto mb-14'>
                <img width={100} src="/images/barChart.jpeg" alt="" />
            </div>
            <Button title='Request an analysis' onClick={() => router.push('/upskilling/request-analysis')} />
        </div>
    )
}

export default MainPage;
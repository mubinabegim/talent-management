import React, { FC } from 'react';
import { Button } from '@/components';
import { homeStyles, profileStyles } from '@/styles';
import Card from '../components/Card';
import AdditionalSkills from './AdditionalSkills';
import Skills from './Skills';
import TestScore from './TestScore';
import Jobs from './Jobs';
import { useRouter } from 'next/router';

const ProfileMainPage: FC = () => {

    const router = useRouter();

    return (
        <div className="mt-20 mb-10">
            <h2 className={homeStyles.secondGradeHeading}>Profile</h2>
            <div className={profileStyles.profileWrapper}>
                <div className='flex items-center gap-3'>
                    <div className={profileStyles.userImg}>
                        <img width="100%" src="/images/user.png" alt="user" />
                    </div>
                    <div>
                        <h2 className='text-3xl mb-3'>Jandos Jandosov</h2>
                        <p>Devops Engineer</p>
                        <p className='my-1'>Master's in IT from ITPU</p>
                        <p>Uzbekistan, Tashkent</p>
                    </div>
                </div>
                <Button title='Edit' classes='py-3 px-20' />
            </div>
            <div className='w-10/12 mx-auto my-3'>
                <div className='flex gap-6'>
                    <Card title='Skills' content={<Skills />} classes="w-1/2" />
                    <Card title='Test score' content={<TestScore />} classes="w-1/2 justify-start" />
                </div>
                <div className='flex gap-6'>
                    <Card title='Additional skills' content={<AdditionalSkills />} classes="w-1/2" />
                    <Card title='Verification' subtitle='Not verified from a test center' btnTitle='Verify' classes="w-1/2" />
                </div>
                <div className='flex gap-4'>
                    <Card title='Jobs' content={<Jobs />} classes="w-1/2 " />
                    <Card title='Experience' subtitle='No experience' btnTitle='Add experience' btnAction="/profile/experience" classes="w-1/2" />
                    <Card title='Courses' btnTitle='Explore' classes="w-1/2" />
                </div>
                <div className='flex gap-4'>
                    <Card title='Language' btnTitle='Add' btnAction="/profile/language" classes="w-1/3 gap-6" />
                    <Card title='Education and courses' btnTitle='Add' btnAction="/profile/education-courses" classes="w-1/3" />
                    <Card onClick={() => router.push("/upskilling")} title='Upskilling' subtitle='No info' classes="w-1/3 hover:bg-slate-200 hover:cursor-pointer" />
                </div>
            </div>
        </div >
    )
}

export default ProfileMainPage;
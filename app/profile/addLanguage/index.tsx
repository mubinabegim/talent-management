import React from 'react';
import { profileStyles, regStyles } from '@/styles'
import { Button, Input } from '@/components';
import { BsPlusCircle } from 'react-icons/bs';

const AddLanguage = () => {

    return (
        <div className="w-10/12 mx-auto mt-20 mb-6">
            <h2 className='text-3xl mb-3'>Add language</h2>
            <div className='border-2 border-indigo-700 rounded-xl py-6 px-12 w-full'>
                <Input label="Choose a language" inputWidth="w-full py-2" />
                <div className='mt-5'>
                    <p className={regStyles.inputLabel}>Level</p>
                    <div className='flex gap-14 justify-center items-end my-2'>
                        <button className={profileStyles.levelBtn}>Beginner</button>
                        <button className={profileStyles.levelBtn}>Moderate</button>
                        <button className={profileStyles.thirdLevelBtn}>Good</button>
                        <button className={profileStyles.levelBtn}>Very good</button>
                        <button className={profileStyles.levelBtn}>Fluent</button>
                    </div>
                </div>
            </div>
            <button className='flex gap-3 border-2 border-indigo-700 rounded-xl p-2 mt-6 hover:bg-indigo-700 hover:text-white'>
                <BsPlusCircle className='text-2xl' />
                Add language certificate
            </button>
            <button className='flex gap-3 border-2 border-indigo-700 rounded-xl p-2 mt-6 hover:bg-indigo-700 hover:text-white'>
                <BsPlusCircle className='text-2xl' />
                Add language
            </button>
            <div className='flex justify-center mt-8'>
                <Button title='Done' />
            </div>
        </div >
    )
}

export default AddLanguage;
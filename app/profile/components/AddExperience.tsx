import { Button, Input } from '@/components';
import SelectOption from '@/components/select';
import { profileStyles, regStyles } from '@/styles';
import React, { FC } from 'react'
import { BiTrash } from 'react-icons/bi'
import { FiCheck } from 'react-icons/fi'
import { BsPlusCircle } from 'react-icons/bs'

interface ICard {
    title?: string;
    labels?: { [index: string]: string };
    classes?: string;
    onClick?: () => void;
}

const ExperiencePage: FC<ICard> = ({ title, labels, classes }) => {


    const startYear = [
        { label: "Year", value: "year" },
        { label: "2015", value: "2015" },
        { label: "2016", value: "2016" },
        { label: "2017", value: "2017" },
        { label: "2018", value: "2018" },
        { label: "2019", value: "2019" }
    ]
    const startMonth = [
        { label: "Month", value: "Month" },
        { label: "January", value: "January" },
        { label: "Febraury", value: "Febraury" },
        { label: "March", value: "March" },
        { label: "April", value: "April" },
        { label: "May", value: "May" },
        { label: "June", value: "June" },
        { label: "July", value: "July" },
        { label: "August", value: "August" },
        { label: "September", value: "September" },
        { label: "October", value: "October" },
        { label: "November", value: "November" },
        { label: "December", value: "December" }
    ];

    return (
        <div className={`${classes} mt-20 mb-6 w-full`}>
            <h2 className='text-3xl mb-3'>{title}</h2>
            <div className='border-2 border-indigo-700 rounded-xl py-6 px-12 w-full'>
                <Input label={labels?.firstLabel} inputWidth="w-full py-2" />
                <div className='flex gap-8 w-full mt-3'>
                    <Input label={labels?.secondLabel} wrapperWidth="w-full" inputWidth="w-full py-2" />
                    <Input label={labels?.thirdLabel} wrapperWidth="w-full" inputWidth="w-full py-2" />
                </div>
                {labels?.fourthLabel &&
                    <div className='mt-3'>
                        <Input label={labels?.fourthLabel} inputWidth="w-full py-2" />
                    </div>
                }
                <div className='flex gap-8'>
                    <div className='flex gap-4 w-full mt-3'>
                        <SelectOption label='Start date' options={startYear} />
                        <div className='mt-5'>
                            <SelectOption options={startMonth} />
                        </div>
                    </div>
                    <div className='flex gap-4 w-full mt-3'>
                        <SelectOption label='End date' options={startYear} />
                        <div className='mt-5'>
                            <SelectOption options={startMonth} />
                        </div>
                    </div>
                </div>
                <div className='w-full mt-4'>
                    <label className={regStyles.inputLabel} htmlFor="description">Description</label>
                    <textarea className={`${regStyles.input} w-full`} id="description" cols={25} rows={10}></textarea>
                </div>
                <div className='flex justify-end '>
                    <button className='hover:bg-slate-200 p-2 rounded-full'><BiTrash className='text-4xl' /></button>
                    <button className='hover:bg-slate-200 p-2 rounded-full'><FiCheck className='text-4xl' /></button>
                </div>
            </div>
            <button className='flex gap-3 border-2 border-indigo-700 rounded-xl p-2 mt-6 hover:bg-indigo-700 hover:text-white'>
                <BsPlusCircle className='text-2xl' />
                Add employment
            </button>
            <div className='flex justify-center mt-8'>
                <Button title='Done' />
            </div>
        </div>
    )
}

export default ExperiencePage; 

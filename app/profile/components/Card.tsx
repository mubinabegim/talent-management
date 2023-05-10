import { Button } from '@/components';
import { profileStyles } from '@/styles';
import { useRouter } from 'next/router';
import React, { FC } from 'react'

interface ICard {
    title?: string;
    subtitle?: string;
    classes?: string;
    content?: any;
    btnTitle?: string;
    btnAction?: string;
    onClick?: () => void;
}

const Card: FC<ICard> = ({ title, subtitle, content, btnTitle, btnAction, classes, onClick }) => {
    const router = useRouter();
    return (
        <div onClick={onClick} className={`${profileStyles.cardWrapper} ${classes} `}>
            <h2 className='text-3xl mb-3'>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
            {btnTitle &&
                <div>
                    <Button onClick={() => router.push(`${btnAction}`)} title={btnTitle} />
                </div>
            }
            <div>{content}</div>
        </div>
    )
}

export default Card; 

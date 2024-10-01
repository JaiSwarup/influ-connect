import clsx from 'clsx';
import { useState } from 'react';

type Props = {
    img: string;
    title: string;
    description: string;
    buttonText: string;
    isSelected: boolean;
    onClick: (title:string) => void;
};

function Role({ img, title, description, buttonText, isSelected, onClick }: Props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <div className='w-full cursor-pointer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={clsx('bg-white shadow-lg rounded-xl flex flex-col items-center pb-4 gap-4 overflow-hidden grayscale transition-colors relative', {
                'border-blue-500 grayscale-0': isSelected,
                'border-gray-200 grayscale-0': isHovered
            })}>
                <div className='w-full h-80 overflow-hidden'>
                    <img src={img} alt={title} className={clsx('w-full place-self-center h-80 object-cover object-top transition-transform duration-1000', {
                        'scale-110': isHovered && !isSelected,
                        'scale-125': isSelected
                    })} />
                </div>
                <h2 className='text-4xl font-bold text-center'>{title}</h2>
                <p className='text-gray-600 text-center'>{description}</p>
                {/* <div>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 transition-colors duration-200' onClick={() => onClick(title)}>{buttonText}</button>
                </div> */}
                {isHovered && !isSelected && <div className={clsx('absolute w-full h-full bg-black/50 top-0 left-0 flex items-center justify-center transition-colors duration-1000',
                )} onClick={() => onClick(title)}>
                    <p className='text-white font-medium text-2xl'>{buttonText}</p>
                </div>}
            </div>
        </div>
    );
}

export default Role;

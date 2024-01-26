import React from 'react';
import Typewriter from 'typewriter-effect';
import proj from '../assets/portfolio/proj6.png';
import { GiCrossMark } from "react-icons/gi";

const ModalComponent = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div onClick={onClose}  className='overlay fixed top-0 left-0 w-full h-full flex items-center justify-center'>
            <div onClick={(e) => {e.stopPropagation()}} 
                className='modalContainer bg-gradient-to-b from-gray-200 to-gray-800 w-full max-w-lg mx-auto p-4 rounded-lg relative'>
                <img src={proj} alt='/' className='w-full h-40 object-cover rounded-t-lg mb-4' />
                <div className='modalRight'>
                    <p onClick={onClose} className='closeBtn bg-green-500 p-2 absolute top-5 right-5 cursor-pointer rounded-md '>
                        <GiCrossMark />
                    </p>
                    <div className='content flex flex-col items-center justify-center mb-4'>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Visuals are Coming Soon...').start();
                            }}
                        />
                    </div>
                    <div className='btnContainer flex items-center justify-center'>
                        <button onClick={onClose} className='btnPrimary'>
                            <span className='font-bold bg-green-500 shadow-md p-2 rounded-md'>I'll Be Back</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalComponent;

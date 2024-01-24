

import React from 'react'
import MeProfile from '../assets/meProfile.jpg'
import { LuArrowRightSquare } from "react-icons/lu";
import { Link } from 'react-scroll'

function Home() {
    
    return (
        <div name='home' className='h-screen w-full '>

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold '>
                        I am an aspiring Full Stack Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                    For 9 years, I've immersed myself in software exploration. 
                    Currently, I am focused on mastering every facet of full-stack development, 
                    with a primary emphasis on backend expertise.
                    </p>

                    <div>
                        <Link to='portfolio' smooth duration={500} className='group  w-fit px-6 py-3 my-2 flex items-center rounded-md 
                        cursor-pointer border-2 border-green-500'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <LuArrowRightSquare size={25} className='ml-4' />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={MeProfile} alt="my profile" className='rounded-2xl mx-auto w2/3 md:w-full' />
                </div>
            </div>
        </div>    
    );
};

            export default Home

import React from 'react'
import MeProfile from '../assets/meProfile.jpg'
import { LuArrowRightSquare } from "react-icons/lu";

function Home() {
    return (
        <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            {/* <img src={MeProfile} alt=''/> */}

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I am an aspiring Full Stack Developer
                    </h2>
                    <p className='text-gray-500 py-4 maxw--md'>
                        In the pursuit of my undergraduate degree,
                        I dedicated nearly 80 hours a week to work,
                        displaying unwavering commitment. Remarkably,
                        I emerged from undergrad without any debt,
                        showcasing financial acumen. Recognizing the
                        need to enhance my skill set, I enrolled in
                        a full-stack bootcamp, demonstrating a proactive
                        approach to self-improvement.

                        Lacking a career coach, I navigate my professional
                        path independently, occasionally facing challenges
                        due to a lack of guidance. However, I am resilient
                        and believe that my success story will illuminate
                        a path for aspiring individuals in my community.

                        As a future software engineer, I aim to become a
                        role model for those who lack mentors, contributing
                        to the growth and inspiration of
                        young talents in our community.
                    </p>

                    <div>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
                        bg-gradient-to-r '>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <LuArrowRightSquare size={25} className='ml-4' />
                            </span>
                        </button>
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
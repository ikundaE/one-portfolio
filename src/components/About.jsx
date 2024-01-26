import React from 'react'
import Typewriter from 'typewriter-effect';

function About() {
    
    return (
        <div name='about' className='w-full h-screen sm:mt-10'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full '>
                <div className='pb-8'>
                <div className='relative inline-block'>
                            <p className='text-4xl font-bold inline border-b-4'>
                                <Typewriter 
                                    onInit ={(typewriter) => {
                                        typewriter
                                        .typeString('About')
                                        .pauseFor(7000)
                                        .deleteAll()
                                        .typeString('About')
                                        .start();
                                            }}
                                        options={{
                                            cursor: '>_'
                                        }}
                                />
                            </p>
                            <span className='border-b-4 border-gray-500 absolute left-0 w-full'></span>
                        </div>
                </div>
                <p className='text-xl mt-20'>
                    In the pursuit of my undergraduate degree,
                    I dedicated nearly 80 hours a week to work,
                    displaying unwavering commitment. Remarkably,
                    I emerged from undergrad without any debt,
                    showcasing financial acumen. Recognizing the
                    need to enhance my skill set, I enrolled in
                    a full-stack bootcamp, demonstrating a proactive
                    approach to self-improvement.
                </p>
                <br />

                <p className='text-xl '>
                    Lacking a career coach, I navigate my professional
                    path independently, occasionally facing challenges
                    due to a lack of guidance. However, I am resilient
                    and believe that my success story will illuminate
                    a path for aspiring individuals in my community.
                </p>
                <br />

                <p className='text-xl'>
                    As a future software engineer, I aim to become a
                    role model for those who lack mentors, contributing
                    to the growth and inspiration of
                    young talents in our community.
                </p>
            </div>
        </div>
    )
}

export default About
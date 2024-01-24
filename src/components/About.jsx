import React from 'react'

function About() {
    return (
        <div name='about' className='w-full h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
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

                <p className='text-xl'>
                    Lacking a career coach, I navigate my professional
                    path independently, occasionally facing challenges
                    due to a lack of guidance. However, I am resilient
                    and believe that my success story will illuminate
                    a path for aspiring individuals in my community.
                </p>
            </div>
        </div>
    )
}

export default About
import React from 'react'

function About() {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>
                <p className='text-xl mt-20'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Voluptatum eaque, itaque fugit est consequuntur quos, d
                    olorem laborum ut reprehenderit exercitationem eveniet sequi 
                    facilis blanditiis? Tenetur explicabo vitae dolor quae incidunt.
                </p>

                <br />

                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    At, dignissimos ea aut dolores perferendis corrupti eius 
                    consequuntur doloribus expedita saepe et animi qui illo c
                    upiditate voluptatum modi distinctio sapiente cum!
                </p>
            </div>
        </div>
    )
}

export default About
import React, { useState } from 'react';
import jeopardy from '../assets/portfolio/jeopardy.png'
import mp3 from '../assets/portfolio/mp3-player.png'
import solar from '../assets/portfolio/solar_sys.png'
import ur from '../assets/portfolio/ur-wlcm.png'
import zork from '../assets/portfolio/zork.png'
import ModalComponent from './ModalComponent';
import Typewriter from 'typewriter-effect';

function Portfolio() {
    const [modalIsOpen, setModalIsOpen] = useState (false);

    const body_of_Work = [
        {
            id: 1,
            src: jeopardy,
            repoLink:'https://github.com/burlingtoncodeacademy-students/jeopardy-board-ikundaE-1'
        },
        {
            id: 2,
            src: mp3,
            repoLink:'https://github.com/ikundaE/jemp3_gui'
        },
        {
            id: 3,
            src: solar,
            repoLink:'https://github.com/ikundaE/solar_sys'
        },
        {
            id: 4,
            src: ur,
            repoLink:'https://github.com/ikundaE/yourewelcomepottery-client'
        },
        {
            id: 5,
            src: zork,
            repoLink:'https://github.com/burlingtoncodeacademy-students/zorkington-ikundaE'
        },
        
    ]
    return (

            <div name='portfolio' className='w-full md:h-screen ' >
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                    <div name='title' className=''>
                        <div className='relative inline-block'>
                            <p className='text-4xl font-bold inline '>
                                <Typewriter 
                                    onInit ={(typewriter) => {
                                        typewriter
                                            .typeString('Portfolio')
                                            .pauseFor(10000)
                                            .deleteAll()
                                            .typeString('Portfolio')
                                            .start();
                                            }}
                                        options={{
                                            cursor: '>_'
                                        }}
                                />
                            </p>
                            <span className='border-b-4 border-gray-500 absolute left-0 w-full'></span>
                        </div>
                        <p className='py-6'> Below is my previous work.</p>
                    </div>

                    <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                        {body_of_Work.map(({ id, src, repoLink }) => (
                            <div key={id} className='shadow-md shadow-green-500 rounded-lg'>
                                <img src={src} alt="" />
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125' onClick={() => setModalIsOpen(true)}>
                                        Visual
                                    </button>
                                    <a href={repoLink} target='_blank' rel='noreferrer'>
                                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125'>
                                            Repo
                                        </button>
                                    </a>
                                    
                                </div>
                            </div>
                        ))}
                        
                    </div>
                    
                </div>
                <ModalComponent open={modalIsOpen} onClose={()=> setModalIsOpen(false)}/>
            </div>
        
    ) 
}

export default Portfolio
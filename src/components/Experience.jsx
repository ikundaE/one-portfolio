import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import javaImage from '../assets/java.png'
import cImage from '../assets/c.png'
import assembly from '../assets/assembly.png'
import mongodb from '../assets/mongodb.png'
import stripeImage from '../assets/stripe.png'
import pythonImage from '../assets/python.png'
import restImage from '../assets/rest.png'
import Typewriter from 'typewriter-effect'

function Experience() {

    const exp = [
    {
        id:1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500'
    },
    {
        id:2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500'
    },
    {
        id:3,
        src: javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-500'
    },
    {
        id:4,
        src: reactImage,
        title: 'React',
        style: 'shadow-blue-600'
    },
    {
        id:5,
        src: github,
        title: 'Github',
        style: 'shadow-gray-100'
    },
    {
        id:6,
        src: tailwind,
        title: 'Tailwind',
        style: 'shadow-sky-400'
    },
    {
        id:7,
        src: javaImage,
        title: 'Java',
        style: 'shadow-deep-purple-700-accent'
    },
    {
        id:8,
        src: cImage,
        title: 'C',
        style: 'shadow-indigo-600'
    },
    {
        id:9,
        src: assembly,
        title: 'Assembly',
        style: 'shadow-indigo-300'
    },
    {
        id:10,
        src: mongodb,
        title: 'MongoDB',
        style: 'shadow-green-800'
    },
    {
        id:11,
        src: stripeImage,
        title: 'Stripe',
        style: 'shadow-purple-800'
    },
    {
        id:12,
        src: pythonImage,
        title: 'Python',
        style: 'shadow-yellow-700'
    },
    {
        id:13,
        src: restImage,
        title: 'REST API',
        style: 'shadow-gray-900'
    },
    
    ];
    
    return (
        <div name='experience' className=' w-full '>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full '>
                <div>
                <div className='relative inline-block'>
                        <p className='text-4xl font-bold inline border-b-4 '>
                            <Typewriter 
                                onInit ={(typewriter) => {
                                    typewriter
                                        .typeString('Experience')
                                        .pauseFor(12000)
                                        .deleteAll()
                                        .typeString('Experience')
                                        .start();
                                        }}
                                    options={{
                                        cursor: '>_'
                                    }}
                            />
                        </p>
                        <span className='border-b-4 border-gray-500 absolute left-0 w-full'></span>
                    </div>
                    <p className='py-6'>
                        These are the technologies that I have worked with
                    </p>
                </div>
            

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
                    {exp.map(({id, src, title, style})=>(
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt=""  className='w-20 mx-auto'/>
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Experience;
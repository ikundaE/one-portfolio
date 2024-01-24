import React from 'react'

function Contact() {
    return (
        <div name='contact'
        className='w-full h-screen p-4 '>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Please submit to reach out</p>
                </div>

                <div className='flex justify-center items-center' >
                    <form action="https://getform.io/f/7a0f27a1-a8eb-4130-a87f-dac48d562192"
                    method='POST' 
                    className='flex flex-col w-full md:w-1/2'>
                        <input 
                            type="text" 
                            name='name' 
                            placeholder='Enter your Name' 
                            className='p-2 bg-transparent border-2 rounded-md  focus:outline-none' />

                            <input 
                            type="text" 
                            name='Email' 
                            placeholder='Enter your Email' 
                            className='my-4 p-2 bg-transparent border-2 rounded-md  focus:outline-none' />

                            <textarea 
                            name="message" 
                            rows='10'
                            placeholder='Please type your message' 
                            className='p-2 bg-transparent border-2 rounded-md  focus:outline-none'
                            ></textarea>

                            <button
                            className=' bg-gradient-to-b from-cyan-500 to-green-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                                Engage chat
                            </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
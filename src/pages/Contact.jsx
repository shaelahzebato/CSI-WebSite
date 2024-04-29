import { faMessage, faMobilePhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Contact() {
    //  transition duration-500 ease-in-out hover:text-cyan-800 transform hover:-translate-y-1 shadow-[0_0_12px_rgba(0,0,0,0.2)]

    return (
        <section className="contact py-10 lg:py-20" id='contact'>
            <div className="container mx-auto">
                <div className="w-full lg:w-4/6 mx-auto flex flex-col gap-4 mt-20 lg:mt-28 p-10 bg-white rounded-md shadow-[0_0_12px_rgba(0,0,0,0.2)]">
                    <h2 className="text-2xl lg:text-4xl text-center">Contactez-nous</h2>
                    <div className="w-full h-[2px] bg-cyan-700"></div>
                    <form className="grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr] gap-10">
                        <div className="flex flex-col gap-8">
                            <div className="">
                                <label htmlFor="" className='text-lg'>Votre prénom</label>
                                <div className="border flex items-center gap-2 p-2 rounded-md bg-white">
                                    <FontAwesomeIcon icon={faUser} className='text-cyan-700'/>
                                    <input type="text" className='w-full focus:outline-none'/>
                                </div>
                            </div>
                            <div className="">
                                <label htmlFor="" className='text-lg'>Votre adresse email</label>
                                <div className="border flex items-center gap-2 p-2 rounded-md bg-white">
                                    <FontAwesomeIcon icon={faMessage} className='text-cyan-700'/>
                                    <input type="text" className='w-full focus:outline-none'/>
                                </div>
                            </div>
                            <div className="">
                                <label htmlFor="" className='text-lg'>Votre téléphone</label>
                                <div className="border flex items-center gap-2 p-2 rounded-md bg-white">
                                    <FontAwesomeIcon icon={faMobilePhone} className='text-cyan-700'/>
                                    <input type="text" className='w-full focus:outline-none'/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <label htmlFor="" className='text-lg'>Message</label>
                            <textarea rows="8"
                            className="peer bg-white h-full min-h-[100px] w-full !resize-none rounded-md border border-cyan-gray-200 px-3 py-2.5 text-sm font-normal text-cyan-gray-700 transition-all placeholder-shown:border placeholder-shown:border-cyan-gray-200 placeholder-shown:border-t-cyan-gray-200 focus:border-2 focus:border-cyan-700 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-cyan-gray-50"
                            placeholder='Entrez votre message ici...'></textarea>
                        </div>
                    </form>
                    <div className=" flex justify-center mt-10">
                        <button className='bg-cyan-700 text-white py-2 px-4 rounded-md'>Envoyer le message</button>
                    </div>
                </div>
            </div>
        </section>
    )
    // cols="38" rows="9"
}

export default Contact
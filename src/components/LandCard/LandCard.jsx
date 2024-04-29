import { faArrowTurnDown, faCalendarWeek, faDirections } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

import land1 from '../../images/info8.png'
import land2 from '../../images/info22.png'
import land3 from '../../images/info23.png'
import land4 from '../../images/info13.png'
import land5 from '../../images/info24.png'
import land6 from '../../images/info23.png'

function LandCard() {
    return (
        <section className="land-card py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-0">
                <h2 className='text-center text-2xl lg:text-3xl font-semibold'>Maison et terre à vendre.</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
                    <div className="flex flex-col gap-4 border bg-white rounded-md p-2">
                        <img src={land1} alt="" className='rounded-md' />
                        <div className="flex flex-col gap-4 p-4">
                            <div className='flex items-center gap-2 text-lg text-gray-700'>
                                <FontAwesomeIcon icon={faCalendarWeek}/>
                                <span className='text-sm lg:text-lg'>12 Avril 2024</span>
                            </div>
                            <h2 className='text-xl lg:text-2xl font-semibold'>Lorem, ipsum dolor.</h2>
                            <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aperiam distinctio a. Tenetur corporis dignissimos similique optio veniam, aut eius?</p>
                            <span className='text-xl text-red-600'>383 000 €</span>
                            <Link className='italic text-blue-600'>Continuer <FontAwesomeIcon icon={faArrowTurnDown}/></Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 border bg-white rounded-md p-2">
                        <img src={land2} alt="" className='rounded-md' />
                        <div className="flex flex-col gap-4 p-4">
                            <div className='flex items-center gap-2 text-lg text-gray-700'>
                                <FontAwesomeIcon icon={faCalendarWeek}/>
                                <span className='text-sm lg:text-lg'>12 Avril 2024</span>
                            </div>
                            <h2 className='text-xl lg:text-2xl font-semibold'>Lorem, ipsum dolor.</h2>
                            <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aperiam distinctio a. Tenetur corporis dignissimos similique optio veniam, aut eius?</p>
                            <span className='text-xl text-red-600'>383 000 €</span>
                            <Link className='italic text-blue-600'>Continuer <FontAwesomeIcon icon={faArrowTurnDown}/></Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 border bg-white rounded-md p-2">
                        <img src={land3} alt="" className='rounded-md' />
                        <div className="flex flex-col gap-4 p-4">
                            <div className='flex items-center gap-2 text-lg text-gray-700'>
                                <FontAwesomeIcon icon={faCalendarWeek}/>
                                <span className='text-sm lg:text-lg'>12 Avril 2024</span>
                            </div>
                            <h2 className='text-xl lg:text-2xl font-semibold'>Lorem, ipsum dolor.</h2>
                            <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aperiam distinctio a. Tenetur corporis dignissimos similique optio veniam, aut eius?</p>
                            <span className='text-xl text-red-600'>383 000 €</span>
                            <Link className='italic text-blue-600'>Continuer <FontAwesomeIcon icon={faArrowTurnDown}/></Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 border bg-white rounded-md p-2">
                        <img src={land4} alt="" className='rounded-md' />
                        <div className="flex flex-col gap-4 p-4">
                            <div className='flex items-center gap-2 text-lg text-gray-700'>
                                <FontAwesomeIcon icon={faCalendarWeek}/>
                                <span className='text-sm lg:text-lg'>12 Avril 2024</span>
                            </div>
                            <h2 className='text-xl lg:text-2xl font-semibold'>Lorem, ipsum dolor.</h2>
                            <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aperiam distinctio a. Tenetur corporis dignissimos similique optio veniam, aut eius?</p>
                            <span className='text-xl text-red-600'>383 000 €</span>
                            <Link className='italic text-blue-600'>Continuer <FontAwesomeIcon icon={faArrowTurnDown}/></Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 border bg-white rounded-md p-2">
                        <img src={land5} alt="" className='rounded-md' />
                        <div className="flex flex-col gap-4 p-4">
                            <div className='flex items-center gap-2 text-lg text-gray-700'>
                                <FontAwesomeIcon icon={faCalendarWeek}/>
                                <span className='text-sm lg:text-lg'>12 Avril 2024</span>
                            </div>
                            <h2 className='text-xl lg:text-2xl font-semibold'>Lorem, ipsum dolor.</h2>
                            <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aperiam distinctio a. Tenetur corporis dignissimos similique optio veniam, aut eius?</p>
                            <span className='text-xl text-red-600'>383 000 €</span>
                            <Link className='italic text-blue-600'>Continuer <FontAwesomeIcon icon={faArrowTurnDown}/></Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 border bg-white rounded-md p-2">
                        <img src={land6} alt="" className='rounded-md' />
                        <div className="flex flex-col gap-4 p-4">
                            <div className='flex items-center gap-2 text-lg text-gray-700'>
                                <FontAwesomeIcon icon={faCalendarWeek}/>
                                <span className='text-sm lg:text-lg'>12 Avril 2024</span>
                            </div>
                            <h2 className='text-xl lg:text-2xl font-semibold'>Lorem, ipsum dolor.</h2>
                            <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aperiam distinctio a. Tenetur corporis dignissimos similique optio veniam, aut eius?</p>
                            <span className='text-xl text-red-600'>383 000 €</span>
                            <Link className='italic text-blue-600'>Continuer <FontAwesomeIcon icon={faArrowTurnDown}/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandCard
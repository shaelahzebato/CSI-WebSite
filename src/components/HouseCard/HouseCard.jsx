import React from 'react'
import home1 from '../../images/info28.png'
import home2 from '../../images/info34.png'
import home3 from '../../images/info36.png'
import home4 from '../../images/info31.png'
import home5 from '../../images/info32.png'
import home6 from '../../images/info29.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faMap, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'

function HouseCard() {
    return (
        <section className="house-card py-20 bg-blue-100">
            <div className="container mx-auto px-4 lg:px-0">
                <h2 className='text-center text-2xl lg:text-3xl font-semibold'>Maison, et Résidence à louer.</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                    <div className="flex flex-col lg:flex-row gap-4 border bg-white rounded-md">
                        <div className="">
                            <img src={home1} alt="" className='w-full md:w-full lg:w-80 h-56'/>
                        </div>
                        <div className="p-4">
                            <h2>Lorem, ipsum dolor.</h2>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <small>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                    </small>
                                    <span>15€</span>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, officia!</p>
                                <div className='flex justify-between'>
                                    <span><FontAwesomeIcon icon={faMapLocationDot}/></span>
                                    <button className='bg-blue-500 text-white p-2'>Voir plus</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 border bg-white rounded-md">
                        <div className="">
                            <img src={home2} alt="" className='w-full md:w-full lg:w-80 h-56'/>
                        </div>
                        <div className="p-4">
                            <h2>Lorem, ipsum dolor.</h2>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <small>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                    </small>
                                    <span>15€</span>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, officia!</p>
                                <div className='flex justify-between'>
                                    <span><FontAwesomeIcon icon={faMapLocationDot}/></span>
                                    <button className='bg-blue-500 text-white p-2'>Voir plus</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 border bg-white rounded-md">
                        <div className="">
                            <img src={home3} alt="" className='w-full md:w-full lg:w-80 h-56'/>
                        </div>
                        <div className="p-4">
                            <h2>Lorem, ipsum dolor.</h2>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <small>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                    </small>
                                    <span>15€</span>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, officia!</p>
                                <div className='flex justify-between'>
                                    <span><FontAwesomeIcon icon={faMapLocationDot}/></span>
                                    <button className='bg-blue-500 text-white p-2'>Voir plus</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 border bg-white rounded-md">
                        <div className="">
                            <img src={home4} alt="" className='w-full md:w-full lg:w-80 h-56'/>
                        </div>
                        <div className="p-4">
                            <h2>Lorem, ipsum dolor.</h2>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <small>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                    </small>
                                    <span>15€</span>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, officia!</p>
                                <div className='flex justify-between'>
                                    <span><FontAwesomeIcon icon={faMapLocationDot}/></span>
                                    <button className='bg-blue-500 text-white p-2'>Voir plus</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 border bg-white rounded-md">
                        <div className="">
                            <img src={home5} alt="" className='w-full md:w-full lg:w-80 h-56'/>
                        </div>
                        <div className="p-4">
                            <h2>Lorem, ipsum dolor.</h2>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <small>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                    </small>
                                    <span>15€</span>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, officia!</p>
                                <div className='flex justify-between'>
                                    <span><FontAwesomeIcon icon={faMapLocationDot}/></span>
                                    <button className='bg-blue-500 text-white p-2'>Voir plus</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 border bg-white rounded-md">
                        <div className="">
                            <img src={home6} alt="" className='w-full md:w-full lg:w-80 h-56'/>
                        </div>
                        <div className="p-4">
                            <h2>Lorem, ipsum dolor.</h2>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <small>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                    </small>
                                    <span>15€</span>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, officia!</p>
                                <div className='flex justify-between'>
                                    <span><FontAwesomeIcon icon={faMapLocationDot}/></span>
                                    <button className='bg-blue-500 text-white p-2'>Voir plus</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HouseCard
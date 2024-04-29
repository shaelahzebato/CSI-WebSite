import { faHandshake, faNewspaper, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function BuyingProcess() {
    return (
        <section className='buying-process py-10'>
            <div className="container mx-auto">
                <div className="flex flex-col px-4 lg:px-0">
                    <div className="w-full lg:w-4/6 mx-auto flex flex-col items-center gap-4 py-10">
                        <h2 className='text-3xl text-center lg:text-5xl'>Comment ça fonctionne ?</h2>
                        <p className='text-center text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi harum voluptatem qui non laudantium sunt delectus, possimus illo sapiente voluptates id exercitationem nulla eius suscipit modi magni! Voluptate, excepturi soluta?</p>
                    </div>
                    <div className="grid grid-cols-[1fr] lg:grid-cols-3 gap-10 items-center py-10">
                        <div className="flex flex-col items-center gap-2">
                            <div className='text-6xl text-red-400'>
                                <FontAwesomeIcon icon={faNewspaper} className=''/>
                            </div>
                            <h2 className='text-xl font-bold'>Évaluer La Propriété</h2>
                            <p className='text-center'>Il existe de nombreuses variantes de passages du Lorem Ipsum disponibles, mais la majorité ont Ipsum disponible.</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className='text-6xl text-blue-400'>
                                <FontAwesomeIcon icon={faUserFriends} className=''/>
                            </span>
                            <h2 className='text-xl font-bold'>Rencontrez Votre Agent</h2>
                            <p className='text-center'>Il existe de nombreuses variantes de passages du Lorem Ipsum disponibles, mais la majorité ont Ipsum disponible.</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className='text-6xl text-green-400'>
                                <FontAwesomeIcon icon={faHandshake} className=''/>
                            </span>
                            <h2 className='text-xl font-bold'>Conclure L'affaire</h2>
                            <p className='text-center'>Il existe de nombreuses variantes de passages du Lorem Ipsum disponibles, mais la majorité ont Ipsum disponible.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BuyingProcess
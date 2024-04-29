import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function Carousel({slides}) {
    
    let [current, setCurrent] = useState()

    let previousSlide = () => {
        if(current === 0) {
            setCurrent(slides.length - 1)
        }
        else {
            setCurrent(current - 1)
        }
    }

    let nextSlide = () => {
        if(current === slides.length - 1) {
            setCurrent(0)
        }
        else {
            setCurrent(current + 1)
        }
    }

    return (
        <div className="overflow-hidden relative">
            <div className="flex transition ease-out duration-300">
                {slides.map((s,i) => {
                    return <img key={i} src={s} alt="" />
                })}
            </div>
            <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl">
                <button onClick={(previousSlide)}><FontAwesomeIcon icon={faArrowAltCircleLeft}/></button>
                <button onClick={(nextSlide)}><FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
            </div>
        </div>
    )
}

export default Carousel
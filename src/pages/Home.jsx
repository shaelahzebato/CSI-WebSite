import React, { useEffect, useState } from 'react'
import SlideShow from '../components/SlideShow/SlideShow'
import HouseCard from '../components/HouseCard/HouseCard'
import LandCard from '../components/LandCard/LandCard'
import BuyingProcess from '../components/BuyingProcess/BuyingProcess'
import Carousel from '../components/SlideShow/Carousel'
import p1 from '../images/info1.png' //'../images/photo-1.avif'
import p2 from '../images/info2.png' //'../images/photo-2.avif'
import p3 from '../images/info3.png' //'../images/photo-3.avif'
import p4 from '../images/info4.png' //'../images/photo-4.avif'
import p5 from '../images/info5.png' //'../images/photo-5.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

function Home() {

    const slides = [
        {
            url : p1
        },
        {
            url : p2
        },
        {
            url : p3
        },
        {
            url : p4
        },
        {
            url : p5
        }
        // p2, 
        // p3, 
        // p4, 
        // p5
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
    }
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
    }

    useEffect(() => {
        const autoPlay = setInterval(() => {
            nextSlide()
        }, 3000);

        return () => clearInterval(autoPlay)
    }, [currentIndex])

    const Arrow = ({direction, click}) => (
        <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[50%] text-2xl rounded-full p-2 text-white cursor-pointer" style={{[direction]:"20px"}}>
            {
                direction === 'left' ? (<FontAwesomeIcon onClick={click} size={24} icon={faAngleLeft}/>) : (<FontAwesomeIcon onClick={click} size={24} icon={faAngleRight}/>)
            }
        </div>
    )

    return (
        <>
            {/* <SlideShow/> */}
            {/* <div className="w-[60%] mx-auto pt-11">
                <Carousel slides={slides}/>
            </div> */}
            <div className="h-[360px] md:h-[500px] lg:h-[780px] w-full m-auto py-16 relative group">
                <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className="w-full h-full bg-center bg-cover duration-500"></div>
                <Arrow direction="left" onClick={prevSlide}/>
                <Arrow direction="right" onClick={nextSlide}/>
            </div>
            <div className="home-page">
                <BuyingProcess/>
                {/* <div className="container mx-auto">
                    <div className="grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr_1fr] gap-10">
                        <div className="bg-pink-600 p-6 flex flex-col items-center gap-8">
                            <h2 className='p-4 rounded-full bg-white h-24 w-24 text-center'>CSI</h2>
                            <p className='leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsa aperiam consequatur possimus non nihil velit consequuntur nostrum amet. Facilis temporibus veritatis asperiores quae, officiis suscipit. Dignissimos, dolorem? Asperiores, aliquid!</p>
                        </div>
                        <div className="bg-orange-600 p-6 flex flex-col items-center gap-8">
                            <h2 className='p-4 rounded-full bg-white h-24 w-24 text-center'>CSI</h2>
                            <p className='leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsa aperiam consequatur possimus non nihil velit consequuntur nostrum amet. Facilis temporibus veritatis asperiores quae, officiis suscipit. Dignissimos, dolorem? Asperiores, aliquid!</p>
                        </div>
                        <div className="bg-sky-400 p-6 flex flex-col items-center gap-8">
                            <h2 className='p-4 rounded-full bg-white h-24 w-24 text-center'>CSI</h2>
                            <p className='leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsa aperiam consequatur possimus non nihil velit consequuntur nostrum amet. Facilis temporibus veritatis asperiores quae, officiis suscipit. Dignissimos, dolorem? Asperiores, aliquid!</p>
                        </div>
                    </div>
                </div> */}

                {/* <div className='mt-20 flex flex-col gap-28'>
                    <div className="" id="services">
                        <h2 className='text-6xl text-orange-600'>Services</h2>
                        <p className='leading-loose'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita consequatur, distinctio accusantium dolorum debitis numquam facilis rerum perspiciatis quas praesentium ullam, ex cumque harum iusto dicta temporibus animi quod? Nesciunt a quisquam officia magni deleniti quidem consequatur, quibusdam distinctio iure rerum qui ab eveniet est! Delectus reprehenderit culpa laboriosam maiores ipsa quis labore deserunt ut. Temporibus incidunt molestias ratione tempore expedita suscipit? Voluptatum recusandae doloribus vel nihil eveniet? Architecto nisi aspernatur consequatur, vitae omnis placeat perspiciatis temporibus iusto nemo nobis illo earum labore, fugiat enim ipsa facere culpa, rem recusandae tempore laboriosam sed quas? Voluptatibus neque ipsum praesentium consectetur totam?</p>
                    </div>
                    <div className="" id="projects">
                        <h2 className='text-6xl text-pink-700'>Projets</h2>
                        <p className='leading-loose'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita consequatur, distinctio accusantium dolorum debitis numquam facilis rerum perspiciatis quas praesentium ullam, ex cumque harum iusto dicta temporibus animi quod? Nesciunt a quisquam officia magni deleniti quidem consequatur, quibusdam distinctio iure rerum qui ab eveniet est! Delectus reprehenderit culpa laboriosam maiores ipsa quis labore deserunt ut. Temporibus incidunt molestias ratione tempore expedita suscipit? Voluptatum recusandae doloribus vel nihil eveniet? Architecto nisi aspernatur consequatur, vitae omnis placeat perspiciatis temporibus iusto nemo nobis illo earum labore, fugiat enim ipsa facere culpa, rem recusandae tempore laboriosam sed quas? Voluptatibus neque ipsum praesentium consectetur totam?</p>
                    </div>
                    <div className="" id="partners">
                        <h2 className='text-6xl text-green-500'>Partenaires</h2>
                        <p className='leading-loose'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita consequatur, distinctio accusantium dolorum debitis numquam facilis rerum perspiciatis quas praesentium ullam, ex cumque harum iusto dicta temporibus animi quod? Nesciunt a quisquam officia magni deleniti quidem consequatur, quibusdam distinctio iure rerum qui ab eveniet est! Delectus reprehenderit culpa laboriosam maiores ipsa quis labore deserunt ut. Temporibus incidunt molestias ratione tempore expedita suscipit? Voluptatum recusandae doloribus vel nihil eveniet? Architecto nisi aspernatur consequatur, vitae omnis placeat perspiciatis temporibus iusto nemo nobis illo earum labore, fugiat enim ipsa facere culpa, rem recusandae tempore laboriosam sed quas? Voluptatibus neque ipsum praesentium consectetur totam?</p>
                    </div>
                    <div className="" id="contact">
                        <h2 className='text-6xl text-violet-600'>Contact</h2>
                        <p className='leading-loose'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita consequatur, distinctio accusantium dolorum debitis numquam facilis rerum perspiciatis quas praesentium ullam, ex cumque harum iusto dicta temporibus animi quod? Nesciunt a quisquam officia magni deleniti quidem consequatur, quibusdam distinctio iure rerum qui ab eveniet est! Delectus reprehenderit culpa laboriosam maiores ipsa quis labore deserunt ut. Temporibus incidunt molestias ratione tempore expedita suscipit? Voluptatum recusandae doloribus vel nihil eveniet? Architecto nisi aspernatur consequatur, vitae omnis placeat perspiciatis temporibus iusto nemo nobis illo earum labore, fugiat enim ipsa facere culpa, rem recusandae tempore laboriosam sed quas? Voluptatibus neque ipsum praesentium consectetur totam?</p>
                    </div>
                </div> */}

                <HouseCard/>
                <LandCard/>
            </div>
        </>
    )
}

export default Home
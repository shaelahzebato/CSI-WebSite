import React from 'react'

import agent1 from '../images/agent3.png'
import agent2 from '../images/agent1.png'
import agent3 from '../images/agent2.png'

function OurAgents() {
    return (
        <section className='mt-20'>
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-2 lg:px-0">
                    <div className="bg-cyan-700 text-white rounded-md">
                        <div className="flex justify-center items-center p-2">
                            <img className='w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover object-center' src={agent1} alt="" />
                        </div>
                        <div className="flex flex-col gap-2 p-4">
                            <h2 className='text-2xl text-center'>M. Ismael Fofana</h2>
                            <span className='text-center'>PDG de CSI Africa</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint eius explicabo ducimus unde non ipsam voluptas sit sapiente dolorem. Quas, quod molestiae ab expedita quae libero asperiores officia voluptatibus sed non mollitia illo, eligendi voluptate ipsa aspernatur voluptates! Illo consequuntur quibusdam architecto rem mollitia voluptatem, maiores molestiae voluptate cumque!</p>
                        </div>
                    </div>
                    <div className="bg-cyan-700 text-white rounded-md">
                        <div className="flex justify-center items-center p-2">
                            <img className='w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover object-center' src={agent2} alt="" />
                        </div>
                        <div className="flex flex-col gap-2 p-4">
                            <h2 className='text-2xl text-center'>Lorem, ipsum dolor.</h2>
                            <span className='text-center'>blablablaaaaaa</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint eius explicabo ducimus unde non ipsam voluptas sit sapiente dolorem. Quas, quod molestiae ab expedita quae libero asperiores officia voluptatibus sed non mollitia illo, eligendi voluptate ipsa aspernatur voluptates! Illo consequuntur quibusdam architecto rem mollitia voluptatem, maiores molestiae voluptate cumque!</p>
                        </div>
                    </div>
                    <div className="bg-cyan-700 text-white rounded-md">
                        <div className="flex justify-center items-center p-2">
                            <img className='w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover object-center' src={agent3} alt="" />
                        </div>
                        <div className="flex flex-col gap-2 p-4">
                            <h2 className='text-2xl text-center'>M. Arsène Coulibaly</h2>
                            <span className='text-center'>Responsable Gestion Commerciale.</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint eius explicabo ducimus unde non ipsam voluptas sit sapiente dolorem. Quas, quod molestiae ab expedita quae libero asperiores officia voluptatibus sed non mollitia illo, eligendi voluptate ipsa aspernatur voluptates! Illo consequuntur quibusdam architecto rem mollitia voluptatem, maiores molestiae voluptate cumque!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurAgents
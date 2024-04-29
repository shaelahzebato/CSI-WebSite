import React from 'react'

import csiLogo from '../images/csi-logo.png'


function We() {
    return (
        <section>
            <div className="container mx-auto mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:py-36">
                    <div className="flex flex-col gap-8 p-4">
                        <div className="flex flex-col gap-1">
                            <h2 className='text-3xl font-bold text-cyan-700'>CSI AFRICA</h2>
                            <span className='font-semibold text-gray-700'><strong className=' text-cyan-700'>C</strong>ompagnie des <strong className=' text-cyan-700'>S</strong>ervices <strong className=' text-cyan-700'>I</strong>mmobiliers d'<strong className=' text-cyan-700'>A</strong>frique.</span>
                        </div>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cum ex nemo earum, quaerat omnis, iure est nostrum at exercitationem molestiae officia officiis quam deserunt perspiciatis excepturi totam maiores, ut eligendi. Quidem cum consectetur suscipit adipisci a, modi rem quis ab tempora officiis dignissimos ipsum vel sed esse cupiditate id delectus quos, non perferendis, sit repellat? Magnam consequatur, perferendis iusto velit laborum eius? Quisquam voluptates ratione deleniti obcaecati! Blanditiis iste quos quasi repellat nesciunt esse quia magni assumenda id beatae dolores sit quibusdam minus necessitatibus iure inventore repellendus quo neque dolorem eligendi asperiores dolor, repudiandae dicta quae! Eveniet, soluta minima!</p>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <img className='w-96' src={csiLogo} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default We
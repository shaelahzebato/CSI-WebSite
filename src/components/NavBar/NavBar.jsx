import React, { useEffect, useState } from 'react'
import csiLogo from '../../images/csi-logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons'

function NavBar() {

    const [toggle, setToggle] = useState("false")
    const [top, setTop] = useState(true);

    useEffect(() => {
      const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true)
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    
    return (
        <nav className="w-full fixed top-0 bg-white shadow-lg shadow-cyan-500/10 z-50">
            <div className="container mx-auto py-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img className='w-8' src={csiLogo} alt="" />
                    <span className='text-xl font-bold text-cyan-700'>Africa.</span>
                </div>
                <ul className='hidden md:flex space-x-10 text-cyan-700 font-semibold text-sm uppercase'>
                    <li className='hover:text-cyan-500'><Link to={"/"}>Accueil</Link></li>
                    <li className='hover:text-cyan-500'><Link to={"/we"}>Nous</Link></li>
                    <li className='hover:text-cyan-500'><Link to={"/services"}>Services</Link></li>
                    <li className='hover:text-cyan-500'><Link to={"/projects"}>Projets</Link></li>
                    <li className='hover:text-cyan-500'><Link to={"/nos-agents"}>Nos agents</Link></li>
                    <li className='hover:text-cyan-500'><Link to={"/contact"}>Contacts</Link></li>
                    {/* <li className='hover:text-cyan-500'><Link to={"/partners"}>Partenaires</Link></li> */}
                </ul>
                <div className="hidden md:block w-5 cursor-pointer text-cyan-600 text-3xl"><FontAwesomeIcon icon={faUserCircle}/></div>
                <div className="space-y-1 md:hidden cursor-pointer z-20" onClick={() => setToggle(!toggle)}>
                    <FontAwesomeIcon className={`text-3xl text-cyan-600`} icon={faBars}/>
                    {/*<div>
                        <div className={`w-6 h-0.5 bg-cyan-600`}></div>
                        <div className={`w-6 h-0.5 bg-cyan-600`}></div>
                        <div className={`w-6 h-0.5 bg-cyan-600`}></div>
                        <div className={`w-6 h-0.5 bg-cyan-600`}></div>
                    </div> */}
                </div>
                <ul className={`${toggle ? "hidden" : ""} bg-white shadow-sm shadow-cyan-500/55 absolute top-0 left-0 w-full p-10 rounded-b-3xl space-y-10 text-cyan-700 font-semibold text-sm uppercase text-center`}>
                    <li className='hover:text-cyan-500'><Link to={"/"}>Accueil</Link></li>
                    <li className='hover:text-cyan-500'><Link to={"/we"}>Nous</Link></li>
                    <li className='hover:text-cyan-500'><Link to={"/services"}>Services</Link></li>
                    <li className='hover:text-cyan-500'><Link to={"/projects"}>Projets</Link></li>
                    <li className='hover:text-cyan-500'><Link to={"/nos-agents"}>Nos agents</Link></li>
                    <li className='hover:text-cyan-500'><Link to={"/contact"}>Contacts</Link></li>
                </ul>
            </div>
        </nav>
        
        
        
        
        
        
        // <header className='fixed bg-blue-700 text-white w-full py-6'>
        //     <nav className='container mx-auto'>
        //         <div className='flex justify-between'>
        //             <div className="">
        //                 <Link>
        //                     <img src={csiLogo} className='w-10 rounded-full' alt="" />
        //                 </Link>
        //             </div>
        //             <div className="flex gap-10">
        //                 <Link to={"/"} className='text-xl hover:underline hover:decoration-sky-200 hover:text-blue-200 cursor-pointer transition duration-500 ease-in-out'>Accueil</Link>
        //                 <Link to={"/services"} className='text-xl hover:underline hover:decoration-sky-200 hover:text-blue-200 cursor-pointer transition duration-500 ease-in-out'>Nos Services</Link>
        //                 <Link to={"/projects"} className='text-xl hover:underline hover:decoration-sky-200 hover:text-blue-200 cursor-pointer transition duration-500 ease-in-out'>Projets réalisés</Link>
        //                 {/* <Link to={"/we"} className='text-xl hover:underline hover:decoration-sky-200 hover:text-blue-200 cursor-pointer transition duration-500 ease-in-out'>Nous</Link> */}
        //                 <Link to={"/partners"} className='text-xl hover:underline hover:decoration-sky-200 hover:text-blue-200 cursor-pointer transition duration-500 ease-in-out'>Partenaires</Link>
        //                 <Link to={"/contact"} className='text-xl hover:underline hover:decoration-sky-200 hover:text-blue-200 cursor-pointer transition duration-500 ease-in-out'>Contact</Link>
        //             </div>
        //         </div>
        //     </nav>
        // </header>
    )
}

export default NavBar
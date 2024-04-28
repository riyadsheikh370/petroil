import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    let [show, setShow] = useState(false);

    let handleShow = () => {
        setShow(!show)
    }

    return (
        <>
            <nav className='bg-[#F40404] py-7'>
                <div className="max-w-container px-3 lg:px-0 mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <img src={Logo} alt={Logo} />
                        </div>
                        <div className="">
                            <ul className={`text-center lg:flex items-center gap-6 z-[50] absolute top-0 left-0 lg:static duration-700 ease-in-out ${show == true ? "bg-[red] top-[200px] w-full rounded" : "top-[200px] left-[-500px] w-full"}`}>
                                <li><a className='font-pops text-white font-semibold' href="#">Home</a></li>
                                <li><a className='font-pops text-white font-semibold' href="#">About</a></li>
                                <li><a className='font-pops text-white font-semibold' href="#">Services</a></li>
                                <li><a className='font-pops text-white font-semibold' href="#">Gallery</a></li>
                                <li><a className='font-pops text-white font-semibold' href="#">Blog</a></li>
                                <li><a className='font-pops text-white font-semibold border-2 border-whit p-3 rounded inline-block' href="#">CONTACT</a></li>
                            </ul>
                        </div>
                        <div className="lg:hidden text-white" onClick={handleShow}>
                            {show == true ? <RxCross2 /> : <FaBars />}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

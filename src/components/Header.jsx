import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineAddIcCall } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

const Header = () => {
    return (
        <>
            <header className='bg-[#282828] py-3 border-b-2 border-[#FFB800]'>
                <div className='max-w-container mx-auto'>
                    <div className="lg:flex items-center">
                        <div className="lg:w-1/5 w-full">
                            <div className="flex items-center justify-center lg:justify-start">
                                <div className="text-white pr-1">
                                    <MdOutlineEmail />
                                </div>
                                <p className='font-pops text-white font-normal'>mail@yourcompany.com</p>
                            </div>
                        </div>
                        <div className="lg:w-1/5 w-full">
                            <div className="flex items-center gap-x-2 justify-center lg:justify-start">
                                <div className="text-white">
                                    <MdOutlineAddIcCall />
                                </div>
                                <p className='font-pops text-white font-normal'>+896 120 5889 (Toll free)</p>
                            </div>
                        </div>
                        <div className="lg:w-3/5 w-full lg:pt-0 pt-2">
                            <div className="text-white flex  lg:justify-end gap-x-4 justify-center">
                                < FaFacebookF />
                                <IoLogoTwitter />
                                <FaLinkedinIn />
                                <CiInstagram />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header

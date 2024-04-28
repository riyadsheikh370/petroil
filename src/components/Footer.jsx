import React from 'react'
import Logo from "../assets/logo.png"
import Icon from "../assets/icon.png"
import Fl from "../assets/fl.png"
import { TbMailCheck } from "react-icons/tb";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <section className='bg-[#1F1F1F] w-full lg:py-[150px] py-[50px]'>
                <div className="w-[70%] lg:flex mx-auto">
                    <div className="lg:w-[40%]">
                        <ul className='text-white font-pops text-[14px]'>
                            <li><img src={Logo} alt={Logo} /></li>
                            <div className="flex pt-[20px]">
                                <div className="mt-[7px] px-1"><TbMailCheck /></div>
                                <li>mail@yourcompany.com</li>
                            </div>
                            <div className="flex py-[10px]">
                                <div className="mt-[7px] px-1"><MdOutlinePhoneCallback/></div>
                                <li>+896 120 5889 (Toll free)</li>
                            </div>
                            <div className="flex">
                                <div className="mt-[7px] px-1"><IoLocationOutline/></div>
                                <li>101 Baker Street, New York, USA, 12345</li>
                            </div>
                            <li><img className='pt-[30px]' src={Icon} alt={Icon} /></li>
                        </ul>
                    </div>
                    <div className="lg:w-[20%]">
                        <ul className='text-white font-pops text-[14px]'>
                            <li className='font-pops font-bold text-[16px] lg:pt-[25px] pt-[32px]'>Company</li>
                            <li className='py-[6px]'>Home</li>
                            <li>About</li>
                            <li className='py-[6px]'>Services</li>
                            <li>Gallery</li>
                        </ul>
                    </div>
                    <div className="lg:w-[20%]">
                        <ul className='text-white font-pops text-[14px]'>
                            <li className='font-pops font-bold text-[16px] lg:pt-[25px] pt-[32px]'>Others</li>
                            <li className='py-[6px]'>Blog</li>
                            <li>Contact</li>
                            <li className='py-[6px]'>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="lg:w-[20%]">
                        <ul className='text-white font-pops'>
                            <li className='font-pops font-bold text-[16px] lg:pt-[25px] pt-[32px]'>Certificate</li>
                            <li><img className='mt-[17px]' src={Fl} alt={Fl} /></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer

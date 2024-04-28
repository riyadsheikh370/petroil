import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Dolor = () => {
    return (
        <>
            <section className='lg:py-[100px] py-[40px] bg-[#F0F0F0]'>
                <div className="max-w-container mx-auto">
                    <div className="lg:w-[70%] w-[76%] mx-auto lg:flex justify-between">
                        <div className="lg:w-[30%]">
                            <div className="bg-d1 bg-no-repeat bg-center bg-cover py-[50px] relative z-[1] after:absolute after:content[''] after:top-0 after:left-0 after:h-full after:z-[-1] after:w-full after:bg-[#00000099]">
                                <h2 className='text-white font-pops font-bold lg:text-[24px] lg:h-[180px] w-[249px] ml-[40px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
                                <div className="pl-[40px] mt-[40px]">
                                    <a href="#" className='py-[14px] px-[30px] bg-[#FFFFFF80] text-white font-pops font-semibold text-[14px]'>LEARN MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[30%]">
                            <div className="bg-d2 bg-no-repeat bg-center bg-cover my-4 lg:my-0 py-[50px] relative z-[1] after:absolute after:content[''] after:top-0 after:left-0 after:h-full after:z-[-1] after:w-full after:bg-[#00000099]">
                                <h2 className='text-white font-pops font-bold lg:text-[24px] lg:h-[180px] w-[249px] ml-[40px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
                                <div className="pl-[40px] mt-[40px]">
                                    <a href="#" className='py-[14px] px-[30px] bg-[#FFFFFF80] text-white font-pops font-semibold text-[14px]'>LEARN MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[30%]">
                            <div className="bg-d3 bg-no-repeat bg-center bg-cover py-[50px] relative z-[1] after:absolute after:content[''] after:top-0 after:left-0 after:h-full after:z-[-1] after:w-full after:bg-[#00000099]">
                                <h2 className='text-white font-pops font-bold lg:text-[24px] lg:h-[180px] w-[249px] ml-[40px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
                                <div className="pl-[40px] mt-[40px]">
                                    <a href="#" className='py-[14px] px-[30px] bg-[#FFFFFF80] text-white font-pops font-semibold text-[14px]'>LEARN MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:pl-[70%] pl-[12%] flex mt-2">
                        <h2 className='text-[#000000] font-pops font-bold lg:text-[16px]'>MORE FROM THE BLLOG</h2>
                        <div className="mt-[3px]"><IoIosArrowForward /></div>
                        </div>
                </div>
            </section>
        </>
    )
}

export default Dolor

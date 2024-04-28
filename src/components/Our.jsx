import React from 'react'

const Our = () => {
    return (
        <>
            <section className='lg:pt-[20px]'>
                <div className="lg:flex items-center">
                    <div className="lg:w-[60%] px-3 lg:px-0">
                        <div className="lg:pl-[30%]">
                            <h2 className='font-pops font-bold lg:text-[64px]'>Our Services</h2>
                            <p className='font-pops lg:w-[450px] lg:pb-0 pb-4 lg:text-[16px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    <div className="lg:w-[60%]">
                        <div className="bg-our bg-no-repeat bg-center bg-cover lg:py-[140px] py-[50px] relative z-[1] after:absolute after:content[''] after:top-0 after:left-0 after:h-full after:z-[-1] after:w-full after:bg-[#00000099]">
                            <h2 className='text-white font-pops lg:text-start font-bold lg:text-[30px] px-[50px]'>Modern natural oil and gas refineries.</h2>
                            <div className="pl-[50px] mt-5">
                                <a href="#" className='py-[14px] px-[30px] bg-[red] text-white font-pops font-semibold text-[16px]'>LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:flex">
                <div className="lg:w-[60%] lg:py-0 py-3">
                        <div className="bg-our2 bg-no-repeat bg-center bg-cover lg:py-[140px] py-[50px] relative z-[1] after:absolute after:content[''] after:top-0 after:left-0 after:h-full after:z-[-1] after:w-full after:bg-[#00000099]">
                            <h2 className='text-white font-pops lg:text-start font-bold lg:text-[30px] px-[50px]'>Supply of national industries.</h2>
                            <div className="pl-[50px] mt-5">
                                <a href="#" className='py-[14px] px-[30px] bg-[red] text-white font-pops font-semibold text-[16px]'>LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[60%]">
                        <div className="bg-our3 bg-no-repeat bg-center bg-cover lg:py-[140px] py-[50px] relative z-[1] after:absolute after:content[''] after:top-0 after:left-0 after:h-full after:z-[-1] after:w-full after:bg-[#00000099]">
                            <h2 className='text-white font-pops lg:text-start font-bold lg:text-[30px] px-[50px]'>National fuel distribution and supply.</h2>
                            <div className="pl-[50px] mt-5">
                                <a href="#" className='py-[14px] px-[30px] bg-[red] text-white font-pops font-semibold text-[16px]'>LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Our

import React from 'react'

const Learn = () => {
  return (
    <>
      <section className='lg:py-[100px] bg-[#F0F0F0] w-full py-[50px]'>
        <div className="max-w-container mx-auto">
          <div className="lg:w-[850px] h-[300px] mx-auto flex">
            <div className="w-[35%] h-full bg-[#F40404]">
              <h2 className='text-white font-pops lg:text-start font-bold lg:text-[30px] lg:px-[50px] px-[10px] lg:pt-[80px] pt-[125px]'>Learn more about our company</h2>
            </div>
            <div className="w-[65%] h-full bg-learn bg-no-repeat bg-center bg-cover">
              <div className="text-center mt-[150px]">
                <a href="#" className='py-[14px] px-[30px] bg-[white] text-[#F40404] font-pops font-semibold text-[16px]'>Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Learn

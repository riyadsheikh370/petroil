import React from 'react'
import Logod from "../assets/logod.png"

const Logo = () => {
  return (
  <>
<section className='lg:py-[100px] py-[40px]'>
    <div className="max-w-container mx-auto">
        <div className="w-[70%] mx-auto">
            <img src={Logod} alt={Logod} />
        </div>
    </div>
</section>
  </>
  )
}

export default Logo

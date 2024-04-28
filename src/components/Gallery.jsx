import React from 'react'
import Item1 from "../assets/gal1.png"
import Item2 from "../assets/gal2.png"
import Item3 from "../assets/gal3.png"
import Item4 from "../assets/gal4.png"

const Gallery = () => {
    return (
        <>
            <section>
                <div className="flex justify-between flex-wrap">
                    <div className="lg:w-[24%] my-1 w-[49%]">
                        <img className='w-full' src={Item1} alt={Item1} />
                    </div>
                    <div className="lg:w-[24%] my-1 w-[49%]">
                        <img className='w-full' src={Item2} alt={Item2} />
                    </div>
                    <div className="lg:w-[24%] my-1 w-[49%]">
                        <img className='w-full' src={Item3} alt={Item3} />
                    </div>
                    <div className="lg:w-[24%] my-1 w-[49%]">
                        <img className='w-full' src={Item4} alt={Item4} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery

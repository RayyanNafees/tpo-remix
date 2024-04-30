import React from 'react'
import LongWhitebutton from './LongWhiteButton'
import { OurNumbers } from '../../utils/data'
import Card from './Card'
import badge from '../../assets/badge.svg'
import hat from '../../assets/hat.svg'
import career from '../../assets/career.svg'

const Section2 = () => {
  return (
    <div className='flex flex-col w-[100%] bg-[#F8F8FF] sm:p-[3vw] text-customBlack'>

      <div className='flex flex-col-reverse gap-[6vw] sm:gap-0 justify-center items-center sm:flex-row sm:justify-between'>
    {/* buttons */}
        <div className='flex flex-col gap-[2vw] w-[80%] sm:w-[50%] justify-center items-center'>
          <div className='ml-[5vw]'>
            <LongWhitebutton icon={badge} content="Our Rankings"/>
          </div>
          <div className="mr-[10vw]">
            <LongWhitebutton icon={hat} content="Alumni Stories"/>
          </div>
          <div className="ml-[5vw]">
            <LongWhitebutton icon={career} content="Career Development"/>
          </div>
        </div>

        <div className=" w-[85%] sm:w-[45%] flex-col flex justify-center  ">
          {/* heading */}
            <div className="font-bold text-[6vw] sm:text-[3vw]">
                Why ZHCET?
            </div>

            <div className="text-[3vw] sm:text-[1.3vw] mt-[2vw] sm:mt-0 font-[400]">
            Discover the future leaders of your industry at ZHCET, where academic excellence meets real-world impact. Our commitment to innovation, industry partnerships, and a dynamic learning environment ensures that our graduates are equipped with the skills and knowledge to thrive in today's competitive landscape. Join us in shaping the future of technology and fostering a diverse community of talented individuals ready to make a difference in the world.
            </div>
        </div>
      </div>

{/* part 2 */}
      <div className="flex flex-col justify-center items-center mt-[10vw] sm:mt-[7vw]">
        <div className='text-primary_text font-medium text-[6vw] sm:text-[3.5vw]'>
          Our Numbers
        </div>
        <div className="sm:mt-[1.5vw] sm:gap-[0] gap-[10vw] mt-[3vw] flex flex-col sm:flex-row justify-between w-full p-[2vw]">
        {OurNumbers.map((data,index)=>(
          <div key={index} className=''>
              <Card data={data}/>
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Section2
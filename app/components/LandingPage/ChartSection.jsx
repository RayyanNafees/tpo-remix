import React from 'react'
import Chart from './Chart'
import { PlaceMentData } from '../../utils/data';

const ChartSection = () => {
  return (
    <div className='flex flex-col bg-customBlue p-[4vw] justify-center items-center'>
          <div className='text-customWhite text-[5vw] font-bold mb-[4vw]'>
            Our Placements
        </div>
    <div className='flex flex-col sm:flex-row justify-around items-center w-[100%] h-fit '>
        <Chart label={"Highest CTC"} data={PlaceMentData.map((data) => data.highestctc)} max={60}/>
        <div className="border-l-2 hidden sm:flex border-dotted border-white h-80"></div>
        <Chart label={"Placements"} data={PlaceMentData.map((data) => data.placed)} max={1000}/>
    </div>
    </div>
  )
}

export default ChartSection
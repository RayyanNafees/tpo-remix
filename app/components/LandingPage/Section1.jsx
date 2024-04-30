import LongButton from './LongButton'
import call from '../../assets/call.svg'
import mail from '../../assets/mail.svg'


const Section1 = () => {
  return (
    <div 
    className={'h-[70vw] sm:h-[50vw] w-[100%] flex flex-col text-customBlack justify-around font1 bg-hero bg-no-repeat bg-cover border-x-orange-800 px-[3vw]'}>
        {/* email nd number */}
        <div className='flex flex-row justify-end w-[100%] gap-[3vw] mt-[3vw]'>
          <LongButton icon={mail} content={"amupro@amu.ac.in"}/>
          <LongButton icon={call} content={"+91-571-2700920"}/>
        </div>

        {/* glassy lookk */}
        <div className=' h-[60%] sm:h-[60%] w-[100%] shadow bg-customCyan bg-opacity-30 rounded-[1.5vw] p-[2vw]'>
            <div className='w-[60%] sm:w-[45%]'>
            {/* bold heading */}
            <div className='flex flex-col text-[3.5vw] sm:text-[2.8vw] font-bold'>
            <span>Empowering Careers:</span> 
            <span>Training & Placement Hub</span>
            </div>

            {/* small info */}
            <div className=' text-[1.7vw] sm:text-[1.3vw] font-medium mt-[3vw]'>
            Welcome to the ZHCET Placement Office Website! Delighted to have you as you begin your career journey. Discover internships, co-op programs, and full-time positions with top employers on our site.
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Section1
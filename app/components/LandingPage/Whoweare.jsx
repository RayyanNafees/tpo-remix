import image from "../../assets/whoweare.png";
import { useEffect, useState } from "react";

const Whoweare = () => {
    const [screenWidth, setScreenWidth] = useState(null);
    const [showImage, setShowImage] = useState(false);


    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
          setShowImage(window.innerWidth < 640); // Update showImage based on window width
        };
    
        handleResize(); // Call the handler once to set initial state
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return(
        <div className="h-fit py-[8vh] w-[100%] bg-customWhite flex flex-col-reverse sm:flex-row justify-between items-between sm:items-center">
            <div className="flex flex-col">
            <h2 className="text-[6vw] sm:text-[3vw] font-normal sm:pl-[110px] pl-[4vw]">Who we are?</h2>
            <h3 className="text-[6vw] sm:text-[3vw] font-bold bg-customBlue text-white sm:pl-[110px] pl-[4vw] sm:pr-[5vw] rounded-r-xl">
                Placement Cell, ZHCET
            </h3>
            {showImage && (
                <img
                src={image}
                className="w-[80vw] mx-auto my-4 rounded-[8px]"
                />
            ) }
            <p className="text-[16px] w-[75vw] sm:w-[40vw] font-[500] sm:pl-[4vw] mx-auto sm:text-left text-center pt-[20px]">
                We are the architects of your career journey, dedicated to shaping
                futures and fostering success. As the ZHCET Training and Placement
                Office, we serve as the compass guiding students and professionals
                towards their desired destinations. With a wealth of resources,
                personalized support, and industry connections, we are the
                cornerstone of opportunity, empowering individuals to thrive in
                today&apos;s dynamic workforce. Welcome to a place where dreams meet
                determination, and success is not just a goal but a reality waiting
                to be achieved
            </p>
            </div>
            {!showImage && (
                <img
                src={image}
                className="w-[80vw] mx-auto sm:w-[40vw] rounded-[8px] sm:mr-[50px]"
                />
            ) }
        </div>
    )
};

export default Whoweare;
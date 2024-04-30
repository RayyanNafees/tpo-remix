import React, { useState } from "react";
import Student_Registration from "./Student_Registration";
import Company_Registration from "./Company_Registration";
import { Link } from "react-router-dom";

const activeCls =
  "flex-1 text-center box-shadow bg-customBlue rounded-lg p-[1vw] border-[1.5px] border-customBlue text-white";
const tabCls =
  "flex-1 text-center box-shadow bg-white rounded-lg p-[1vw] border-[1.5px] border-customBlue text-customBlue transition duration-300 ease-in-out hover:bg-customBlue hover:text-white";

export default function Registration_Text() {
  const [registrationType, setRegistrationType] = useState("student");

  const showStudentForm = () => {
    setRegistrationType("student");
  };

  const showCompanyForm = () => {
    setRegistrationType("company");
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-[1.25rem] text-center">
        {/* <div className="flex-col">
          <h1 className="text-[1.75rem] md:text-[2rem] lg:text-[2.375rem] mb-3 font-bold text-customBlack">
            Register As
          </h1>
          <div className="flex justify-between items-center lg:w-[22.5rem] lg:h-[4.5rem]">
            <button
              className={`text-[1rem] lg:text-[1.5rem] px-4 md:px-5 lg:px-7 py-1.5 font-bold rounded-[10px] hover:scale-[1.01] active:duration-75 transition-all ${
                registrationType === "student"
                  ? "bg-customBlue text-white"
                  : "text-customBlue bg-white"
              }`}
              onClick={showStudentForm}
            >
              Student
            </button>
            <button
              className={`text-[1rem] lg:text-[1.5rem] px-4 md:px-5 lg:px-7 py-1.5 font-bold rounded-[10px] hover:scale-[1.01] active:duration-75 transition-all ${
                registrationType === "company"
                  ? "bg-customBlue text-white"
                  : "text-customBlue bg-white"
              }`}
              onClick={showCompanyForm}
            >
              Recruiter
            </button>
          </div>
        </div> */}
        <div className="py-16">
          <h1 className="text-center sm:text-[2.5vw] font-montserrat text-customBlack font-bold">
            Register As
          </h1>
          <div className="flex justify-center items-center font-montserrat text-[4vw] md:text-[1.8vw] font-semibold space-x-[4vw] pt-[2vw] m-auto">
            <Link to="/login">
              <button type="button" className={activeCls}>
                Student
              </button>
            </Link>
            <Link to="/login/recruiter">
              <button type="button" className={tabCls}>
                Recuiter
              </button>
            </Link>
          </div>
        </div>
      </div>
      {registrationType === "student" && <Student_Registration />}
      {registrationType === "company" && <Company_Registration />}
    </div>
  );
}

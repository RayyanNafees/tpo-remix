import React, { useState } from "react";
import Student_Fields from "../RegisterFields.jsx";

export default function CompanyRegistration() {
  const [formData, setFormData] = useState({
    companyName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        error: "Passwords do not match",
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        error: "",
      }));
      //Left
      console.log(formData);
      setFormData({
        companyName: "",
        mobileNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
        field1: "",
        field2: "",
        field3: "",
        field4: "",
        error: "",
      });
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="lg:flex items-center justify-center w-[80%] lg:w-[700px] h-[950px] lg:h-[1100px] mt-[1.25rem] rounded-[10px] bg-gradient-to-br from-[#2C3E50] from-65% to-[#648DB6] to-90%">
        <div className="w-[100%] h-[950px] lg:w-[700px] lg:h-[1100px] px-10 py-2  border-[1px] border-r-2 rounded-[10px]">
          <div className="flex justify-center">
            <h1 className="text-[1.5rem] lg:text-[34px] pt-[1.5rem] lg:pt-[41px] font-bold text-white">
              Recruiter&apos;s Portal
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-3 lg:mt-8">
              <Student_Fields
                label="Company name"
                placeholder="Name"
                type="email"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
              <Student_Fields
                label="Mobile Number"
                placeholder="1234567890"
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
              <Student_Fields
                label="Email ID"
                placeholder="abcd@gmail.com"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Student_Fields
                label="Password"
                placeholder="............"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <Student_Fields
                label="Confirm Password"
                placeholder="............"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <Student_Fields
                label="Field 1"
                placeholder="XXXXXXX"
                name="field1"
                value={formData.field1}
                onChange={handleChange}
              />
              <Student_Fields
                label="Field 2"
                placeholder="XXXXXXX"
                name="field2"
                value={formData.field2}
                onChange={handleChange}
              />
              <Student_Fields
                label="Field 3"
                placeholder="XXXXXXX"
                name="field3"
                value={formData.field3}
                onChange={handleChange}
              />
              <Student_Fields
                label="Field 4"
                placeholder="XXXXXXX"
                name="field4"
                value={formData.field4}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="lg:w-[164px] w-[100px] mt-3 lg:mt-7 h-10 bg-[#232B2B] text-[#F8F8FF] border-[1px] rounded-[10px]
                            border-[#F8F8FF] text-[1rem] lg:text-[24px] active:scale-[.98] hover:scale-[1.01] active:duration-75 transition-all hover:border-hidden"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

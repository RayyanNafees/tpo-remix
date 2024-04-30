import React from "react";

export default function RegisterFields({
  label,
  placeholder,
  name,
  type,
  value,
  onChange,
}) {
  return (
    <div>
      <div className="w-full h-auto lg:h-20 mb-4">
        <label className="text-lg text-white font-medium">{label}</label>
        <input
          className="w-full h-10 lg:h-auto p-4 mt-1 border-gray-100 border-2 bg-[#F8F8FF] rounded-[10px]"
          placeholder={placeholder}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
}

const FormInput = (props) => {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <div className="formInput flex flex-col p-[2vw] font-montserrat py-2 md:py-4">
      <label className="text-white mb-[1vh] text-left text-[3vw] md:text-[1vw]">
        {label}
      </label>
      <input
        className="rounded-lg h-[2.5vw] p-[3vw] md:p-[1.5vw] text-[2vw] md:text-[1vw]"
        {...inputProps}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;

import { useEffect, useState } from 'react';
import InputForm from '~/components/LoginRegister/Forms';
import NavbarTopLogin from '~/components/LoginRegister/NavbarTopLogin';
import { Link } from 'react-router-dom';
import { CautionIcon } from '~/components/heroicons/caution';
import './loginRegister.css';
import { useMemo } from 'react';

const activeCls =
  'flex-1 text-center box-shadow bg-customBlue rounded-lg border-[0.1vw] border-customBlue text-white w-[12vw] h-[6vw] md:w-[8vw] md:h-[4vw]';
const tabCls =
  'flex-1 text-center box-shadow bg-white rounded-lg border-[0.1vw] border-customBlue text-customBlue w-[12vw] h-[6vw] transition duration-300 ease-in-out hover:bg-customBlue hover:text-white md:w-[8vw] md:h-[4vw]';

const LoginStudent = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(values);
  });

  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    if (newPassword.includes(' ')) {
      event.preventDefault();
      return;
    }
    setPassword(newPassword);
    setIsTouched(true);
    if (newPassword.trim() === '') {
      setIsValid(true);
      setErrors([]);
    } else {
      validatePassword(newPassword);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validatePassword = (newPassword: string) => {
    const errors = [];

    if (newPassword.length < 8) {
      errors.push('Password must be at least 8 characters long.');
    }

    if (errors.length > 0) {
      setIsValid(false);
      setErrors(errors);
    } else {
      setIsValid(true);
      setErrors([]);
    }
  };

  const errors_with_key = useMemo(
    () => errors.map((err) => ({ id: crypto.randomUUID(), msg: err })),
    [errors]
  );

  return (
    <>
      <NavbarTopLogin />
      <div className='mt-4 mb-[4vw]'>
        <h1 className='text-center text-[2.6vw] sm:text-[2vw] font-montserrat text-customBlack font-bold'>
          Login As
        </h1>
        <div className='flex justify-center items-center font-montserrat text-[2.3vw] md:text-[1.5vw] font-semibold space-x-[4vw] pt-[2vw] m-auto'>
          <Link to='/login'>
            <button type='button' className={activeCls}>
              Student
            </button>
          </Link>
          <Link to='/login/admin'>
            <button type='button' className={tabCls}>
              Admin
            </button>
          </Link>
        </div>
      </div>
      <div className='app items-center text-center box-shadow bg-gradient-to-br from-customBlue from-45% to-customLightBlue to-90% rounded-lg w-[75vw] md:w-[40vw] m-auto mb-[10vh]'>
        <h1 className='text-white justify-center text-[4vw] md:text-[2vw] font-montserrat font-bold pt-6'>
          {"Student's"} Portal
        </h1>
        <form onSubmit={handleSubmit}>
          <InputForm
            label='Username'
            placeholder='Username'
            name='username'
            type='text'
            onChange={onChange}
          />

          <div className='input-icons'>
            <InputForm
              label='Password'
              placeholder='Password'
              name='password'
              type={passwordVisible ? 'text' : 'password'}
              onChange={handleChange}
              value={password}
            />
            <button
              type='button'
              className='eye-icon'
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <i className='fa-regular fa-eye text-customBlack' />
              ) : (
                <i className='fa-regular fa-eye-slash text-customBlack' />
              )}
            </button>
          </div>

          <div
            className={`error text-customWhite text-left flex flex-col p-[2vw] font-montserrat py-2 md:py-4 ${
              isValid || !isTouched ? 'hidden' : 'flex'
            }`}
          >
            <div>
              {errors_with_key.map((error, index) => (
                <div
                  key={error.id}
                  className='error text-customWhite text-left flex font-montserrat py-2 md:py-2 text-[2vw] sm:text-[1.2vw] md:text-[1vw] font-semibold'
                >
                  <div>
                    <CautionIcon />
                  </div>
                  <div>
                    <ul>
                      <li>{error.msg}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-row justify-between p-[2vw] font-montserrat text-white text-[2.5vw] md:text-[1.2vw]'>
            <button
              type='submit'
              className='font-medium box-shadow bg-customBlack rounded-lg w-[14vw] md:w-[8vw] border-[1px] py-2 transition duration-300 ease-in-out hover:bg-customBlue hover:text-white'
            >
              Login
            </button>
            <button type='button' className='font-light text-end'>
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginStudent;

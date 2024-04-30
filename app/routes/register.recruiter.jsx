import { useState, useEffect } from 'react';
import NavbarTopRegister from '~/components/LoginRegister/NavbarTopRegister';
import InputForm from '~/components/LoginRegister/Forms';
import { Link } from '@remix-run/react';
import { CautionIcon } from '~/components/heroicons/caution';

const activeCls =
  'flex-1 text-center box-shadow bg-customBlue rounded-lg border-[0.1vw] border-customBlue text-white w-[12vw] h-[6vw] md:w-[8vw] md:h-[4vw]';
const tabCls =
  'flex-1 text-center box-shadow bg-white rounded-lg border-[0.1vw] border-customBlue text-customBlue w-[12vw] h-[6vw] transition duration-300 ease-in-out hover:bg-customBlue hover:text-white md:w-[8vw] md:h-[4vw]';

export default function RegisterStudent() {
  const [values, setValues] = useState({
    username: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    facultyNumber: '',
    enrollmentNumber: '',
    courseOfStudy: '',
    graduationYear: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(values);
  });

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [mobileNumberValid, setMobileNumberValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [mobileNumberError, setMobileNumberError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isMobileNumberTouched, setIsMobileNumberTouched] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    if (newPassword.includes(' ')) {
      event.preventDefault();
      return;
    }
    setPassword(newPassword);
    setIsPasswordTouched(true);
    if (newPassword.trim() === '') {
      setPasswordValid(true);
      setPasswordErrors([]);
    } else {
      validatePassword(newPassword);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const validatePassword = (newPassword) => {
    const errors = [];

    if (newPassword.length < 8) {
      errors.push('Password must be at least 8 characters long.');
    }
    if (!hasLowercaseAndUppercase(newPassword)) {
      errors.push(
        'Password must contain at least one lowercase letter and one uppercase letter.'
      );
    }
    if (!hasDigitAndSpecialChar(newPassword)) {
      errors.push(
        'Password must contain at least one digit and one special character.'
      );
    }
    if (hasSpace(newPassword)) {
      errors.push('Password must not contain any spaces.');
    }

    if (errors.length > 0) {
      setPasswordValid(false);
      setPasswordErrors(errors);
    } else {
      setPasswordValid(true);
      setPasswordErrors([]);
    }
  };

  const validateConfirmPassword = (newConfirmPassword) => {
    if (newConfirmPassword !== password) {
      setConfirmPasswordValid(false);
    } else {
      setConfirmPasswordValid(true);
    }
  };

  const handleConfirmPasswordChange = (
    event
  ) => {
    const newConfirmPassword = event.target.value;
    if (newConfirmPassword.includes(' ')) {
      event.preventDefault();
      return;
    }
    setConfirmPassword(newConfirmPassword);
    if (newConfirmPassword.trim() === '') {
      setConfirmPasswordValid(true);
    } else {
      validateConfirmPassword(newConfirmPassword);
    }
  };

  const hasLowercaseAndUppercase = (password) => {
    return /[a-z]/.test(password) && /[A-Z]/.test(password);
  };

  const hasDigitAndSpecialChar = (password) => {
    return (
      /\d/.test(password) &&
      /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)
    );
  };

  const hasSpace = (password) => {
    return /\s/.test(password);
  };

  const handleMobileNumberChange = (
    event
  ) => {
    const newMobileNumber = event.target.value;
    setMobileNumber(newMobileNumber);
    setIsMobileNumberTouched(true);
    if (newMobileNumber.trim() === '') {
      setMobileNumberValid(true);
      setMobileNumberError('');
    } else {
      validateMobileNumber(newMobileNumber);
    }
  };

  const validateMobileNumber = (newMobileNumber) => {
    if (newMobileNumber.length !== 10) {
      setMobileNumberValid(false);
      setMobileNumberError('Mobile number must be 10 digits long.');
    } else {
      setMobileNumberValid(true);
      setMobileNumberError('');
    }
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsEmailTouched(true);
    if (newEmail.trim() === '') {
      setEmailValid(true);
      setEmailError('');
    } else {
      validateEmail(newEmail);
    }
  };

  const validateEmail = (newEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      setEmailValid(false);
      setEmailError('Invalid email address format.');
    } else {
      setEmailValid(true);
      setEmailError('');
    }
  };

  return (
    <>
      <NavbarTopRegister />
      <div className='mt-4 mb-[4vw]'>
        <h1 className='text-center text-[2.6vw] sm:text-[2vw] font-montserrat text-customBlack font-bold'>
          Register As
        </h1>
        <div className='flex justify-center items-center font-montserrat text-[2.3vw] md:text-[1.5vw] font-semibold space-x-[4vw] pt-[2vw] m-auto'>
          <Link to='/register'>
            <button type='button' className={tabCls}>
              Student
            </button>
          </Link>
          <Link to='/register/recruiter'>
            <button type='button' className={activeCls}>
              Recuiter
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
          <InputForm
            label='Mobile Number'
            placeholder='1234567890'
            name='mobileNumber'
            type='number'
            value={mobileNumber}
            onChange={handleMobileNumberChange}
          />
          <div>
            {!mobileNumberValid && isMobileNumberTouched && (
              <div className='error text-customWhite text-left flex p-[2vw] font-montserrat py-2 md:py-4 text-[2vw] sm:text-[1.2vw] md:text-[1vw] font-semibold'>
                <div>
                  <CautionIcon />
                </div>
                <div>{mobileNumberError}</div>
              </div>
            )}
          </div>
          <InputForm
            label='Email ID'
            placeholder='abcd@gmail.com'
            name='email'
            value={email}
            onChange={handleEmailChange}
          />
          <div>
            {!emailValid && isEmailTouched && (
              <div className='error text-customWhite text-left flex p-[2vw] font-montserrat py-2 md:py-4 text-[2vw] sm:text-[1.2vw] md:text-[1vw] font-semibold'>
                <div>
                  <CautionIcon />
                </div>
                <div>{emailError}</div>
              </div>
            )}
          </div>
          <InputForm
            label='Faculty Number'
            placeholder='GN4122'
            name='facultyNumber'
            type='text'
            onChange={onChange}
          />
          <InputForm
            label='Enrollment Number'
            placeholder='22STBSA152'
            name='enrollmentNumber'
            type='text'
            onChange={onChange}
          />
          <div className='flex flex-col p-[2vw] font-montserrat py-2 md:py-4'>
            <p className='text-white mb-[1vh] text-left text-[3vw] md:text-[1vw]'>
              Course of Study
            </p>
            <select className='rounded-lg p-[1.5vw] md:p-[0.8vw] text-[2vw] md:text-[1vw]'>
              <option value='BE'>Computer Engineering</option>
            </select>
          </div>
          <InputForm
            label='Graduation Year'
            placeholder='2024'
            name='graduationYear'
            type='date'
            onChange={onChange}
          />
          <div className='input-icons'>
            <InputForm
              label='Password'
              placeholder='Password'
              name='password'
              type={passwordVisible ? 'text' : 'password'}
              onChange={handlePasswordChange}
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
            className={`error text-customWhite text-left flex p-[2vw] font-montserrat py-2 md:py-4 ${
              passwordValid || !isPasswordTouched ? 'hidden' : 'flex'
            }`}
          >
            <div>
              {passwordErrors.map((error, index) => (
                <div
                  key={crypto.randomUUID()}
                  className='error text-customWhite text-left flex font-montserrat py-2 md:py-2 text-[2vw] sm:text-[1.2vw] md:text-[1vw] font-semibold
									'
                >
                  <div>
                    <CautionIcon />
                  </div>
                  <div>
                    <ul>
                      <li>{error}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='input-icons'>
            <InputForm
              label='Confirm Password'
              placeholder='Confirm Password'
              name='confirmPassword'
              type={confirmPasswordVisible ? 'text' : 'password'}
              onChange={handleConfirmPasswordChange}
              value={confirmPassword}
            />
            <button
              type='button'
              className='eye-icon'
              onClick={toggleConfirmPasswordVisibility}
            >
              {confirmPasswordVisible ? (
                <i className='fa-regular fa-eye text-customBlack' />
              ) : (
                <i className='fa-regular fa-eye-slash text-customBlack' />
              )}
            </button>
          </div>
          <div>
            {!confirmPasswordValid && (
              <div className='error text-customWhite text-left flex p-[2vw] font-montserrat py-2 md:py-4 text-[2vw] sm:text-[1.2vw] md:text-[1vw] font-semibold'>
                <div>
                  <CautionIcon />
                </div>
                <div>
                  <p>Passwords do not match!</p>
                </div>
              </div>
            )}
          </div>
          <div className='flex flex-row justify-between p-[2vw] font-montserrat text-white text-[2.5vw] md:text-[1.2vw]'>
            <button
              type='submit'
              className='font-medium box-shadow bg-customBlack rounded-lg w-[14vw] md:w-[8vw] border-[1px] py-2 transition duration-300 ease-in-out hover:bg-customBlue hover:text-white'
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

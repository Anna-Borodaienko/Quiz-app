import { Link } from "react-router-dom";
import { setEmail } from "../../api/answers";
import { useRef, useState } from "react";

const EmailPage:React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(true);

  const inputRef = useRef(null);

  const onSubmitEmail = () => {
    setEmail(inputValue);
  }

  const validateEmail = (email: string): boolean => {
    return (email.length > 0 && /[a-zA-Z0-9.-_]{1,}@[a-zA-Z0-9.-]{1,}[.]{1}[a-zA-Z0-9]{2,}/.test(email));
  }

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const value = event.target.value;
    const isCorrectEmail = validateEmail(value);
    setInputValue(value);
    setIsError(!isCorrectEmail);
  }

  return (
    <>
      <div>Email</div>
      <div>Enter your email to get full access</div>
      <input id="email" name="email" type="text" placeholder="Your email" value={inputValue} onChange={onChangeValue} ref={inputRef}></input>
      {isError && <div>Invalid email</div>}
      <Link to="/finish">
        <button onClick={onSubmitEmail} disabled={isError}>Next</button>
      </Link>
    </>
  )
};

export default EmailPage;

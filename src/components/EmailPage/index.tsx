import { Link } from "react-router-dom";
import { submitEmail } from "../../api/answers";
import { useState } from "react";
import TitleSection from "../TitleSection";
import Header from "../Header";
import ButtonNext from "../Button";
import ErrorMessage from "../ErrorMessage";
import EmailField from "../EmailField";
import PolicyMessage from "../PolicyMessage";
import { Wrapper } from "./EmailPage.styled";
import { PageContainerWithButton } from "../../styles/PageContainerWithButton";

const EmailPage:React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isError, setIsError] = useState(true);

  const onSubmitEmail = () => {
    submitEmail(inputValue);
  }

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const value = event.target.value;
    setInputValue(value);
  }

  const validate = (error: boolean) => {
    setIsError(error);
  }

  return (
    <PageContainerWithButton>
      <>
        <Header />
        <TitleSection title={"Email"} subtitle={"Enter your email to get full access"} />
        <EmailField inputValue={inputValue} onChangeValue={onChangeValue} validate={validate} />
        {isError && inputValue !== '' ? <ErrorMessage text={"Invalid email"}/> : <ErrorMessage text={""}/>}
        <PolicyMessage />
      </>
      <>
        <Link to="/finish">
          <ButtonNext onClick={onSubmitEmail} disabled={isError} title={"Next"} />
        </Link>
      </>
    </PageContainerWithButton>
  )
};

export default EmailPage;

import { Link } from "react-router-dom";
import { submitEmail } from "../../api/answers";
import { useState } from "react";
import TitleSection from "../TitleSection";
import Header from "../Header";
import ButtonNext from "../Button";
import ErrorMessage from "../ErrorMessage";
import EmailField from "../EmailField";
import PolicyMessage from "../PolicyMessage";
import { PageContainerWithButton } from "../../styles/PageContainerWithButton";
import { useTranslation } from "react-i18next";

const EmailPage:React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isError, setIsError] = useState(true);

  const { t } = useTranslation();

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
      <div>
        <Header />
        <TitleSection title={t("Email")} subtitle={t("Enter your email to get full access")} />
        <EmailField inputValue={inputValue} onChangeValue={onChangeValue} validate={validate} />
        {isError && inputValue !== '' ? <ErrorMessage text={t("Invalid email")}/> : <ErrorMessage text={""}/>}
        <PolicyMessage />
      </div>
      <div>
        <Link to="/finish">
          <ButtonNext onClick={onSubmitEmail} disabled={isError} title={t("Next")} />
        </Link>
      </div>
    </PageContainerWithButton>
  )
};

export default EmailPage;

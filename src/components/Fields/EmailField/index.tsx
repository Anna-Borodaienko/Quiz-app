import { useEffect } from "react";
import { emailPattern } from "../../../constants/questions";
import { Wrapper, StyledInput } from "./EmailField";
import { useTranslation } from "react-i18next";
import ErrorMessage from "../ErrorMessage";

interface EmailFieldProps {
  inputValue: string;
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validate: (error: boolean) => void;
}

const EmailField: React.FC<EmailFieldProps> = ({ inputValue, onChangeValue, validate }: EmailFieldProps) => {

  const { t } = useTranslation();

  const validateEmail = (email: string): boolean => {
    return (email.length > 0 && new RegExp(emailPattern).test(email));
  };

  const isValid = validateEmail(inputValue);

  useEffect(() => {
    const isError = !isValid;
    validate(isError);
  }, [isValid, validate]);

  return (
    <Wrapper>
      <StyledInput id="email" name="email" type="text" placeholder={t("Your email")} value={inputValue} onChange={onChangeValue} />
      {!isValid && inputValue !== '' ? <ErrorMessage text="Invalid email"/> : <ErrorMessage text=""/>}
    </Wrapper>
  )
}

export default EmailField;

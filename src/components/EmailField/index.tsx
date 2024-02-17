import { useEffect } from "react";
import { emailPattern } from "../../constants/questions";
import { Wrapper, StyledInput } from "./EmailField";
import { useTranslation } from "react-i18next";

interface EmailFieldProps {
  inputValue: string;
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validate: (error: boolean) => void;
}

const EmailField: React.FC<EmailFieldProps> = ({ inputValue, onChangeValue, validate }: EmailFieldProps) => {

  const { t } = useTranslation();

  const validateEmail = (email: string): boolean => {
    return (email.length > 0 && new RegExp(emailPattern).test(email));
}
  useEffect(() => {
    const isError = !validateEmail(inputValue);
    validate(isError);
  }, [inputValue, validate]);

  return (
    <Wrapper>
      <StyledInput id="email" name="email" type="text" placeholder={t("Your email")} value={inputValue} onChange={onChangeValue} />
    </Wrapper>
  )
}

export default EmailField;

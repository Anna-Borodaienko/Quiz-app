import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { submitEmail } from '../../api/email';
import Button from '../../components/Button';
import EmailField from '../../components/Fields/EmailField';
import Header from '../../components/Header';
import PolicyMessage from '../../components/PolicyMessage';
import TitleSection from '../../components/TitleSection';
import Motion from '../../styles/Motion';
import { PageContainerWithButton } from '../../styles/PageContainerWithButton';
import { Pages } from '../../constants/pages';

const EmailPage: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isError, setIsError] = useState(true);

  const navigate = useNavigate();

  const onSubmitEmail = () => {
    submitEmail(inputValue);
    navigate(`${Pages.FINISH}`);
  };

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setInputValue(value);
  };

  const validate = (error: boolean) => {
    setIsError(error);
  };

  return (
    <Motion>
      <PageContainerWithButton>
        <div>
          <Header />
          <TitleSection
            title="Email"
            subtitle="Enter your email to get full access"
          />
          <EmailField
            inputValue={inputValue}
            onChangeValue={onChangeValue}
            validate={validate}
          />
          <PolicyMessage />
        </div>
        <div>
          <Button onClick={onSubmitEmail} disabled={isError} title="Next" />
        </div>
      </PageContainerWithButton>
    </Motion>
  );
};

export default EmailPage;

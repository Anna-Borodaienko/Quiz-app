import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getSelectedHates, submitHates } from '../../api/hates';
import Button from '../../components/Button';
import OptionCardCheckbox from '../../components/Cards/OptionCardCheckbox';
import Header from '../../components/Header';
import TitleSection from '../../components/TitleSection';
import Motion from '../../styles/Motion';
import { OptionsContainer } from '../../styles/OptionsContainer';
import { PageContainerWithButton } from '../../styles/PageContainerWithButton';
import { getCurrentPage } from '../../utils/getCurrentPage';
import { Pages } from '../../constants/pages';
import { getVisibleHates } from '../../api/dataWithParams';

const HatesPage: React.FC = () => {
  const [selectedHates, setSelectedHates] =
    useState<string[]>(getSelectedHates());
  const [visibleHates] = useState<string[]>(getVisibleHates());

  const navigate = useNavigate();

  const currentPage = getCurrentPage();

  const onHandleTheme = (option: string, selected: boolean) => {
    if (selected) {
      setSelectedHates([...selectedHates, option]);
    } else setSelectedHates(selectedHates.filter((hate) => hate !== option));
  };

  const isSelected = (option: string) => {
    return selectedHates.includes(option);
  };

  const onSubmitHate = (): void => {
    const checkedSelectedHates = selectedHates.filter((hate) =>
      visibleHates.includes(hate)
    );
    submitHates(checkedSelectedHates);
    navigate(`${Pages.QUIZ}/${currentPage + 1}`);
  };

  return (
    <Motion>
      <PageContainerWithButton>
        <div>
          <Header />
          <TitleSection title="What do you hate the most in a book?" />
          <OptionsContainer>
            {visibleHates.map((hate) => (
              <OptionCardCheckbox
                key={hate}
                option={hate}
                handleSelect={onHandleTheme}
                selected={isSelected(hate)}></OptionCardCheckbox>
            ))}
          </OptionsContainer>
        </div>
        <div>
          <Button
            onClick={onSubmitHate}
            disabled={selectedHates.length === 0}
            title="Next"
          />
        </div>
      </PageContainerWithButton>
    </Motion>
  );
};

export default HatesPage;

import React from 'react';
import { Link } from 'react-router-dom';
import back from '../../images/back.svg';
import { HeaderWrapper, RowContainer, Icon } from './Header.styled';
import ProgressBarLine from '../ProgressBarLine';
import Counter from '../Counter';

interface HeaderProps {
  totalNr: number;
  currentNr: number;
  changeQuestion: (number: number) => void;
}

const Header: React.FC<HeaderProps> = ({ totalNr, currentNr, changeQuestion }) => {

  const handleBack = () => {
    changeQuestion(currentNr - 1);
  }

  return (
    <HeaderWrapper>
      {currentNr <= 5 && (
        <>
          <RowContainer>
            {currentNr > 1 && (
              <Link to={`/quiz/${currentNr - 1}`}>
                <Icon src={back} alt="Back" onClick={handleBack}/>
              </Link>
            )}
          <Counter totalNr={totalNr} currentNr={currentNr} />
          </RowContainer>
          <RowContainer>
            <ProgressBarLine currentNr={currentNr} />
          </RowContainer>
        </>
      )}
    </HeaderWrapper>
  )
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import back from '../../images/back.svg';
import { HeaderWrapper, RowContainer, Icon, IconWrapper } from './Header.styled';
import ProgressBarLine from '../ProgressBarLine';
import Counter from '../Counter';
import { receiveCurrentPageNr } from '../../utils/receiveCurrentPageNr';
import { totalQuestionsNr } from '../../constants/questions';

const Header: React.FC = () => {
  
  const currentPageNr = receiveCurrentPageNr();

  const totalNr = totalQuestionsNr;

   return (
    <>
      {currentPageNr > 0 && currentPageNr <= 5 ? (
        <HeaderWrapper>
          <RowContainer>
            {currentPageNr > 1 ? (
              <Link to={`/quiz/${currentPageNr - 1}`}>
                <IconWrapper>
                  <Icon src={back} alt="Back" />
                </IconWrapper>
              </Link>
            ) : <IconWrapper />}
            <Counter totalNr={totalNr} currentNr={currentPageNr} />
          </RowContainer>
          <RowContainer>
            <ProgressBarLine currentNr={currentPageNr} />
          </RowContainer>
        </HeaderWrapper>
        ) : <HeaderWrapper />
      }
    </>
  )
}

export default Header;

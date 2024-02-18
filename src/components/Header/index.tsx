import React from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../../images/back.svg';
import { HeaderWrapper, RowContainer, Icon, IconWrapper } from './Header.styled';
import ProgressBarLine from '../ProgressBarLine';
import Counter from '../PageProgress';
import { getCurrentPage } from '../../utils/getCurrentPage';
import { totalQuestions } from '../../constants/questions';
import { Pages } from '../../constants/pages';

const Header: React.FC = () => {

  const navigate = useNavigate();
  
  const currentPage = getCurrentPage();

  const totalPages = totalQuestions;

  const handleClick = () => {
    navigate(`${Pages.QUIZ}/${currentPage - 1}`);
  }

   return (
    <>
      {currentPage > 0 ? (
        <HeaderWrapper>
          <RowContainer>
            {currentPage > 1 ? (
              <IconWrapper onClick={handleClick}>
                <Icon src={back} alt="Back" />
              </IconWrapper>
            ) : <IconWrapper />}
            <Counter totalPages={totalPages} currentPage={currentPage} />
          </RowContainer>
          <RowContainer>
            <ProgressBarLine currentPage={currentPage} />
          </RowContainer>
        </HeaderWrapper>
        ) : <HeaderWrapper />
      }
    </>
  )
}

export default Header;

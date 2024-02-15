import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import back from '../../images/back.svg';


const HeaderWrapper = styled.div `
  height: 100px;
  margin: 20px 10px;
`

const RowContainer = styled.div `
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Icon = styled.img `
  height: 40px;
  width: 40px;
  margin: 5px;
`

const Counter = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  width: 325px;
`

interface ProgressBarProps {
  width: string;
  color: string;
}

const BarContainer = styled.div `
  margin: 5px;
  height: 5px;
  width: 90%;
`

const ProgressBar = styled.div<ProgressBarProps> `
  border-radius: 15px;
  height: 5px;
  width: ${props => props.width};
  background-color: ${props => props.color};
  
`

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
        <Counter>
          {`${currentNr} / ${totalNr}`}
        </Counter>
      </RowContainer>
      <RowContainer>
        <BarContainer>
          <ProgressBar width="100%" color="#F3F4FA">
            <ProgressBar width={`${currentNr*20}%`} color="#E4229C"/>
          </ProgressBar>
        </BarContainer>
      </RowContainer>
      </>
    )}
    </HeaderWrapper>
  )
}

export default Header;
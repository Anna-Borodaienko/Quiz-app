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
  font-size: 40px;
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

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <RowContainer>
        <Link to="/">
          <Icon src={back} alt="Back"/>
        </Link>
        <Counter>
          2/5
        </Counter>
      </RowContainer>
      <RowContainer>
        <BarContainer>
          <ProgressBar width="100%" color="#F3F4FA">
            <ProgressBar width="40%" color="#E4229C"/>
          </ProgressBar>
        </BarContainer>
      </RowContainer>
    </HeaderWrapper>
  )
}

export default Header;
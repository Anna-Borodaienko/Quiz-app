import { useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import styled from "styled-components";

const CircleProgressBar: React.FC = () => {

  const StyledBar = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    @property --progress-value {
    syntax: '<integer>';
    inherits: false;
    initial-value: 0;
  }

    @keyframes progress {
      to { --progress-value: 100; }
    }

    background: 
      radial-gradient(closest-side, #36173D 79%, transparent 80% 100%),
      conic-gradient(#E4229C calc(var(--progress-value) * 1%), #F3F4FA 0);
      animation: progress 5s 1 forwards;

    &:before {
      counter-reset: percentage var(--progress-value);
      content: counter(percentage) '%';
      animation: progress 5s 1 forwards;
    }
  `

  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      navigate(`/email`);
    }, 5000);
  }, [navigate]);

  return (
    <>
    <StyledBar>
    </StyledBar>
    <span>Finding collection for you...</span>
    </>
    
  )
}

export default CircleProgressBar;
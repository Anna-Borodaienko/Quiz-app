import { styled } from "styled-components";
import { loaderDelay } from "../../constants/styles";
import { colors } from "../../constants/styles";

export const StyledBar = styled.div`
    width: 250px;
    height: 250px;
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
      radial-gradient(closest-side, #36173D 90%, transparent 90% 100%),
      conic-gradient(${colors.magenta} calc(var(--progress-value) * 1%), ${colors.white} 0);
      animation: progress ${loaderDelay} 1 forwards;

    &:before {
      font-family: "Albert Sans", sans-serif;
      font-size: 50px;
      font-weight: 800;
      counter-reset: percentage var(--progress-value);
      content: counter(percentage) '%';
      animation: progress ${loaderDelay} 1 forwards;
    }
  `

import { StyledLink, StyledPlainText, Wrapper } from "./PolicyMessage.styled";

const PolicyMessage: React.FC = () => {
  return (
    <Wrapper>
      <StyledPlainText>
        By continuing I agree with
      </StyledPlainText>
      {' '}
      <a href="https://react-tutorial.app/privacy.html" target="_blank" rel="noreferrer">
        <StyledLink>
          Privacy policy
        </StyledLink>
      </a>
      {' '}
      <StyledPlainText>
        and
      </StyledPlainText>
      {' '}
      <a href="https://react-tutorial.app/terms.html" target="_blank" rel="noreferrer">
        <StyledLink>
          Terms of use.
        </StyledLink>
      </a>
    </Wrapper>
  )
}

export default PolicyMessage;

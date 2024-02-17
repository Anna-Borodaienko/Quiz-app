import { StyledText, Wrapper } from "./DownloadButton.styled";
import download from '../../images/download.svg';

const DownloadButton: React.FC = () => {
  return (
    <Wrapper>
      <img src={download} alt="download" />
      <StyledText>Download my answers</StyledText>
    </Wrapper>
  )
}

export default DownloadButton;

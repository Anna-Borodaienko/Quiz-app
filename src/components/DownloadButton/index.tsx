import { StyledText, Wrapper } from "./DownloadButton.styled";
import download from '../../images/download.svg';
import { getUserInfo } from "../../api/answers";
import CsvDownloader from 'react-csv-downloader';


const DownloadButton: React.FC = () => {

  const columns = [
    { id: "order", displayName: "order" },
    { id: "title", displayName: "title" },
    { id: "type", displayName: "type" },
    { id: "answer", displayName: "answer" },
  ];
  
  const csvData = getUserInfo();

  return (
    <CsvDownloader 
      filename="quiz-result"
      separator=";"
      wrapColumnChar=""
      columns={columns}
      datas={csvData}>
      <Wrapper>
          <img src={download} alt="download" />
          <StyledText>Download my answers</StyledText>
        </Wrapper>
    </CsvDownloader>
  )
}

export default DownloadButton;

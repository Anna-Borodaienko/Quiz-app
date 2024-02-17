import { StyledText, Wrapper } from "./DownloadButton.styled";
import download from '../../images/download.svg';
import { getUserInfo } from "../../api/answers";
import CsvDownloader from 'react-csv-downloader';
import { useTranslation } from "react-i18next";


const DownloadButton: React.FC = () => {

  const { t } = useTranslation();

  const columns = [
    { id: "order", displayName: t("order") },
    { id: "title", displayName: t("title") },
    { id: "type", displayName: t("type") },
    { id: "answer", displayName: t("answer") },
  ];
  
  const csvData = getUserInfo(t);

  return (
    <CsvDownloader 
      filename="quiz-result"
      separator=";"
      wrapColumnChar=""
      columns={columns}
      datas={csvData}>
      <Wrapper>
          <img src={download} alt="download" />
          <StyledText>{t("Download my answers")}</StyledText>
        </Wrapper>
    </CsvDownloader>
  )
}

export default DownloadButton;

import { StyledText, Wrapper } from './DownloadCSV.styled';
import download from '../../images/download.svg';
import CsvDownloader from 'react-csv-downloader';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { Locales } from '../../i18n/constants';
import { getSelectedTopics } from '../../api/topics';
import { getLocale } from '../../api/locale';
import { getAge } from '../../api/age';
import { getEmail } from '../../api/email';
import { getGender } from '../../api/gender';
import { getSelectedHates } from '../../api/hates';

const handleMultiAnswers = (
  answers: string[],
  t: TFunction<'translation', undefined>
) => {
  return answers.map((answer) => t(answer)).join();
};

const getUserInfo = (
  t: TFunction<'translation', undefined>
): {
  order: string;
  title: string;
  type: string;
  answer: string;
}[] => {
  const data = [
    {
      order: '1',
      title: t('What is your preferred language?'),
      type: t('single-select'),
      answer: t(Locales[getLocale()]),
    },
    {
      order: '2',
      title: t('What gender do you identify with?'),
      type: t('single-select-image'),
      answer: t(getGender()),
    },
    {
      order: '3',
      title: t('What is your age?'),
      type: t('single-select'),
      answer: t(getAge()),
    },
    {
      order: '4',
      title: t('What do you hate the most in a book?'),
      type: t('multiple-select'),
      answer: handleMultiAnswers(getSelectedHates(), t),
    },
    {
      order: '5',
      title: t('What are your favorite topics?'),
      type: t('bubble'),
      answer: handleMultiAnswers(getSelectedTopics(), t),
    },
    {
      order: '6',
      title: t('Email'),
      type: t('email'),
      answer: getEmail(),
    },
  ];
  return data;
};

const getColumns = (
  t: TFunction<'translation', undefined>
): {
  id: string;
  displayName: string;
}[] => {
  const columns = [
    { id: 'order', displayName: t('order') },
    { id: 'title', displayName: t('title') },
    { id: 'type', displayName: t('type') },
    { id: 'answer', displayName: t('answer') },
  ];
  return columns;
};

const DownloadCSV: React.FC = () => {
  const { t } = useTranslation();

  const csvData = getUserInfo(t);
  const columns = getColumns(t);

  return (
    <CsvDownloader
      filename="quiz-result"
      separator=";"
      wrapColumnChar=""
      columns={columns}
      datas={csvData}>
      <Wrapper>
        <img src={download} alt="download" />
        <StyledText>{t('Download my answers')}</StyledText>
      </Wrapper>
    </CsvDownloader>
  );
};

export default DownloadCSV;

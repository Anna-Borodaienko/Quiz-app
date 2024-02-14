import { setLocale } from "../../api/answers";

const MainPage: React.FC = () => {
  const onChooseLang = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setLocale(e.currentTarget.innerText);
  }

  return (
    <>
      <div>What is your preferred language?</div>
      <div>Choose language</div>
      <button onClick={onChooseLang}>English</button>
      <button onClick={onChooseLang}>French</button>
      <button onClick={onChooseLang}>German</button>
      <button onClick={onChooseLang}>Spanish</button>
    </>
  )
}

export default MainPage;
import { Link } from "react-router-dom";
import { clearAll } from "../../api/answers";

const FinishPage:React.FC = () => {

  const onRetake = () => {
    clearAll();
  }

  return (
    <>
      <div>Thank you for supporting us and passing quiz</div>
      <Link to="/quiz/1">
        <button onClick={onRetake}>Retake quiz</button>
      </Link>
    </>
  )
}

export default FinishPage;

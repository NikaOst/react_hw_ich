import { useSelector } from 'react-redux';

function Result() {
  const { score } = useSelector((state) => state.questionnaire);
  return (
    <div>
      <p>Score: {score}</p>
    </div>
  );
}
export default Result;

// В папке `components` создайте файл `Result.js`.
// Этот компонент должен отображать результат после отправки анкеты.
//  Он должен использовать `useSelector`
// для получения результата из состояния.

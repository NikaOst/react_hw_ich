import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAnswer } from '../../redux/slices/questionnaireSlice';
import styles from './styles.module.css';

function Question() {
  const dispatch = useDispatch();
  const { questionnaire } = useSelector((state) => state.questionnaire);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleChange = (question, answer) => {
    setSelectedAnswers((prev) => ({ ...prev, [question]: answer }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      checkAnswer(
        questionnaire.map((q) => {
          return { question: q.question, answer: selectedAnswers[q.question] };
        }),
      ),
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {questionnaire.map((q) => (
        <div key={q.question}>
          <h1>{q.question}</h1>
          <div>
            <div>
              <input
                type="radio"
                name={q.question}
                value={q.varianten[0]}
                checked={selectedAnswers[q.question] === q.varianten[0]}
                onChange={() => handleChange(q.question, q.varianten[0])}
              />
              <span>{q.varianten[0]}</span>
            </div>
            <div>
              <input
                type="radio"
                name={q.question}
                value={q.varianten[1]}
                checked={selectedAnswers[q.question] === q.varianten[1]}
                onChange={() => handleChange(q.question, q.varianten[1])}
              />
              <span>{q.varianten[1]}</span>
            </div>
          </div>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
export default Question;

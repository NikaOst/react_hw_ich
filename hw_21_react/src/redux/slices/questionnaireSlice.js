import { createSlice } from '@reduxjs/toolkit';

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState: {
    questionnaire: [
      { question: 'Question_1?', answer: 'answer_1', varianten: ['answer_1', 'answer_2'] },
      { question: 'Question_2?', answer: 'answer_2', varianten: ['answer_3', 'answer_2'] },
      { question: 'Question_3?', answer: 'answer_3', varianten: ['answer_3', 'answer_5'] },
      { question: 'Question_4?', answer: 'answer_4', varianten: ['answer_5', 'answer_4'] },
      { question: 'Question_5?', answer: 'answer_5', varianten: ['answer_5', 'answer_1'] },
    ],
    score: 0,
    status: null,
    error: null,
  },
  reducers: {
    checkAnswer: (state, action) => {
      state.score = state.questionnaire.filter((qu) => {
        const userAnswer = action.payload.find((a) => a.question === qu.question);
        return userAnswer && userAnswer.answer === qu.answer;
      }).length;
    },
  },
});
export const { checkAnswer } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;

import { render, waitFor, act } from '@testing-library/react';
import Questionnaire from './Questionnaire';

const mockedQuestions = [
  {
    "id": 1,
    "question": "Quelle est la plus grande forêt tropicale du monde ?",
    "answers": [
      {"id": 1, "answer": "Forêt amazonienne", "isCorrect": true},
      {"id": 2, "answer": "Forêt du Congo", "isCorrect": false},
      {"id": 3, "answer": "Forêt de Bornéo", "isCorrect": false}
    ]
  },
];

test('calls correct endpoint', async () => {
  (global as any).fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockedQuestions),
    })
  );

  await act(async () => {
    render(<Questionnaire questionEndpoint="/test_endpoint" answerEndpoint="/test_endpoint" />);
  });

  await waitFor(() => expect(fetch).toHaveBeenCalledWith("/test_endpoint"));
});

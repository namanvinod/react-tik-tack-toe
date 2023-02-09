const DIFFICULTY = {
  easy: "easy",
  medium: "medium",
  hard: "hard",
};

const EXAMS = {
  upPCS: "upPCS",
  upNEET: "upNEET",
  IPS: "IPS",
  IAS: "IAS",
};

export const questonBank = [
  {
    questionId: 0,
    questionText: "Zeroth question?",
    answers: ["Answer1", "Answer2", "Answer3", "Answer4"],
    difficulty: DIFFICULTY.hard,
    exams: [EXAMS.upNEET, EXAMS.upPCS],
  },
  {
    questionId: 1,
    questionText: "First question?",
    answers: ["Answer1", "Answer2", "Answer3", "Answer4"],
    difficulty: DIFFICULTY.hard,
    exams: [EXAMS.upNEET, EXAMS.upPCS],
  },
  {
    questionId: 2,
    questionText: "Second question?",
    answers: ["Answer5", "Answer8", "Answer3", "Answer4"],
    difficulty: DIFFICULTY.hard,
    exams: [EXAMS.upNEET, EXAMS.upPCS],
  },
  {
    questionId: 3,
    questionText: "Third question?",
    answers: ["Answer1", "Answer44", "Answer4", "Answer6"],
    difficulty: DIFFICULTY.hard,
    exams: [EXAMS.upNEET, EXAMS.upPCS],
  },
  {
    questionId: 4,
    questionText: "Very Very long text in this question?",
    answers: ["Answer1", "Answer2", "Answer3", "Answer4"],
    difficulty: DIFFICULTY.hard,
    exams: [EXAMS.upNEET, EXAMS.upPCS],
  },
];

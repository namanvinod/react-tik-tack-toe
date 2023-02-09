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
    questionText: "Zeroth question?",
    answers: ["Answer1", "Answer2", "Answer3", "Answer4"],
    difficulty: DIFFICULTY.hard,
    exams: [EXAMS.upNEET, EXAMS.upPCS],
  },
  {
    questionText: "First question?",
    answers: ["Answer1", "Answer2", "Answer3", "Answer4"],
    difficulty: DIFFICULTY.hard,
    exams: [EXAMS.upNEET, EXAMS.upPCS],
  },
  {
    questionText: "Second question?",
    answers: ["Answer5", "Answer8", "Answer3", "Answer4"],
    difficulty: DIFFICULTY.hard,
    exams: [EXAMS.upNEET, EXAMS.upPCS],
  },
  {
    questionText: "Third question?",
    answers: ["Answer1", "Answer44", "Answer4", "Answer6"],
    difficulty: DIFFICULTY.hard,
    exams: [EXAMS.upNEET, EXAMS.upPCS],
  },
  {
    questionText: "Very Very long text in this question?",
    answers: ["Answer1", "Answer2", "Answer3", "Answer4"],
    difficulty: DIFFICULTY.hard,
    exams: [EXAMS.upNEET, EXAMS.upPCS],
  },
];

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
    answers: [
      "Answer1",
      "Answer44",
      "Very very very Long Answer: sfkefo sfefml sfscs5353edcv svefgwef cscscsfegvs fegvdrdbvdvdsfbsdfvsdfbrehbsfvds dgvdvdvdvsdvsgegvdvedgedvdgegdv dvevedcdcegedvf fvbe",
      "Answer6",
    ],
    difficulty: DIFFICULTY.hard,
    exams: [EXAMS.upNEET, EXAMS.upPCS],
  },
  {
    questionId: 4,
    questionText:
      "Very Very long text in this question: dvbfrhhhh rgrhjtrbfd rwhernhtehj35 fhth45jhet  trht46jt her br r g r3th trgrhjtrbfd rwhernhtehj35 fhth45jhet  trht46jt her br r g r3th t  rgrhjtrbfd rwhernhtehj35 fhth45jhet  trht46jt her br r g r3th t rgrhjtrbfd rwhernhtehj35 fhth45jhet  trht46jt her br r g r3th t svsdrgrhjtrbfd rwhernhtehj35 fhth45jhet  trht46jt her br r g r3th t4nberbntejtyn er htejtntentebtentrnnenf fentrngten?",
    answers: ["Answer1", "Answer2", "Answer3", "Answer4"],
    difficulty: DIFFICULTY.hard,
    exams: [EXAMS.upNEET, EXAMS.upPCS],
  },
];

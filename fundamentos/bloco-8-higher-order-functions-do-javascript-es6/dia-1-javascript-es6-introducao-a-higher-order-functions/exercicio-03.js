const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const compareAnswer = (rightAnswer, studentAnswer) => {
  if (studentAnswer === "N.A") {
    return 0;
  }
  if (studentAnswer === rightAnswer) {
    return 1;
  }
  return -0.5;
};

const calculateGrade = (rightAnswer, studentAnswer, compareAnswer) => {
  let grade = 0;
  for (let i = 0; i < rightAnswer.length; i += 1) {
    const answerReturn = compareAnswer(rightAnswer[i], studentAnswer[i]);
    grade += answerReturn;
  }
  return `Resultado final: ${grade} pontos`;
};

console.log(calculateGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswer));

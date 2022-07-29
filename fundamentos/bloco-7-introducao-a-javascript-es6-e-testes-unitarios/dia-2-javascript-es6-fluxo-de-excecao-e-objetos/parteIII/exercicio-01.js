const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const addAtribute = (object, key, value) => (object[key] = value);

addAtribute(lesson2, "turno", "noite");

const allLessons = { lesson1, lesson2, lesson3 };

const listKeys = (object) => Object.keys(object);

const listValues = (object) => Object.values(object);

const objectLength = (object) => Object.keys(object).length;

const countAllStudants = (object) => {
  let count = 0;
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      count += object[key].numeroEstudantes;
    }
  }
  return count;
};

const listIndexValue = (object, index) => listValues(object)[index];

const verifyPair = (object, key, value) => {
  const keys = listKeys(object);
  const values = listValues(object);
  let result = false;
  for (let i = 0; i < objectLength(object); i++) {
    if (keys[i] === key && values[i] === value) {
      result = true;
    }
  }
  return result;
};

const countMathStudents = (object) => {
  let count = 0;
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      if (object[key].materia === "Matemática") {
        count += 1;
      }
    }
  }
  return count;
};

// 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const teacherRelatory = (object, teacher) => {
  const relatory = {
    professor: "",
    aulas: [],
    estudantes: 0,
  };

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      if (element.professor === teacher) {
        relatory.professor = teacher;
        relatory.aulas.push(element.materia);
        relatory.estudantes += object[key].numeroEstudantes;
      }
    }
  }
  return relatory;
};

console.log(teacherRelatory(allLessons, "Maria Clara"));
// console.log(countMathStudents(allLessons));

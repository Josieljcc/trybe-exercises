const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }
  return a + b;
};

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}

function encode(string) {
  string = string.replace(/[a]/g, "1");
  string = string.replace(/[e]/g, "2");
  string = string.replace(/[i]/g, "3");
  string = string.replace(/[o]/g, "4");
  string = string.replace(/[u]/g, "5");
  return string;
}
function decode(string) {
  string = string.replace(/[1]/g, "a");
  string = string.replace(/[2]/g, "e");
  string = string.replace(/[3]/g, "i");
  string = string.replace(/[4]/g, "o");
  string = string.replace(/[5]/g, "u");
  return string;
}

function techList(array, string) {
  if (array.length === 0 || string === null) {
    return "Vazio!";
  }
  array = array.sort();
  let techList = [];
  for (let i = 0; i < array.length; i += 1) {
    const tech = array[i];
    techList.push({ tech: tech, name: string });
  }
  return techList;
}

function hydrate(string) {
  let reg = /\d+/g;
  let numbersInString = string.match(reg);
  let result = 0;
  for (const number of numbersInString) {
    result += parseInt(number);
  }
  if (result === 1) {
    return `${result} copo de água`;
  }
  return `${result} copos de água`;
}
const professionalBoard = [
  {
    id: "8579-6",
    firstName: "Ana",
    lastName: "Gates",
    specialities: ["UX", "Design"],
  },
  {
    id: "5569-4",
    firstName: "George",
    lastName: "Jobs",
    specialities: ["Frontend", "Redux", "React", "CSS"],
  },
  {
    id: "4456-4",
    firstName: "Leila",
    lastName: "Zuckerberg",
    specialities: ["Context API", "RTL", "Bootstrap"],
  },
  {
    id: "1256-4",
    firstName: "Linda",
    lastName: "Bezos",
    specialities: ["Hooks", "Context API", "Tailwind CSS"],
  },
  {
    id: "9852-2-2",
    firstName: "Jeff",
    lastName: "Cook",
    specialities: ["Ruby", "SQL"],
  },
  {
    id: "4678-2",
    firstName: "Paul",
    specialities: ["Backend"],
  },
];

const searchEmployee = (id) => {
  let result;
  for (const employee of professionalBoard) {
    if (employee.id === id) {
      result = Object.assign(employee);
      if (Object.values(result).length < 4) {
        result = "Dados não encontrados";
        return result;
      }
      return result;
    } else {
      result = "ID não identificada";
    }
  }
  return result;
};

module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
  searchEmployee,
};

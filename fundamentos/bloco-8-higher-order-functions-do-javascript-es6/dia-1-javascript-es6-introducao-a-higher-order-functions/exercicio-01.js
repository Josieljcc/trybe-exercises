const newEmployees = () => {
  const employees = {
    id1: createData("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createData("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createData("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const createData = (name) => {
  const cleanName = name.split(" ").join("_");
  const email = `${cleanName}@trybe.com`;
  return { name, email };
};

console.log(newEmployees());

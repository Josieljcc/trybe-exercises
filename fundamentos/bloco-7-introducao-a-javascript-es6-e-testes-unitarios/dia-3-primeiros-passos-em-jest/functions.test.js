const {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
  searchEmployee,
} = require("./functions");

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

describe("Testes da função sum", () => {
  it("somar dois valores", () => {
    expect(sum(4, 5)).toBe(9);
  });
  it("testa sum(0,0) é igual a 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
  it("testa se o tipo Primitivo for diferente de number envia erro", () => {
    expect(() => sum(4, "5")).toThrowError("parameters must be numbers");
  });
});

describe("Testes da função myRemove", () => {
  it("Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it("Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it("Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe("Testes da função myFizzBuzz", () => {
  it("verifica se um número divisível por 3 e 5 a resposta é fizzbuzz", () => {
    expect(myFizzBuzz(15)).toMatch("fizzbuzz");
  });
  it("verifica se um número divisível por 3 a resposta é fizz", () => {
    expect(myFizzBuzz(3)).toMatch("fizz");
  });
  it("verifica se um número divisível por 5 a resposta é buzz", () => {
    expect(myFizzBuzz(5)).toMatch("buzz");
  });
  it("verifica se um número não é divisível nem por 3 ou por 5 a resposta é o número enviado", () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  it("verifica se o parametro recebido não é um numero retorna false", () => {
    expect(myFizzBuzz("asdf")).toEqual(false);
  });
});

describe("Testes das funções encode e decode", () => {
  it("Testa se encode e decode são funções", () => {
    expect(typeof encode && typeof decode).toBe("function");
  });
  it("Testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;", () => {
    expect(encode("aeiou")).toBe("12345");
  });
  it("Testa se os números 1, 2, 3, 4, 5 são convertidas em a, e, i, o e u, respectivamente;", () => {
    expect(decode("12345")).toBe("aeiou");
  });
  it("Testa se em encode todas letras são convertidas", () => {
    expect(encode("josielaeiou")).toBe("j4s32l12345");
  });
  it("Testa se em decode todos os números são convertidos", () => {
    expect(decode("j4s32l12345")).toBe("josielaeiou");
  });
  it("Testa se o tamanho da string enviada pelo parâmetro é a mesmo do retorno", () => {
    expect(encode("josiel").length).toBe("josiel".length);
  });
});

describe("Testa a função techList", () => {
  it("Testa se a função techList é definida", () => {
    expect(techList).toBeDefined();
  });
  it("Testa se techList é uma função", () => {
    expect(typeof techList).toBe("function");
  });
  it("Lista com 5 tecnologias deve retornar uma lista de objetos ordenados", () => {
    expect(
      techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas")
    ).toEqual([
      {
        tech: "CSS",
        name: "Lucas",
      },
      {
        tech: "HTML",
        name: "Lucas",
      },
      {
        tech: "JavaScript",
        name: "Lucas",
      },
      {
        tech: "Jest",
        name: "Lucas",
      },
      {
        tech: "React",
        name: "Lucas",
      },
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], "Lucas")).toBe("Vazio!");
  });
});

describe("Testa a função hydrate", () => {
  it("Testa se a função hydrate é definida", () => {
    expect(hydrate).toBeDefined();
  });
  it("Testa se hydrate é uma função", () => {
    expect(typeof hydrate).toBe("function");
  });
  it("Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber", () => {
    expect(hydrate("1 cerveja")).toBe("1 copo de água");
    expect(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho")).toBe(
      "7 copos de água"
    );
    expect(hydrate("2 shots de tequila, 2 cervejas e 1 corote")).toBe(
      "5 copos de água"
    );
    expect(hydrate("1 copo de catuaba, 1 cervejas e 1 copo de vinho")).toBe(
      "3 copos de água"
    );
    expect(hydrate("4 caipirinhas e 2 cervejas")).toBe("6 copos de água");
  });
});

describe("Testa a função searchEmployee", () => {
  it("Testa se a função searchEmployee está definida", () => {
    expect(searchEmployee).toBeDefined();
  });
  it("Testa se searchEmployee é uma função", () => {
    expect(typeof searchEmployee).toBe("function");
  });
  it("Testa se com um id inesitene", () => {
    expect(searchEmployee("asdf")).toBe("ID não identificada");
  });
  it("Testa se as informações de um id válido existem", () => {
    expect(searchEmployee("4678-2")).toBe("Dados não encontrados");
  });
});

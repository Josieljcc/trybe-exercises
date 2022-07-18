function testasterisc(n) {
  for (let i = 0; i < n; i++) {
    let asteriscos = "";
    for (let j = 0; j < i; j++) {
      asteriscos += "*";
    }
    console.log(asteriscos);
  }
}

testasterisc(5);

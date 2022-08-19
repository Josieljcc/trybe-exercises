const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test(`testa se uppercase('oi') retorna 'OI'`, (done) => {
  uppercase('oi', (callback) => {
    expect(callback).toBe('OI');
    done();
  });
});

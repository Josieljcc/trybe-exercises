// Verifique se a importação do arquivo correto está sendo feita.
const getPokemonDetails = require('./exercicio-08');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    getPokemonDetails('teste', (error, mensagem) => {
      try {
        expect(error).toEqual(new Error('Não temos esse pokémon para você :('));
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  it('retorna um pokémon que existe no banco de dados', (done) => {
    getPokemonDetails('Bulbasaur', (error, mensagem) => {
      try {
        expect(mensagem).toBe(
          'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grama e a habilidade principal dele é Raio Solar'
        );
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

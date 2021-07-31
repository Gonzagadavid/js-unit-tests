/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const checkTypeNumber = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') {
      return true;
    }
  }

  return false;
};

const average = (arrayNumbes) => {
  const qty = arrayNumbes.length;
  let total = 0;

  if (checkTypeNumber(arrayNumbes) || qty === 0) {
    return undefined;
  }

  for (let index = 0; index < qty; index += 1) {
    total += arrayNumbes[index];
  }

  const averageNumbers = Math.round(total / qty);

  return averageNumbers;
};

console.log(average([]));

module.exports = average;

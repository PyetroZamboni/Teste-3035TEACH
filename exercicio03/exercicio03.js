// 3) Faça uma função que retorne apenas as vogais de uma palavra.

let palavra = "Copo Descartavel"

let vogais = palavra.match(/[aeiou]/ig, '');
console.log(vogais)
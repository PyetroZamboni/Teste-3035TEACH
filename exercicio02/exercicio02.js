function reverterString(string) {
   let solucao = "";
   let tamanho = string.length-1;
    
   for (let posicao = tamanho; posicao >= 0; posicao--){
      solucao = solucao + string[posicao];
   }

   console.log(solucao);
   return solucao
}
reverterString("Pyetro Miguel Zamboni");
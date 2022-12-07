// 4) Faça uma função que receba uma data no formato MM/DD/YYYY, exemplo: 03/01/2002.
//  Você deverá informar a qual dia da semana essa data se refere.



const  dia = new Date("12/07/2022")
        
nomeDia = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
nomeMes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro"]
        
console.log(" Hoje é " + nomeDia[dia.getDay()])
   
           
            
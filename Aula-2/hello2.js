//hello2.js

console.log(`Estamos no ambiente de ${process.env.NODE_ENV}`);

/*  via terminal: 
*   NODE_ENV="produção" node hello2.js
*   Registrado somente para a execução deste arquivo, quando o terminal for reiniciado a variável é apagada.
*
*   export NODE_ENV="produção"
*   node hello2.js
*   Desta forma a variável fica registrada na máquina local.
*/
8 - [1.5 Pontos] Descreva com suas palavras o que é o loop de eventos no contexto do
Node.js. Explique como ele funciona para permitir operações assíncronas não
bloqueantes, mencionando os tipos de tarefas que são processadas em cada fase do
loop de eventos. Como o loop de eventos se relaciona com a eficiência do Node.js em
lidar com I/O assíncrono?

Resposta: O loop de eventos é o que permite o Node realizar operações de I/O sem bloqueio,
mesmo usando apenas uma thread o loop de eventos consegue fazer esse tipo de operação usando 
APIs do sistema operacional. O loop de eventos passa uma tarefa para o sistema operacional, esse 
quando termina envia através de um callback o resultado para o event loop. Isso faz com que o node 
seja uma excelente escolha para web servers por exemplo, e uma escolha não muito favoravel para 
aplicações que vão executar calculos matematicos complexos

9 - [1.5 Pontos] Explique com suas palavras o papel da engine V8 e da biblioteca libuv no
funcionamento do Node.js. Como cada uma dessas componentes contribui para a
execução de código JavaScript e operações de I/O assíncronas, respectivamente?
Discuta como a interação entre V8 e libuv permite que o Node.js ofereça um
desempenho eficiente para aplicações web.

A engine V8 é responsavel por executar o javascript. Ela recebe o codigo em javascript e o interpreta e o
executa sob demanda. A engine V8 é a mesma do navegador do google chrome e ela que permite que tanto o
navegador (front) quanto o node (back) utilizem da mesma linguagem. A libuv é uma parte essencial do node 
e o que permite que ele realize operações de I/O sem bloqueios do loop de eventos. A libuv que coordena as 
chamadas assincronas e seus respectivos resultado.



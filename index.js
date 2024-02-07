const pergunta = [
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas:[
            "var",
            "let",
            "const",
        ],
        correta: 2
      },
      {
        pergunta: "Qual método é usado para imprimir algo no console do navegador?",
        respostas:[
            "console.print()",
            "print()",
            "console.log()",
        ],
        correta: 2
      },
      {
        pergunta: "Qual é a saída do seguinte código: console.log(typeof([]));?",
        respostas:[
            "array",
            "object",
            "undefined",
        ],
        correta: 1
      },
      {
        pergunta: "Qual operador é usado para verificar se dois valores são iguais em valor e tipo em JavaScript?",
        respostas:[
            "==",
            "===",
            "=",
        ],
        correta: 1
      },
      {
        pergunta: "Qual é a função usada para converter uma string em um número em JavaScript?",
        respostas:[
            "parseInt()",
            "stringToNumber()",
            "toNumber()",
        ],
        correta: 1
      },
      {
        pergunta: "Qual é a saída do seguinte código: console.log(2 + '2');?",
        respostas:[
            "22",
            "4",
            "Erro",
        ],
        correta: 2
      },
      {
        pergunta: "Qual função é usada para adicionar um evento a um elemento HTML em JavaScript?",
        respostas:[
            "addEventListener()",
            "addEvent()",
            "eventListener()",
        ],
        correta: 1
      },
      {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas:[
            "pop()",
            "removeLast()",
            "deleteLast()",
        ],
        correta: 2
      },
      {
        pergunta: "Qual é o resultado da expressão: 5 + '5'?",
        respostas:[
            "55",
            "10",
            "Erro",
        ],
        correta: 1
      },
      {
        pergunta: "Qual é a função usada para obter o comprimento de uma string em JavaScript?",
        respostas:[
            "size()",
            "length()",
            "sizeOf()",
        ],
        correta: 1
      }
    ];
    
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  

    // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textcontent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textcontent = resposta

        quizItem.querySelector('dl').appendChild(dt)
    }

    // coloca  a pergunta na tela 
    quiz.appendChild(quizItem)
  }
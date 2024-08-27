const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você encontra um novo gadget de rastreamento de saúde que promete monitorar suas atividades e fornecer insights detalhados. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Isso parece ótimo! Estou interessado em acompanhar meus dados de saúde.",
                afirmacao: "Você vê a tecnologia como uma ferramenta útil para melhorar sua saúde e bem-estar."
            },
            {
                texto: "Estou cético. Prefiro não depender de gadgets para monitorar minha saúde.",
                afirmacao: "Você prefere métodos tradicionais e tem dúvidas sobre a precisão e a necessidade da tecnologia."
            }
        ]
    },
    {
        enunciado: "Depois de usar o gadget, você percebe que ele tem um impacto positivo em sua rotina diária. Como você lida com isso?",
        alternativas: [
            {
                texto: "Incorporo o gadget em minha rotina de forma regular para otimizar meus hábitos de saúde.",
                afirmacao: "Você adota a tecnologia como parte importante da sua vida e a usa para melhorar seu bem-estar."
            },
            {
                texto: "Uso o gadget apenas esporadicamente, apenas quando quero verificar meus dados.",
                afirmacao: "Você opta por uma abordagem mais moderada e utiliza a tecnologia de forma pontual."
            }
        ]
    },
    {
        enunciado: "Durante uma conversa sobre o impacto das tecnologias de rastreamento pessoal, qual é a sua opinião?",
        alternativas: [
            {
                texto: "Acredito que essas tecnologias são benéficas e podem promover uma vida mais saudável.",
                afirmacao: "Você vê o lado positivo das tecnologias de rastreamento e como elas podem apoiar uma vida melhor."
            },
            {
                texto: "Estou preocupado com a privacidade e a segurança dos dados coletados por esses dispositivos.",
                afirmacao: "Você tem preocupações sobre a coleta de dados e os possíveis riscos à privacidade."
            }
        ]
    },
    {
        enunciado: "Você precisa criar uma apresentação sobre os benefícios dos gadgets de saúde. Qual abordagem você escolhe?",
        alternativas: [
            {
                texto: "Preparar uma apresentação detalhada usando gráficos e dados coletados do gadget.",
                afirmacao: "Você usa dados concretos e análise para apoiar seu argumento sobre os benefícios dos gadgets."
            },
            {
                texto: "Foco em uma apresentação mais geral, com base em informações disponíveis na internet e artigos.",
                afirmacao: "Você opta por uma abordagem mais ampla, recorrendo a fontes externas para construir sua apresentação."
            }
        ]
    },
    {
        enunciado: "Durante um trabalho em equipe sobre tecnologias de saúde, um membro sugere usar um software de análise avançada para compilar dados. Como você reage?",
        alternativas: [
            {
                texto: "Acho uma excelente ideia! Usar o software pode oferecer uma visão mais completa e precisa.",
                afirmacao: "Você está aberto a usar novas ferramentas para melhorar a qualidade e a precisão do trabalho."
            },
            {
                texto: "Prefiro continuar com métodos tradicionais para garantir que todos os dados sejam interpretados corretamente.",
                afirmacao: "Você opta por métodos conhecidos para manter a confiabilidade e a clareza dos dados."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Reflexão Final...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

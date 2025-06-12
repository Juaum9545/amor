
const questions = [
    {
        question: "Quando foi nosso primeiro beijo?",
        answers: [
            { text: "24/02", correct: true },
            { text: "26/02", correct: false }
        ]
    },
    {
        question: "Qual é a minha linguagem do amor principal?",
        answers: [
            { text: "Palavras de Afirmação", correct: false },
            { text: "Beijo, abraço, carinho, palavras de amor", correct: true }
        ]
    },
    {
        question: "Primeiro 'Eu te amo'?",
        answers: [
            { text: "09/03", correct: false },
            { text: "07/04", correct: true }
        ]
    },
    {
        question: "Qual o apelido carinhoso que eu mais gosto de te chamar?",
        answers: [
            { text: "Amor", correct: false },
            { text: "Mi Novio", correct: true }
        ]
    },
    {
        question: "Onde foi nosso primeiro beijão?",
        answers: [
            { text: "Ônibus", correct: true },
            { text: "Escola", correct: false }
        ]
    },
     {
        question: "Quando começamos a namorar?",
        answers: [
            { text: "24/05", correct: false },
            { text: "24/04", correct: true }
        ]
    },
      {
        question: "Meu aniversário?",
        answers: [
            { text: "16/04", correct: false },
            { text: "16/03", correct: true }
        ]
    }
];


const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const feedbackElement = document.getElementById('feedback');


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    feedbackElement.innerText = "";
    nextButton.classList.add('hide');
    nextButton.innerText = "Próximo Coraçãozinho →";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    feedbackElement.innerText = "";
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    
    if (isCorrect) {
        feedbackElement.innerText = "Isso! Você me conhece tão bem! ❤️";
        feedbackElement.style.color = "#4CAF50";
        score++;
    } else {
        feedbackElement.innerText = "Ops, quase! Mas eu te amo mesmo assim! 😉";
        feedbackElement.style.color = "#f44336";
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true");
        button.disabled = true;
    });
    
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    resetState();
    questionElement.innerText = `Quiz do nosso amor finalizado!`;
    feedbackElement.innerHTML = `Você acertou <span style="color: #e91e63;">${score}</span> de ${questions.length}! <br> Amo muito você meu amor, mucho!`;
    feedbackElement.style.color = "#333";
    nextButton.innerText = "Jogar Novamente";
    nextButton.classList.remove('hide');
}

function setStatusClass(element, correct) {
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}


nextButton.addEventListener('click', () => {
    if (questions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        startQuiz();
    }
});


startQuiz();
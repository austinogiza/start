const startBtn = document.querySelector('.start-btn');
const nextBtn = document.querySelector('.next-btn');
const answerBtn = document.getElementById('answers-container');

const questionContainerElement = document.querySelector('.question-container');

let shuffleQuestions, currentQuestionIndex;

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
const questionElement = document.querySelector('.questions');

function startGame() {
    startBtn.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    shuffleQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    setNextQuestion();

}




function setNextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;

        }
        button.addEventListener('click', selectAnswer);
        answerBtn.appendChild(button);
    });
}

function resetState() {
    nextBtn.classList.add("hide");
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerBtn.children).forEach(button = () => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide');

    } else {
        startBtn.innerText = 'Restart';
        startBtn.classList.remove('hide');
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');

    } else {
        element.classList.add('wrong');

    }

}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');


}

const questions = [{
        question: 'How are you',
        answer: [{
                text: 'Fine',
                correct: true
            },
            {
                text: 'Not Fine',
                correct: false
            },
            {
                text: "Don't Know",
                correct: false
            }
        ]
    }, {
        question: 'Favourite Movie',
        answer: [{
                text: 'Fine',
                correct: true
            },
            {
                text: 'Not Fine',
                correct: false
            },
            {
                text: "Don't Know",
                correct: false
            }
        ]
    },
    {
        question: 'Hope you are good?',
        answer: [{
                text: 'Fine',
                correct: true
            },
            {
                text: 'Not Fine',
                correct: false
            },
            {
                text: "Don't Know",
                correct: false
            }
        ]
    }
]
const startButton = document.querySelector('#start-btn');
const questionHeader = document.querySelector('#question');
const questionContainer = document.querySelector('.question-container');
const nextBtn = document.querySelector('#next-btn');
const answerButton = document.querySelector('#answer-btn');
const answerContainer = document.querySelector('#answers-container');
const scoreCounter = document.querySelector('.score');

let questionCheck, currentQuestion;

let score = 0;
startButton.addEventListener('click', startGame);

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    nextQuestion();
});

function startGame() {
    questionContainer.classList.remove('hide');

    scoreCounter.classList.remove('hide');
    startButton.classList.add('hide');

    currentQuestion = 0;
    questionCheck = questions.sort();
    nextQuestion();

}

function nextQuestion() {
    nextBtn.classList.add("hide");
    while (answerContainer.firstChild) {
        answerContainer.removeChild(answerContainer.firstChild);

    }

    showQuestion(questionCheck[currentQuestion]);


}

function showQuestion(question) {
    questionHeader.innerText = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');

        if (answer.correct) {
            button.dataset.correct = answer.correct;

        }
        answerContainer.appendChild(button);

        button.addEventListener('click', () => {

            nextBtn.classList.remove('hide');

            if (answer.correct) {
                button.classList.add('correct');
                scoreCounter.innerText = score += 1;


            } else {
                button.classList.add('wrong');
            }

        });

        if (currentQuestion > questionCheck.length) {


            endScreen();

            // currentQuestion++;

        } else {
            nextBtn.classList.add('hide');

        }


    });




}

function endScreen() {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
    nextBtn.classList.add('hide');



    startButton.addEventListener('click', () => {
        scoreCounter.innerText = 0;
        startGame();
    });

}


const questions = [{
        question: 'Who Is The Current World Best?',
        answer: [{
                text: 'Ronaldo',
                correct: false
            },
            {
                text: 'Messi',
                correct: true
            },
            {
                text: "Mbappe",
                correct: false
            }
        ]
    }, {
        question: 'Which Country Won The Last World Cup',
        answer: [{
                text: 'Brazil',
                correct: false
            },
            {
                text: 'France',
                correct: true
            },
            {
                text: "Belgium",
                correct: false
            }
        ]
    },
    {
        question: 'Who Won The Last Champions League',
        answer: [{
                text: 'Liverpool',
                correct: true
            },
            {
                text: 'Real Madrid',
                correct: false
            },
            {
                text: "Barcelona",
                correct: false
            }
        ]
    },
    {
        question: 'Which Club Has Won The Most UCL ',
        answer: [{
                text: 'AC Milan',
                correct: false
            },
            {
                text: 'Liverpool',
                correct: false
            },
            {
                text: "Real Madrid",
                correct: true
            }
        ]
    },
    {
        question: 'Who Is The Most Expensive Footballer Ever Bought',
        answer: [{
                text: 'Eden Hazard',
                correct: false
            },
            {
                text: 'Mbappe',
                correct: false
            },
            {
                text: "Neymar",
                correct: true
            }
        ]
    },
    {
        question: 'Your Score Is',

    },
];

console.log(questions.length);
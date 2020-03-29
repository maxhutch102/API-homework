alert("Hello! Welcome to my history quiz, be sure to read the rules and instructions on the main page and enjoy!")



var numQuestion = document.getElementById("questionNumber");
var quest = document.querySelector(".question");
var answerOne = document.getElementById("answer-1");
var answerTwo = document.getElementById("answer-2");
var answerThree = document.getElementById("answer-3");
var answerFour = document.getElementById("answer-4");
var time = document.getElementById("seconds");
var btnTime = document.querySelector("#timeBtn")
var timeLeft = 120


var questions = [
    {
        number: 1,
        question: "Who fought in the French and Indian War?",
        answers: ["France and India", "India and Germany", "France and USA", "France and England"],
        correct: "France and England"
    },
    {
        number: 2,
        question: "Who discovered America?",
        answers: ["Christopher Columbus", "Leif Erikson", "Marco Polo", "Amerigo Vespucci"],
        correct: "Leif Erikson"
    },
    {
        number: 3,
        question: "Who was the leader of the USSR from 1917 to 1922",
        answers: ["Joseph Stalin", "Nikita Khrushchev", "Vladimir Lenin", "Leonid Brezhnev"],
        correct: "Vladimir Lenin"
    },
    {
        number: 4,
        question: "How many people have walked on the moon?",
        answers: ["Two", "Six", "Twelve", "Thirteen"],
        correct: "Twelve"
    },
    {
        number: 5,
        question: "How many paintings did Vincent van Gogh sell during his lifetime?",
        answers: ["Zero", "One", "Over 100", "Over 1000"],
        correct: "One"
    },
    {
        number: 6,
        question: "What breed of dog is Snoopy?",
        answers: ["Blood Hound", "Pit Bull", "Poodle", "Beagle"],
        correct: "Beagle"
    },
    {
        number: 7,
        question: "What year did the Titanic sink?",
        answers: ["1997", "1912", "1914", "1865"],
        correct: "1912"
    },
    {
        number: 8,
        question: "When did the Cold War officially end?",
        answers: ["1989", "It's still hasn't ended.", "1991", "1978"],
        correct: "1989"
    },
    {
        number: 9,
        question: "What city was buried by Mount Vesuvius in 79 A.D.?",
        answers: ["Rome", "Chicago", "Milan", "Pompeii"],
        correct: "Pompeii"
    },
    {
        number: 10,
        question: "St. Patrick's Day was originally associated with what color?",
        answers: ["Green", "Orange", "White", "Blue"],
        correct: "Blue"
    },
];

var questionAmount = questions.length;
var currentQuestion = 0;

// numQuestion.textContent = questions[currentQuestion].number;
// quest.textContent = questions[currentQuestion].question;
// answerOne.textContent = questions[currentQuestion].answers[0];
// answerTwo.textContent = questions[currentQuestion].answers[1];
// answerThree.textContent = questions[currentQuestion].answers[2];
// answerFour.textContent = questions[currentQuestion].answers[3];







btnTime.addEventListener("click", function () {
    numQuestion.textContent = questions[currentQuestion].number;
    quest.textContent = questions[currentQuestion].question;
    answerOne.textContent = questions[currentQuestion].answers[0];
    answerTwo.textContent = questions[currentQuestion].answers[1];
    answerThree.textContent = questions[currentQuestion].answers[2];
    answerFour.textContent = questions[currentQuestion].answers[3];
    var timer = setInterval(function () {
        timeLeft--;
        time.textContent = timeLeft;


        if (timeLeft === 0) {
            clearInterval(timer);
            alert("You have run out of time.")

        }


    }, 1000);






});
// function submitButton () {
//     var 
// }
function displayQuestion () {
    for (var i = 0; i < questions.length; i++) {
        if (i > questions.length) {
            stopDisplay();

        } else {
            numQuestion.textContent = questions[currentQuestion].number;
            quest.textContent = questions[currentQuestion].question;
            answerOne.textContent = questions[currentQuestion].answers[0];
            answerTwo.textContent = questions[currentQuestion].answers[1];
            answerThree.textContent = questions[currentQuestion].answers[2];
            answerFour.textContent = questions[currentQuestion].answers[3];
        };
    };    

};
function stopDisplay () {
    numQuestion.textContent = questions[9].number;
    quest.textContent = questions[9].question;
    answerOne.textContent = questions[9].answers[0];
    answerTwo.textContent = questions[9].answers[1];
    answerThree.textContent = questions[9].answers[2];
    answerFour.textContent = questions[9].answers[3];

}
function stopQuiz () {
    
    var name = prompt("Enter your name.");
    // window.open("./highscore.html");
    localStorage.setItem("name", name);
};
var outcome = document.getElementById("outcome");
var score = 0;
var choice = document.querySelector("#answerBtns");
choice.addEventListener("click", function (event) {
    event.preventDefault();
    if (currentQuestion >= questions.length) {
        time.textContent = timeLeft;
        localStorage.setItem("timesleft", timeLeft);
        stopQuiz();
        stopDisplay();

    } else {
        console.log(questions[currentQuestion].correct);
        console.log(event.target.text);
        if (event.target.text === questions[currentQuestion].correct) {
            score++;
            localStorage.setItem("score", score);
            outcome.textContent = "Correct"
        } else if (event.target.text !== questions[currentQuestion].correct) {
            timeLeft = timeLeft - 15;
            outcome.textContent = "Wrong"
        };
        
        currentQuestion++;
        displayQuestion();

    }
    

    // var shore = currentQuestion + 1;
    // console.log(shore);

    // if (shore <= questionAmount) {
    //     var submission = event.target.text;
    //     console.log(questionAmount);
    //     if (submission === questions[currentQuestion].correct) {
    //         score++;
            
            
            
            
            
    //     } else {
    //         timeLeft = timeLeft - 15;
            
            
    //     }
    //     currentQuestion = currentQuestion + 1;
        // numQuestion.textContent = questions[currentQuestion].number;
        // quest.textContent = questions[currentQuestion].question;
        // answerOne.textContent = questions[currentQuestion].answers[0];
        // answerTwo.textContent = questions[currentQuestion].answers[1];
        // answerThree.textContent = questions[currentQuestion].answers[2];
        // answerFour.textContent = questions[currentQuestion].answers[3];
    // } else if (shore > questionAmount) {
    //     stopQuiz();
    //     localStorage.setItem("timecount", timeLeft);
    //     localStorage.setItem("score", score);
    //     console.log(currentQuestion);
    //     alert("poop")
        
        
    // }
});









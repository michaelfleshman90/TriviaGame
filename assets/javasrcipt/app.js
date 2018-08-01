var triviaQuestions = [
    {
        question: "what fictional city is Batman's home?",
            answers: {
                a: "Gotham City",
                b: "Metropolis",
                c: "Central City",
                d: "Themyscira"
            },
            correctAnswer: "a"
    },
    {
        question: "What is Superman's real name?",
            answers: {
                a: "Clark Kent",
                b: "Bobby Hill",
                c: "Kal-El",
                d: "Billy Mays"
            },
            correctAnswer: "c"
    },
    {
        question: "How old is Wonder Woman?",
            answers: {
                a: "250yrs old",
                b: "5000yrs old",
                c: "28yrs old",
                d: "Who knows?"
            },
            correctAnswer: "b"
    },
    {
        question: "Who is the Green Arrows side kick?",
            answers: {
                a: "Blue Arrow",
                b: "Silver Crossbow",
                c: "Speedy",
                d: "Robin"
            },
            correctAnswer: "c"
    },
    {
        question: "Harley Quinn is devoted to which Batman nemesis?",
            answers: {
                a: "Poison Ivey",
                b: "Scarecrow",
                c: "Riddler",
                d: "Joker"
            },
            correctAnswer: "d"
    },
    {
        question: "Who was the first Flash?",
            answers: {
                a: "Wally West",
                b: "Jay Garrick",
                c: "Barry Allen",
                d: "Michael Jackson"
            },
            correctAnswer: "b"
    },    
    {
        question: "Who is the fastest hero in the DC universe?",
            answers: {
                a: "The Flash",
                b: "Superman",
                c: "Batman",
                d: "Shazam"
            },
            correctAnswer: "a"
    },
    {
        question: "Which of the green lanterns became Parallax?",
            answers: {
                a: "Guy Gardner",
                b: "The Green Arrow",
                c: "Jon Stewart",
                d: "Hal Jordan"
            },
            correctAnswer: "d"
    },
    {
        question: "What color is The Green Lantern weakness?",
            answers: {
                a: "Blue",
                b: "Silver",
                c: "Yellow",
                d: "Tie-die"
            },
            correctAnswer: "c"
    },
    {
        question: "What is Superman weak against?",
            answers: {
                a: "Kryptonite",
                b: "Lois Lane",
                c: "Humanity",
                d: "All of the above"
            },
            correctAnswer: "d"
    },
    ]
var questionBox = document.getElementById("quiz")
document.on("click", questionDisplay())
function questionDisplay(triviaQuestions){

    var output = [];
    var answers;

    for (var i=0; i<questions.length; i++){

        answers = [];

        for(var a=0; a<questions[i].answers; a++) {
            answers.push("<label>" + '<input type="radio" name="question'+[i]+'" value="'+letter+'">' + letter + ': ' + questions[i].answers[letter] + '</label>');
        }
        ouput.push('<div class="questions">' + questions[i].question + "</div>" + '<div class="answers">' + answers.join('') + "</div>");
    }
    questionBox.innerHTML = output.join('');
    
    
}
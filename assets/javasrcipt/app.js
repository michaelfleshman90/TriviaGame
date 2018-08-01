var triviaQuestions = [//question object for quiz
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
//target the div by id
var questionBox = document.getElementById("quiz");
var resultsBox = document.getElementById("results");
//click start to display quiz
$(".startButton").on("click", startQuiz);
//function that holds the quiz display, results, and submit button
function startQuiz() {
    //DOM display of the quiz
    function questionDisplay(){
        //setting output and answers to zero
        var output = [];
        var answers;

        for (var i=0; i<triviaQuestions.length; i++){

            answers = [];
            //for loop adding radio buttons to the questions in memory
            for(var a=0; a<triviaQuestions[i].answers; a++) {
                answers.push("<label>" + '<input type="radio" name="question'+[i]+'" value="'+letter+'">' + letter + ': ' + tirviaQuestions[i].answers[letter] + '</label>');
            }//creates the answer div in memory 
            ouput.push('<div class="questions">' + triviaQuestions[i].question + "</div>" + '<div class="answers">' + answers.join('') + "</div>");
        }//takes the created question and answer divs from memory and prints to the screen
        questionBox.innerHTML = output.join('');
        
        
    }
    
    //function to calculate the results of the quiz
    function results() {
        document.on("click", results())
        var answerBox = questionBox.querySelectorAll(".answers");

        var userAnswer = "";
        var correctAnswers = 0;
        var incorrectAnswers = 0;
        //for loop to check and compare the user answer to the correct answer
        for(var i=0; i<questions.length; i++) {

            userAnswer = (answerBox[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            //if user correct then increment else 
            if(userAnswer === question[i].correctAnswer){
                correctAnswers +=1;

            }
            
        }//prints the reults to div
        results.innerHTML = correctAnswers + "answers correct of: " + questions.length;
    }
    function submitButton() {
        
    }
    submitButton.onclick = function(){
        results()
    }
}
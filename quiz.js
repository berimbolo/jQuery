var questions = [{
  question: "Which office holds the title of Commander-in-Chief?",
  choices: ["Speaker of the House", "President", "Chief Justice", "Secretary of Defense"],
  answer: "President"
}, {
  question: "What is the least number of Congressmen (Representatives + Senators) a state can have?",
  choices: ["2", "3", "4", "5"],
  answer: "3"
}, {
  question: "Who is the President of the USA?",
  choices: ["David Cameron", "Jesus", "Barack Obama", "JP Morgan Chase"],
  answer: "Barack Obama"
}, {
  question: " The U. S. House of Representatives has how many members?",
  choices: ["435", "42", "538", "100"],
  answer: "435"
}, {
  question: "The U.S. Senate has how many Members?",
  choices: ["100", "42", "435", "538"],
  answer: "100"
},{
  question: "The U. S. Supreme Court has how many justices",
  choices: ["7", "8", "9", "12"],
  answer: "9"
}, {
  question: "What name is given to the Presidents group of advisors?",
  choices: ["Joint Chiefs of Staff", "Executive Branch", "Ministers", "Cabinet"],
  answer: "Cabinet"
}, {
  question: "How many years can a U.S. Representative serve",
  choices: ["2", "4", "6", "Unlimited"],
  answer: "Unlimited"
}, {
  question: "The power of judicial review was established in: ",
  choices: ["Marbury v. Madison", "Executive Order", "Federalist Papers", "The Constitution"],
  answer: "Marbury v. Madison"
}, {
  question: "The United States Electoral College...",
  choices: ["Educates Politicians", "Educates Voters", "Elects the President", "Oversees Elections"],
  answer: "Elects the President"
}
];

var tally = [];

var i = 0;
var numCorrect = 0;

function displayQuestion() {
  if (i < questions.length){
    $('ul').append('<li>'+questions[i].question+'</li>');
    for (var j = 0; j < questions[i].choices.length; j++) {
      $('ol').prepend('<li class="answers"><input type="radio" name="answer" value="'+questions[i].choices[j]+'" required>' + questions[i].choices[j] + '</a></li>');
    }
  }
  else{
        var score = numCorrect/questions.length * 100;
        $('ul').append('<li>Test Complete. You scored '+score+'%</li>');
        $('#submit').remove();
  }
}

function submit() {
  $(document).on('click', '#submit', checkAnswer);
}
function removeQuestion(){
  $('ol li').remove();
  $('ul li').remove();
}
function validate(){

}
function checkAnswer(){
  var answer = $('ol').find('input:checked').val();
  if (answer === questions[i].answer){
    console.log("correct");
    removeQuestion();
    i++;
    numCorrect++;
    tally.push(true);
    displayQuestion();
  }
  else{
    removeQuestion();
    i++;
    tally.push(false);
    displayQuestion();
  }
}



$(document).ready( displayQuestion );
$(document).ready( submit );
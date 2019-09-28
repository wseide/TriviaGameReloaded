var panel = $("#quiz-area");

// QUESTIONS OF GAME
var questions = [{
question: "Which wrestler slogan begins with IF YOU SMELL..?",
answers: ["<h4>Stone Cold Steve Austin</h4>", "<h4>John Cena</h4>", "<h4>The Rock</h4>", "<h4>Macho Man</h4>"],
correctAnswer: "The Rock"
}, {
question: "Which former wrestler does NOT have a child currently wrestling in WWE?",
answers: ["<h4>Ric Flair</h4>", "<h4>Rikishi</h4>", "<h4>Hulk Hogan</h4>", "<h4>Bob Orton Jr.</h4>"],
correctAnswer: "Hulk Hogan"
}, {
question: "Which WWE Superstar also played in the National Football League?",
answers: ["<h4>Goldberg</h4>", "<h4>Baron Corbin</h4>", "<h4>Vader</h4>", "<h4>All The Above</h4>"],
correctAnswer: "All The Above"
}, {
question:"This fourteen-time world champion wrestler is also married to Vince McMahon's daughter",
answers: ["<h4>Triple H</h4>", "<h4>Randy Orton</h4>", "<h4>Matt Hardy</h4>", "<h4>Edge</h4>"],
correctAnswer: "Triple H"
}, {
question: "At Wrestlemania 33, who asked Nikki Bella to marry him?",
answers: ["<h4>Samoa Joe</h4>", "<h4>AJ Styles</h4>", "<h4>John Cena</h4>", "<h4>Brock Lesnar</h4>"],
correctAnswer: "John Cena"
}, {
question: "This WWE wrestler also stared in the reality show MTV's The Real World",
answers: ["<h4>Lita</h4>", "<h4>Jeff Hardy</h4>", "<h4>The Miz</h4>", "<h4>Chris Jericho</h4>"],
correctAnswer: "The Miz"
}, {
question: "Which WWE wrestler quit WWE following the incident known as Montreal Screw Job?",
answers: ["<h4>Shawn Michaels</h4>", "<h4>Bret (Hitman) Hart</h4>", "<h4>The Undertaker</h4>", "<h4>Mankind</h4>"],
correctAnswer: "Bret (Hitman) Hart"
}, {
question: "Who was the first African-born WWE Champion?",
answers: ["<h4>Kofi Kingston</h4>", "<h4>Mark Henry</h4>","<h4>The Rock</h4>", "<h4>Farooq</h4>"],
correctAnswer: "Kofi Kingston"
}];

// GANE AND TIMER VARIABLES
var timer;
var game = {
correct: 0,
incorrect: 0,
counter: 120,

//COUNTDOWN VARIABLES
countdown: function() {
game.counter--;
$("#counter-number").html(game.counter);
if (game.counter === 0) {
console.log("TIME UP");
game.done();
}
},

start: function() {
timer = setInterval(game.countdown, 1000);

$("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

$("#start").remove();

for (var i = 0; i < questions.length; i++) {
panel.append("<h2>" + questions[i].question + "</h2>");
for (var j = 0; j < questions[i].answers.length; j++) {
panel.append("<input type='radio' name='question-" + i +
"' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
}
}

panel.append("<button id='done'>Done</button>");
},
//DONE BUTTON AND ANSWER CHECK
done: function() {
$.each($("input[name='question-0']:checked"), function() {
if ($(this).val() === questions[0].correctAnswer) {
game.correct++;
}
else {
game.incorrect++;
}
});
$.each($("input[name='question-1']:checked"), function() {
if ($(this).val() === questions[1].correctAnswer) {
game.correct++;
}
else {
game.incorrect++;
}
});
$.each($("input[name='question-2']:checked"), function() {
if ($(this).val() === questions[2].correctAnswer) {
game.correct++;
}
else {
game.incorrect++;
}
});
$.each($("input[name='question-3']:checked"), function() {
if ($(this).val() === questions[3].correctAnswer) {
game.correct++;
}
else {
game.incorrect++;
}
});
$.each($("input[name='question-4']:checked"), function() {
if ($(this).val() === questions[4].correctAnswer) {
game.correct++;
}
else {
game.incorrect++;
}
});
$.each($("input[name='question-5']:checked"), function() {
if ($(this).val() === questions[5].correctAnswer) {
game.correct++;
}
else {
game.incorrect++;
}
});
$.each($("input[name='question-6']:checked"), function() {
if ($(this).val() === questions[6].correctAnswer) {
game.correct++;
}
else {
game.incorrect++;
}
});
$.each($("input[name='question-7']:checked"), function() {
if ($(this).val() === questions[7].correctAnswer) {
game.correct++;
}
else {
game.incorrect++;
}
});
    
this.result();
},
//RESULTS PAGE
result: function() {
clearInterval(timer);
$("#sub-wrapper h2").remove();
panel.html("<h2>All Done!</h2>");
panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
}
};

// CLICK EVENTS
$(document).on("click", "#start", function() {
game.start();
});
$(document).on("click", "#done", function() {
game.done();
});
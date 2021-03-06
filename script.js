
/*---STORE FOR QUESTIONS AND ANSWERS---*/

//store Q & A content
  // quiz designed to respond dynamically to more or less questions, and to use correctAnswer "ID" concept rather than string of answer text to reduce possiblity of code errors if updates to answer text are needed
  //would eventually need to be stored more securely so answers not obvious in browser

const myQuestions = [
  {
    question: "What is the most commonly used emoji in the U.S.?",
    questionIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/smiling-face-with-heart-shaped-eyes_1f60d.png',
    questionAlt: 'face with hearts for eyes emoji',
    answers: {
      a1: "Basic smiling face 🙂",
      a2: "Tears of joy 😂",
      a3: "Heart ❤️",
      a4: "Crying loud 😭"
    },
    correctAnswer: "a2",
    correctIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/face-with-party-horn-and-party-hat_1f973.png',
    correctAlt: 'emoji face with party horn and hat and confetti',
    wrongIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/flushed-face_1f633.png',
    wrongAlt: 'ashamed blushing and wide-eyed emoji face'
  },
   {
    question: "What is the original designer's description of this emoji?",
    questionIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/155/man-in-business-suit-levitating_1f574.png',
    questionAlt: 'man in suit levitating emoji',
    answers: {
      a1: "Business man jumping with happiness",
      a2: "Man in Black pulled up in alien tractor beam",
      a3: "Exclamation mark shaped like rude boy logo",
      a4: "Frank Sinatra's 'Fly Me to the Moon'"
    },
    correctAnswer: "a3",
    correctIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/clapping-hands-sign_1f44f.png',
    correctAlt: 'clapping hands emoji',
    wrongIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/moyai_1f5ff.png',
    wrongAlt: 'maoi emoji looking vaguely confused and concerned'
  },
  {
    question: "What is the origin country of emojis?",
    questionIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/world-map_1f5fa.png',
    questionAlt: 'world map emoji',
    answers: {
      a1: "Germany 🏰",
      a2: "Japan ⛩️",
      a3: "United States 🗽",
      a4: "China 🐉"
    },
    correctAnswer: "a2",
    correctIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/sparkles_2728.png',
    correctAlt: 'sparkling stars emoji',
    wrongIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/face-with-head-bandage_1f915.png',
    wrongAlt: 'sad emoji face with bandaged head'
  },
  {
    question: "What is the most common meaning of this emoji?",
    questionIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/nail-polish_emoji-modifier-fitzpatrick-type-1-2_1f485-1f3fb_1f3fb.png',
    questionAlt: 'pale skin tone fingers with purple nail polish emoji',
    answers: {
      a1: "Nonchalance / indifference",
      a2: "Girl power",
      a3: "Fashionista",
      a4: "Very pretty / beautiful"
    },
    correctAnswer: "a1",
    correctIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/confetti-ball_1f38a.png',
    correctAlt: 'confetti ball emoji',
    wrongIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/shocked-face-with-exploding-head_1f92f.png',
    wrongAlt: 'exploding head emoji'
  },
    {
    question: "Which of these is NOT a real alternate emoji name listed on Emojipedia?",
    questionIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/face-with-no-good-gesture_emoji-modifier-fitzpatrick-type-5_1f645-1f3fe_1f3fe.png',
    questionAlt: 'medium dark skin tone female emoji gesturing no good',
    answers: {
      a1: "Airing of Grievances 😤",
      a2: "Food Baby 🤰",
      a3: "Home Alone 😱",
      a4: "Mansplaining 🗣️"
    },
    correctAnswer: "a2",
    correctIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/baby-angel_emoji-modifier-fitzpatrick-type-3_1f47c-1f3fc_1f3fc.png',
    correctAlt: 'baby angel emoji with medium light skin tone',
    wrongIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/face-with-open-mouth-vomiting_1f92e.png',
    wrongAlt: 'emoji face with green vomit pouring out of open mouth'
  },
  {
    question: '"<i>Moby Dick</i>" was officially translated into emojis in 2013. Which is the first line, "Call me Ishmael?"',
    questionIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/ledger_1f4d2.png',
    questionAlt: 'ledger book emoji',
    answers: {
      a1: "🤙 🐋 🔪",
      a2: "📞 👉😐 🚣‍♂️",
      a3: "☎️ 👨 ⛵ 🐳 👌",
      a4: "🗣️ 👤 😕 📫"
    },
    correctAnswer: "a3",
    correctIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/person-bowing-deeply_1f647.png',
    correctAlt: 'person bowing emoji',
    wrongIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/face-with-finger-covering-closed-lips_1f92b.png',
    wrongAlt: 'shush face emoji with finger over lips'
  },
  {
    question: "What is this emoji used for?",
    questionIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/person-raising-both-hands-in-celebration_emoji-modifier-fitzpatrick-type-5_1f64c-1f3fe_1f3fe.png',
    questionAlt: 'emoji hands raised with medium skin tone',
    answers: {
      a1: "Praise the lord",
      a2: "Celebration",
      a3: "Stick 'em up / Black Lives Matter 😟",
      a4: "All of the above"
    },
    correctAnswer: "a4",
    correctIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/nerd-face_1f913.png',
    correctAlt: 'nerd face emoji',
    wrongIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/skull-and-crossbones_2620.png',
    wrongAlt: 'skull and crossbones emoji'
  },
  {
    question: "What is the current least popular emoji (according to tweet frequency)?",
    questionIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/unamused-face_1f612.png',
    questionAlt: 'unimpressed emoji',
    answers: {
      a1: "Yen chart 💹",
      a2: "Non-potable water 🚱",
      a3: "Map of Japan in silhouette 🗾",
      a4: "Latin letters symbol 🔤 "
    },
    correctAnswer: "a4",
    correctIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/155/hundred-points-symbol_1f4af.png',
    correctAlt: '100 points emoji',
    wrongIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/bomb_1f4a3.png',
    wrongAlt: 'bomb with fuse lit emoji'
  },
  {
    question: "What does this emoji depict?",
    questionIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/japanese-goblin_1f47a.png',
    questionAlt: 'red mask emoji',
    answers: {
      a1: "Violent British puppet 'Punch'",
      a2: "'Tengu' trickster goblin mask",
      a3: "'Liar,' with long nose like Pinocchio",
      a4: "'Villian,' inspired by Mario Bros archnemisis Wario"
    },
    correctAnswer: "a2",
    correctIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/smiling-face-with-sunglasses_1f60e.png',
    correctAlt: 'cool emoji face wearing sunglasses',
    wrongIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/thinking-face_1f914.png',
    wrongAlt: 'emoji thinking face'
  },
  {
    question: "Which of these is NOT a real alternate emoji name listed by Emojipedia?",
    questionIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/face-with-uneven-eyes-and-wavy-mouth_1f974.png',
    questionAlt: 'goofy drunken blushing emoji face',
    answers: {
      a1: "Let's Party 👯",
      a2: "Vaping 💨",
      a3: "I Am A Witness 👁️‍🗨️",
      a4: "Double Duty 💩"
    },
    correctAnswer: "a4",
    correctIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/unicorn-face_1f984.png',
    correctAlt: 'unicorn emoji',
    wrongIcon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojipedia/181/yawning-face_1f971.png',
    wrongAlt: 'yawning and exhausted emoji face'
  }
];

/*---CREATE QUIZ Q & A HTML---*/

function buildQuiz() {

  // place to store the HTML output
  const quizHTML = [];

  // iterating through each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // store the list of answer choices
    const answers = [];

    // and for each available answer...
    for (aID in currentQuestion.answers) {
      // ...add an HTML radio button
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${aID}">  
          ${currentQuestion.answers[aID]}
        </label>`
      );
    }

    // add this question, its answers and submit button to the output
    quizHTML.push(
      `<div class="slide">
         <div class="question"> ${currentQuestion.question} </div>
         <div class="questionImage"><img src="${currentQuestion.questionIcon}" alt="${currentQuestion.questionAlt}"></div>
         <div class="answers" role="radiogroup"> ${answers.join("")} </div><div><button type="submit" class="submitButton">Submit</button></div>
      </div>`
    );
  });

  // combine into one string of HTML to display on the page
  quizContainer.innerHTML = quizHTML.join("");
} 

/*---PREP QUIZ START---*/

//set counters at 0
let questionCounter = 0;
let scoreCounter = 0;
let currentSlide = 0;

//initiate quiz
function startQuiz() {
  $('.quizStart').on('click', '.startButton', function (event) {
    $('.quizStart').remove();
    $('.bannerArea').toggleClass("fadeOut");
    $('.quizForm').show();
    $('.questionCounter').text(1);
  });
}

/*---CONTROL QUIZ FLOW---*/

//increase question counter
function increaseQuestionCounter() {
  questionCounter ++;
  $('.questionCounter').text(questionCounter+1);
} 

//increase score counter
function increaseScoreCounter() {
  //update running score
  scoreCounter ++;
  $('.scoreCounter').text(scoreCounter);
}

//what happens when the user clicks 'next'
function renderNextQuestion () {
  $('main').on('click', '#next', function (event) {
    //if final question, show total score, closing message and restart button
    if (questionCounter + 1 === myQuestions.length) {
      //load results and restart button
      $(".feedback").hide();
      showResults();
      restartQuiz();
    } else {
      //increase question counter, show next question
      increaseQuestionCounter();
      showNextSlide();
    }
  });
}

//restart quiz function - reloads page to start quiz over
function restartQuiz() {
  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
}

//for when final question is answered - show results div and restart button
function showResults() {

  //show results text
  if (scoreCounter >= questionCounter + 1) {
    resultsContainer.innerHTML = `<div class="answerFeedback"><h3>You're on fire!</h3><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/fire_1f525.png" alt="fire emoji"/><p>You got ${scoreCounter} / ${questionCounter + 1}</p><p>You are a bonafide emoji supergenius!</p><button class="restartButton">Restart Quiz</button></div>`;
  } else if (scoreCounter >= (questionCounter + 1) * 0.75) {
    resultsContainer.innerHTML = `<div class="answerFeedback"><h3>You're good!</h3><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/thumbs-up-sign_1f44d.png" alt="emoji thumbs up"/><p>You got ${scoreCounter} / ${questionCounter + 1}</p><p>You basically know <i>everything!</i></p><button class="restartButton">Restart Quiz</button></div>`;
  } else if (scoreCounter < (questionCounter + 1) * 0.75 && scoreCounter >= (questionCounter + 1) * 0.5) {
    resultsContainer.innerHTML = `<div class="answerFeedback"><h3>Fist bump!</h3><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/fisted-hand-sign_1f44a.png" alt="emoji fist bump"/><p>You got ${scoreCounter} / ${questionCounter + 1}</p><p>You're still better than average, bro!</p><button class="restartButton">Restart Quiz</button></div>`;
  } else {
    resultsContainer.innerHTML = `<div class="answerFeedback"><h3>Hope for the future</h3><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/hand-with-index-and-middle-fingers-crossed_1f91e.png" alt="emoji fingers crossed"/><p>You got ${scoreCounter} / ${questionCounter + 1}</p><p>Better luck next time!</p><button class="restartButton">Restart Quiz</button></div>`;
  }

  //update final score
  scoreSpan.innerHTML = `${scoreCounter}`;
  $('.scoreCounter').hide();
  $('.finalScore').show();
}

/*---SUBMIT BEHAVIOR AND USER SELECTION "GRADING"---*/

//on answer submit
function initUserAnswer() {
  $('form').on('submit', function (event) {
    //disable default submit
    event.preventDefault();

    // gather answer containers from quiz
    let answerContainers = quizContainer.querySelectorAll(".answers");
    // find selected answer
    let answerContainer = answerContainers[questionCounter];
    let selector = `input[name=question${questionCounter}]:checked`;
    let userAnswer = (answerContainer.querySelector(selector));
    if (!userAnswer) {
      return;
    }
    //store user answer value
    userAnswer = userAnswer.value;
    let correctAnswer = `${myQuestions[questionCounter].correctAnswer}`;

    //hide question
    $(".quiz-container").hide();

    // if answer is correct
    if (userAnswer === correctAnswer) {
      //increase score by one if not last question
      if (questionCounter < myQuestions.length) {
      increaseScoreCounter();
      }
      //display correct message
      $('.feedback').html(`<div class="answerFeedback feedbackActiveSlide"><div class="icon"><img src="${myQuestions[questionCounter].correctIcon}" alt="${myQuestions[questionCounter].correctAlt}"/></div><p>You got it right!</p><button id="next">Next</button></div>`);

    } else {
      // if answer is incorrect
      //display incorrect message
      $('.feedback').html(`<div class="answerFeedback feedbackActiveSlide"><div class="icon"><img src="${myQuestions[questionCounter].wrongIcon}" alt="${myQuestions[questionCounter].wrongAlt}"/></div><p>You got it wrong,<br>the correct answer is <span>"${myQuestions[questionCounter].answers[myQuestions[questionCounter].correctAnswer]}."</span></p><button id="next">Next</button></div>`);
    }

    //show feedback
    $(".answerFeedback").show();

  }); //end submit function
} //end initUserAnswer

/*---QUIZ DISPLAY AND SLIDE PAGINATION---*/

function showSlide() {
  //show current slide
  $(".slide").eq([currentSlide]).addClass("active-slide");
}

function showNextSlide() {
  $(".answerFeedback").hide();
  $(".slide").eq([currentSlide]).removeClass("active-slide");
  currentSlide ++;
  $(".quiz-container").show();
  $(".slide").eq([currentSlide]).addClass("active-slide");

  //update focus to answer area
  let firstAnswer = `input[name=question${questionCounter}]:nth(0)`;
  $(firstAnswer).focus();
}

//content containers
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const scoreSpan = document.getElementById("finalScore");

/*---RUN QUIZ!---*/

// display quiz right away
buildQuiz();
showSlide(0);

//initial quiz generation
function createQuiz () {
  $('.questionTotal').text(`${myQuestions.length}`);
  startQuiz();
  initUserAnswer();
  renderNextQuestion();
}

$(createQuiz);
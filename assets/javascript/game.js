$(document).ready(function() {

        var gameDisplay = $("#gameDisplay"); //variable for the div on the mainpage
        //var for the audio
        var scareyAudio = new Audio("assets/audio/funeral.wav"); //audio to play throught the entire game

        var quiz = [ //Object with the Quiz question, choices [array], image, and the correct choice
            {
                question: "Bram Stoker classified Dracula as..?",
                image: '<img id="image" src="assets/images/dracula.jpg"/>',
                choices: ["King of Vampyres", "A Lycanthrope", "A thousand year old Pharoh", "A campsite serial killer"],
                correct: "King of Vampyres"
            },

            {
                question: "According to author Mary Shelly, his name is not actually Frankenstien but..?",
                image: '<img id="image" src="assets/images/frank.jpg"/>',
                choices: ["Experiment 206", "Trumpenstien", "Frankenstiens Monster", "The Wanted"],
                correct: "Frankenstiens Monster"
            },

            {
                question: "The Creature From The Black Lagoon is a..?",
                image: '<img id="image" src="assets/images/creature2.jpg"/>',
                choices: ["A Laboratory Monster", "A Sea Creature", "Cthulhu Monster", "A Gill-Man"],
                correct: "A Gill-Man"
            },

            {
                question: "Over a 1,000 years ago, He was a..?",
                image: '<img id="image" src="assets/images/mummy.jpg"/>',
                choices: ["A Time Lord", "King of Vampyres", "A Mad Scientest", "A Pharoh"],
                correct: "A Pharoh"
            },

            {
                question: "In America it's known as Godzilla, but in Japan it's called..?",
                image: '<img id="image" src="assets/images/gojira.jpg"/>',
                choices: ["Tetsujun 28", "Gojira", "Rodan", "Mazinga Z"],
                correct: "Gojira"
            },
        ];

        //start the setTimeout feature for the questions
        // startGame();
        var correct = 0;
        var incorrect = 0;
        scareyAudio.play();
        start();

        function start() {
            gameDisplay.append('<h1 id="title">VINTAGE MONSTER TRIVIA</h1>');
            gameDisplay.append('<img id="title-image" src="assets/images/classic.jpg"/>');
            gameDisplay.append('<div><button id="start">Start The Game</button></div>');
            
            
            $("#start").click(function() {
                timer();
            });
        }

        function timer() {
            setTimeout(question1, 1000);
            setTimeout(question2, 7000);
            setTimeout(question3, 14000);
            setTimeout(question4, 21000);
            setTimeout(question5, 28000);
            setTimeout(timeUp, 35000);
        };


        //general layout of the function
        function question1() {
            gameDisplay.empty();
            gameDisplay.append('<h2 class="question">' + quiz[0].question + '</h2>');
            gameDisplay.append('<h3 class="choice">' + quiz[0].choices[0] + '</h3>');
            gameDisplay.append('<h3 class="choice">' + quiz[0].choices[1] + '</h3>');
            gameDisplay.append('<h3 class="choice">' + quiz[0].choices[2] + '</h3>');
            gameDisplay.append('<h3 class="choice">' + quiz[0].choices[3] + '</h3>');
            gameDisplay.append(quiz[0].image);
            $(".choice").click(function(e) {
                var selectedChoice = $(e.target).text();
                if (selectedChoice == quiz[0].correct) {
                    correct++;
                    gameDisplay.append('<h3 class="status">CORRECT!</h3>');
                } else if (selectedChoice !== quiz[0].correct) {
                    gameDisplay.append('<h3 class="status" id="incorrect">INCORRECT!</h3>');
                    incorrect++;
                }
                $(".choice").off('click');
            }); //end click


        };

        function question2() {
            gameDisplay.empty();
            gameDisplay.append('<h2 class="question">' + quiz[1].question + '</h2>');
            gameDisplay.append('<h3 class="choice">' + quiz[1].choices[0] + '</h3>');
            gameDisplay.append('<h3 class="choice">' + quiz[1].choices[1] + '</h3>');
            gameDisplay.append('<h3 class="choice">' + quiz[1].choices[2] + '</h3>');
            gameDisplay.append('<h3 class="choice">' + quiz[1].choices[3] + '</h3>');
            gameDisplay.append(quiz[1].image);
            $(".choice").click(function(e) {
                var selectedChoice = $(e.target).text();
                if (selectedChoice == quiz[1].correct) {
                    correct++;
                    gameDisplay.append('<h3 class="status">CORRECT!</h3>');
                } else if (selectedChoice !== quiz[1].correct) {
                    gameDisplay.append('<h3 class="status" id="incorrect">INCORRECT!</h3>');
                    incorrect++;
                }
                $(".choice").off('click');
            }); //end click
        };

        function question3() {
            gameDisplay.empty();
            gameDisplay.append('<h2 class="question">' + quiz[2].question + '</h2>');
            gameDisplay.append('<h3 class="choice">' + quiz[2].choices[0] + '</h3>');
            gameDisplay.append('<h3 class="choice">' + quiz[2].choices[1] + '</h3>');
            gameDisplay.append('<h3 class="choice">' + quiz[2].choices[2] + '</h3>');
            gameDisplay.append('<h3 class="choice">' + quiz[2].choices[3] + '</h3>');
            gameDisplay.append(quiz[2].image);
            $(".choice").click(function(e) {
                var selectedChoice = $(e.target).text();
                if (selectedChoice == quiz[2].correct) {
                    correct++;
                    gameDisplay.append('<h3 class="status">CORRECT!</h3>');
                } else if (selectedChoice !== quiz[2].correct) {
                    gameDisplay.append('<h3 class="status" id="incorrect">INCORRECT!</h3>');
                    incorrect++;
                }
                $(".choice").off('click');
            }); //end click
        };

        function question4() {
            gameDisplay.empty();
            gameDisplay.append('<h2 class="question">' + quiz[3].question + '</h2>');
            gameDisplay.append('<h3 class="choice">' + quiz[3].choices[0] + '</h3>');
            gameDisplay.append('<h3 class="choice">' + quiz[3].choices[1] + '</h3>');
            gameDisplay.append('<h3 class="choice">' + quiz[3].choices[2] + '</h3>');
            gameDisplay.append('<h3 class="choice">' + quiz[3].choices[3] + '</h3>');
            gameDisplay.append(quiz[3].image);
            $(".choice").click(function(e) {
                var selectedChoice = $(e.target).text();
                if (selectedChoice == quiz[3].correct) {
                    correct++;
                    gameDisplay.append('<h3 class="status">CORRECT!</h3>');
                } else if (selectedChoice !== quiz[3].correct) {
                    gameDisplay.append('<h3 class="status" id="incorrect">INCORRECT!</h3>');
                    incorrect++;
                }
                $(".choice").off('click');
            }); //end click
        };

        function question5() {
            gameDisplay.empty();
            gameDisplay.append('<h2 class="question">' + quiz[4].question + '</h2>');
            gameDisplay.append('<h3 class="choice">' + quiz[4].choices[0] + '</h3>');
            gameDisplay.append('<h3 class="choice">' + quiz[4].choices[1] + '</h3>');
            gameDisplay.append('<h3 class="choice">' + quiz[4].choices[2] + '</h3>');
            gameDisplay.append('<h3 class="choice">' + quiz[4].choices[3] + '</h3>');
            gameDisplay.append(quiz[4].image);
            $(".choice").click(function(e) {
                var selectedChoice = $(e.target).text();
                if (selectedChoice == quiz[4].correct) {
                    correct++;
                    gameDisplay.append('<h3 class="status">CORRECT!</h3>');
                } else if (selectedChoice !== quiz[4].correct) {
                    gameDisplay.append('<h3 class="status" id="incorrect">INCORRECT!</h3>');
                    incorrect++;
                }
                $(".choice").off('click');
            }); //end click
        };

        function timeUp() {
            var missed = quiz.length - (correct + incorrect);
            gameDisplay.empty();
            gameDisplay.append('<h2>TIME IS UP!</h2>');
            gameDisplay.append('<h3 id="correct">you answered ' + correct + ' correct!</h3>');
            gameDisplay.append('<h3 id="incorrect">you answered ' + incorrect + ' incorrect!</h3>');
            gameDisplay.append('<h3 id="missed">you missed ' + missed + ' questions!</h3>');
            gameDisplay.append('<a id="link" href="https://www.youtube.com/playlist?list=PL1319A5B702531044" target="_blank">Monster Movies!</a>');
            gameDisplay.append('<div><button id="restart">Restart The Game</button></div>')
            $("#restart").click(function() {
                location.reload();
            });
            scareyAudio.pause();
        }

    }) //end document.ready
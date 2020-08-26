const container = document.querySelector(".container"),
      player = document.querySelector("#player audio"),
      answersContainer = document.querySelector(".answers"),
      answers = document.querySelectorAll(".answer"),
      next = document.querySelector("#next");

let questions = [
    {
        composer: "Sergey Rachmaninoff",
        piece: "Rhapsody on a Theme of Paganini",
        part: "Variation 18: Andante cantabile",
        cataloge: "Op. 43",
        fileMP3: "audio/rachmaninoff/rachmaninoff.mp3",
        fileOGG: "audio/rachmaninoff/rachmaninoff.ogg",
        options: [
            {name: "Bach - Harpsichord Concerto in D minor", correct: false},
            {name: "Beethoven - Symphony No. 9 in D minor" , correct: false},
            {name: "Mozart -  Fantasia No. 3 in D minor" , correct: false},
            {name: "Rachmaninoff - Rhapsody on a Theme of Paganini" , correct: true},
        ]

    },

    {
        composer: "J.S. Bach",
        piece: "Harpsichord Concerto in D minor",
        part: "First movement",
        cataloge: "BWV 1052",
        fileMP3: "audio/bach/bach.mp3",
        fileOGG: "audio/bach/bach.ogg",
        options: [
            {name: "Bach - Harpsichord Concerto in D minor", correct: true},
            {name: "Beethoven - Symphony No. 9 in D minor" , correct: false},
            {name: "Mozart -  Fantasia No. 3 in D minor" , correct: false},
            {name: "Rachmaninoff - Rhapsody on a Theme of Paganini" , correct: false},
        ]

    },


    {
        composer: "L.V. Beethoven",
        piece: "Symphony No. 9 in D minor",
        part: "Second movement",
        cataloge: "Op. 125",
        fileMP3: "audio/beethoven/beethoven.mp3",
        fileOGG: "audio/beethoven/beethoven.ogg",
        options: [
            {name: "Bach - Harpsichord Concerto in D minor", correct: false},
            {name: "Beethoven - Symphony No. 9 in D minor" , correct: true},
            {name: "Mozart -  Fantasia No. 3 in D minor" , correct: false},
            {name: "Rachmaninoff - Rhapsody on a Theme of Paganini" , correct: false},
        ]

    },


    {
        composer: "W.A Mozart",
        piece: "Fantasia No. 3 in D minor",
        part: "",
        cataloge: "K. 397",
        fileMP3: "audio/mozart/mozart.mp3",
        fileOGG: "audio/mozart/mozart.ogg",
        options: [
            {name: "Bach - Harpsichord Concerto in D minor", correct: false},
            {name: "Beethoven - Symphony No. 9 in D minor" , correct: false},
            {name: "Mozart -  Fantasia No. 3 in D minor" , correct: true},
            {name: "Rachmaninoff - Rhapsody on a Theme of Paganini" , correct: false},
        ]

    },
];
    let shuffledQuestions = questions.sort(() => -(Math.random() - 0.5)),
        currentIndex = 0;
       function nextPiece(){
           player.src = shuffledQuestions[currentIndex].fileMP3;
            shuffledQuestions[currentIndex].options.forEach((option) => {
                const button = document.createElement("button");
                button.innerText = option.name;
                if(option.correct){
                    button.dataset.correct = true;
                }
                button.classList.add("answer");
                button.addEventListener("click", selectAnswer);
                
                answersContainer.appendChild(button);
        });
        next.classList.add("hide");
        }

        function selectAnswer(e){
            if(e.target.dataset.correct){
                e.target.classList.add("correct");
                currentIndex ++;
                next.classList = "";
            } else{
                e.target.classList.add("wrong");
            }
        }
        window.onload = nextPiece;
        next.addEventListener("click", () => {
            answersContainer.innerHTML = "";
            if(currentIndex < questions.length){
                nextPiece();
            } else {
                container.innerHTML = '<h2 style="color: white;">Finish</h2>';
            }
        });
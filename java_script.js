
// let question =prompt('How old are you?')

// let answer =prompt('thank you'),


questions = [


    {
        question: 'O`zbekiston Respublikasi Qachon mustaqillikga erishdi',
        answers: ['a:1991-yil 31- avgust', 'b:1992-yil 31 avgust', 'c:1994-yil 31 avgust', 'd:1995-yil 31 avgust'],
        result: 'a'
    },
    {
        question: 'How old are you?',

        answers: ['a: 8', 'b:18', 'c:20', 'd: 24'],

        result: "d"

    },

]

let correctAnswer = 0;

for (let index = 0; index < questions.length; index++) {

    let answe = prompt(questions[index].question + "\n" + questions[index].answers.join("\n"));
let userAnswers;
    if (userAnswers == questions[index].result) {
        correctAnswer++;
    }
    else if (userAnswers === "question") {
        break;
    }
    else if (userAnswers === "new") {
        continue;
    }

    else if (userAnswers == "" || userAnswers == null) {
        alert("Siz variant belgilamadingiz");
    }

   

}
alert("Siz " + questions.length + " ta savoldan " + correctAnswer + " ta to'gri bajardingiz.");


if (correctAnswer >= questions.length - 3) {
    alert(" Siz bu testni to'g'ri bajardingiz");
}


else if (correctAnswer == questions.length - 5 < questions.length - 3) {
    alert("  Siz  bu testni 45% bajardingiz.");
}

else {
    alert(" Siz bu testni bajara olmadingiz");
}

















































 

























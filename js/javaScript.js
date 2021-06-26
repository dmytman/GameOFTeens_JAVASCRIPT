const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");


class Quiz {
    constructor(type, questions, results) {

        this.type = type;

        this.questions = questions;

        this.results = results;

        this.score = 0;

        this.result = 0;

        this.current = 0;
    }

    Click(index) {

        let value = this.questions[this.current].Click(index);
        this.score += value;

        let correct = -1;


        if (value >= 1) {
            correct = index;
        }
        else {

            for (let i = 0; i < this.questions[this.current].answers.length; i++) {
                if (this.questions[this.current].answers[i].value >= 1) {
                    correct = i;
                    break;
                }
            }
        }

        this.Next();

        return correct;
    }


    Next() {
        this.current++;

        if (this.current >= this.questions.length) {
            this.End();
        }
    }


    End() {
        for (let i = 0; i < this.results.length; i++) {
            if (this.results[i].Check(this.score)) {
                this.result = i;
            }
        }
    }
}

class Question {
    constructor(text, answers) {
        this.text = text;
        this.answers = answers;
    }

    Click(index) {
        return this.answers[index].value;
    }
}

class Answer {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }
}


class Result {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }

    Check(value) {
        if (this.value <= value) {
            return true;
        }
        else {
            return false;
        }
    }
}


const results =
    [
        new Result("Вчися далі!", 2),
        new Result("Спробуй щось інше", 4),
        new Result("Ти можеш краще!", 6),
        new Result("Все майже правильно,для початку це навіть дуже добре.", 8),
        new Result("Чудово!Це точно твій напрямок!", 10)
    ];


const questions =
    [
        new Question("Скільки є типів даних?",
            [
                new Answer("0", 0),
                new Answer("2", 0),
                new Answer("5", 1),
                new Answer("4", 0)
            ]),

        new Question("Що таке масив?",
            [
                new Answer("Це структура даних для зберігання і маніпулювання колекцією індексованих значень", 1),
                new Answer("Такого не існує", 0),
                new Answer("Це те,що ми бачимо на сайті", 0),
                new Answer("Це звичайний текст", 0)
            ]),

        new Question("Що таке функція?",
            [
                new Answer("Такого не існує", 0),
                new Answer("Це те,що ми бачимо на сайті", 0),
                new Answer("Це наповнення вебсторінки контентом, структуризацію інформації та виділення логічних блоків", 0),
                new Answer("Це підпрограма, незалежна частина коду, призначена для виконання конкретного завдання.", 1)
            ]),

        new Question("Що таке об'єкт?",
            [
                new Answer("Це текст", 0),
                new Answer("Такого не існує", 0),
                new Answer("Це асоціативний масив, тип даних, який зберігає властивості (properties) і методи (methods).", 1),
                new Answer("Це те,що ми бачимо на сайті", 0)
            ]),

        new Question("Що робить forEach()?",
            [
                new Answer("Перебирає,не повертає", 0),
                new Answer("Перебирає,може змінювати,повертає", 0),
                new Answer("Перебирає,може змінювати,не повертає", 1),
                new Answer("Такого не існує", 0)
            ]),

        new Question("Що робить map()?",
            [
                new Answer("Використовується для трансформації масиву,Перебирає,Не змінює,Повертає колекцію", 1),
                new Answer("Такого не існує", 0),
                new Answer("Перебирає,може змінювати,повертає", 0),
                new Answer("Перебирає,не повертає", 0)
            ]),

        new Question("Що робить filter()?",
            [
                new Answer("Використовується для трансформації масиву,Перебирає,Не змінює,Повертає колекцію", 0),
                new Answer("Перебирає,Не змінює,Повертає колекцію", 1),
                new Answer("Перебирає,може змінювати,повертає", 0),
                new Answer("Перебирає,не повертає", 0)
            ]),

        new Question("Що таке DOM?",
            [
                new Answer("Це текст", 0),
                new Answer("Це  міжплатформовий, незалежний від мови інтерфейс для роботи з HTML-документом", 1),
                new Answer("Це модалка", 0),
                new Answer("Такого не існує", 0)
            ]),

        new Question("Як створити вузол?",
            [
                new Answer("const heading = document.makeElement('h1');", 0),
                new Answer("Такого не існує", 0),
                new Answer("const heading = document.createElement('h1');", 1),
                new Answer("const heading = document.createtElement('h1');", 0)
            ]),
        new Question("Якої події не існує?",
            [
                new Answer("submit", 0),
                new Answer("focus", 0),
                new Answer("сlik", 1),
                new Answer("keydown", 0)
            ]),
    ];


const quiz = new Quiz(1, questions, results);

Update();


function Update() {

    if (quiz.current < quiz.questions.length) {

        headElem.innerHTML = quiz.questions[quiz.current].text;


        buttonsElem.innerHTML = "";


        for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
            let btn = document.createElement("button");
            btn.className = "button";

            btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

            btn.setAttribute("index", i);

            buttonsElem.appendChild(btn);
        }


        pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

        Init();
    }
    else {

        buttonsElem.innerHTML = "";
        headElem.innerHTML = quiz.results[quiz.result].text;
        pagesElem.innerHTML = "Очки: " + quiz.score;
    }
}

function Init() {

    let btns = document.querySelectorAll(".button");

    for (let i = 0; i < btns.length; i++) {

        btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
    }
}

function Click(index) {

    let correct = quiz.Click(index);


    let btns = document.querySelectorAll(".button");


    for (let i = 0; i < btns.length; i++) {
        btns[i].className = "button button_passive";
    }


    if (quiz.type == 1) {
        if (correct >= 0) {
            btns[correct].className = "button button_correct";
        }

        if (index != correct) {
            btns[index].className = "button button_wrong";
        }
    }
    else {

        btns[index].className = "button button_correct";
    }

    setTimeout(Update, 1000);
}
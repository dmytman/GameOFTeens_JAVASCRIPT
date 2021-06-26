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
        new Result("Думаю,це не твій напрямок.А може я просто помиляюсь?", 2),
        new Result("Спробуй щось інше", 4),
        new Result("Я вірю,ти можеш краще!", 6),
        new Result("Все майже правильно,для початку це навіть дуже добре.", 8),
        new Result("Ти молодець,все ідеально!Це точно твій напрямок!", 10)
    ];


const questions =
    [
        new Question("Чим відрізняються процедурна та об’єкто-орієнтована парадигми програмування?",
            [
                new Answer("Нічим", 0),
                new Answer("Такого взагалі не існує", 0),
                new Answer("Процедурна мова програмування складається з набору процедурних викликів і набору коду для кожної процедури. Структурна мова програмування підкреслює розділення даних програми від її функціональності", 1),
                new Answer("Структурна мова програмування складається з набору процедурних викликів і набору коду для кожної процедури. Процедурна мова програмування підкреслює розділення даних програми від її функціональності", 0)
            ]),

        new Question("Що таке cookie?",
            [
                new Answer("Це дані, які сайт зберігає у вас на комп'ютері, щоб вам було зручно з цим сайтом працювати. ", 1),
                new Answer("Такого не існує", 0),
                new Answer("Це те,що ми бачимо на сайті", 0),
                new Answer("Це звичайний текст", 0)
            ]),

        new Question("Що таке програмна інженерія??",
            [
                new Answer("Такого не існує", 0),
                new Answer("Це те,що ми бачимо на сайті", 0),
                new Answer("Це наповнення вебсторінки контентом, структуризацію інформації та виділення логічних блоків", 0),
                new Answer("Це процес аналізу вимог користувача, а потім проектування, побудова та тестування програмного забезпечення, яке задовольнить ці вимоги.", 1)
            ]),

        new Question("Що таке область видимості в змінних?",
            [
                new Answer("Це текст", 0),
                new Answer("Такого не існує", 0),
                new Answer("Це ділянка програми, де існує окрема множина імен, пов'язаних із певними даними (змінними) чи оголошеннями (функціями, класами тощо)", 1),
                new Answer("Це те,що ми бачимо на сайті", 0)
            ]),

        new Question("Що означає introspection?",
            [
                new Answer("Це те,що ми бачимо на сайті", 0),
                new Answer("Це ділянка програми, де існує окрема множина імен, пов'язаних із певними даними (змінними) чи оголошеннями (функціями, класами тощо)", 0),
                new Answer("Це означає, що для будь-якого об'єкта можна отримати всю інформацію про його внутрішню структуру і середовище виконання ", 1),
                new Answer("Такого не існує", 0)
            ]),

        new Question("Що таке клас?",
            [
                new Answer("Це шаблон для створення об'єкту, користувацький тип, який описує устрій об'єктів, які йому належать. ", 1),
                new Answer("Без поняття", 0),
                new Answer("Це наповнення вебсторінки контентом, структуризацію інформації та виділення логічних блоків.", 0),
                new Answer("Просто так", 0)
            ]),

        new Question("Що таке ітератор ?",
            [
                new Answer("Це шаблон для створення об'єкту, користувацький тип, який описує устрій об'єктів, які йому належать. ", 0),
                new Answer("Це поведінковий патерн, що дозволяє послідовно обходити складну колекцію, не розкриваючи деталі її реалізації.", 1),
                new Answer("Це наповнення вебсторінки контентом, структуризацію інформації та виділення логічних блоків.", 0),
                new Answer("Такого не існує", 0)
            ]),

        new Question("Що таке генератор?",
            [
                new Answer("Це текст", 0),
                new Answer("Це об'єкт, який відразу при створенні не вирахував значення всіх своїх елементів.", 1),
                new Answer("Це модалка", 0),
                new Answer("Такого не існує", 0)
            ]),

        new Question("Що таке метаклас?",
            [
                new Answer("Це поведінковий патерн, що дозволяє послідовно обходити складну колекцію, не розкриваючи деталі її реалізації", 0),
                new Answer("Такого не існує", 0),
                new Answer("Це те, що створює об'єкти.", 1),
                new Answer("Це наповнення вебсторінки контентом, структуризацію інформації та виділення логічних блоків", 0)
            ]),
        new Question("Що таке set?",
            [
                new Answer("Такого не існує", 0),
                new Answer("Це те, що створює об'єкти", 0),
                new Answer("Це набір унікальних елементів у випадковому порядку", 1),
                new Answer("Не знаю", 0)
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
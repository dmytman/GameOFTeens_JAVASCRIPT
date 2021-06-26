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
        new Result("Тобі ще треба багато вчитися", 2),
        new Result("Схоже цей напрямок тобі не по душі. Обирай іншу категорію і спробуй свої сили в чомусь новому", 4),
        new Result("Підівчи теорію і спробуй ще раз", 6),
        new Result("Ти майже впорався. Відчуваєш це твоє? Обирай цей курс! Маєш сумніви - спробуй інший напрямок", 8),
        new Result("Ти попав в яблучко - цей напрямок ідеально підходить для тебе", 10)
    ];


const questions =
    [
        new Question("За,що відповідає Html?",
            [
                new Answer("За оформлення та позиціювання, представлення інформації на сторінці.", 0),
                new Answer("Ні за,що", 0),
                new Answer("За наповнення вебсторінки контентом, структуризацію інформації та виділення логічних блоків.", 1),
                new Answer("За додавання функціоналу, інтерактивної взаємодії з користувачем.", 0)
            ]),

        new Question("Що таке тег?",
            [
                new Answer("Це структура мови HTML, вони вказують браузеру, який ми хочемо створити елемент.", 1),
                new Answer("Це те, з чого вже складається вебсторінка після відкриття HTML документу у браузері.", 0),
                new Answer("Це те,що ми бачимо на сайті", 0),
                new Answer("Це звичайний текст", 0)
            ]),

        new Question("Якого тега не існує?",
            [
                new Answer("h2", 0),
                new Answer("img", 0),
                new Answer("p", 0),
                new Answer("buton", 1)
            ]),

        new Question("Через який тег в html додають css",
            [
                new Answer("script", 0),
                new Answer("lik", 0),
                new Answer("link", 1),
                new Answer("Такого тегу не існує", 0)
            ]),

        new Question("Тег a це...",
            [
                new Answer("Кнопка", 0),
                new Answer("Текст", 0),
                new Answer("Посилання", 1),
                new Answer("Такого тегу не існує", 0)
            ]),

        new Question("Для чого використовується CSS?",
            [
                new Answer("Для оформлення та позиціювання, представлення інформації на сторінці", 1),
                new Answer("Ні для чого", 0),
                new Answer("Для наповнення вебсторінки контентом, структуризацію інформації та виділення логічних блоків.", 0),
                new Answer("Просто так", 0)
            ]),

        new Question("Як працює каскад?",
            [
                new Answer("Каскаду не існує", 0),
                new Answer("Коли застосовні два правила, які мають однакову специфічність, використовується те, що йде в CSS першим", 0),
                new Answer("Коли застосовні два правила, які мають однакову специфічність, використовується те, що йде в CSS останнім", 1),
                new Answer("коли застосовні два правила, які мають однакову специфічність, використовується будь-яке з них", 0)
            ]),

        new Question("Як звертаються до класа в css?",
            [
                new Answer("/class", 0),
                new Answer(".class", 1),
                new Answer("{}class", 0),
                new Answer("'class", 0)
            ]),

        new Question("HTML/CSS це мова програмування",
            [
                new Answer("Java Script", 0),
                new Answer("C+++", 0),
                new Answer("Java", 1),
                new Answer("Python", 0)
            ]),
        new Question("Яка властивість міняє колір тексту?",
            [
                new Answer("bacground-color", 0),
                new Answer("colors", 0),
                new Answer("color", 1),
                new Answer("colir", 0)
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
let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    money,
    time,
    expenses: {
        "ответ на первый вопрос" : "ответ на второй вопрос"
    },
    optionalExpenses: {

    },
    income: [],
    savings: false
};
let daily = money / 30;

prompt("Введите обязательную статью расходов в этом месяце");
prompt("Во сколько обойдется");
let final = alert("Ваш бюджет на один день", daily);
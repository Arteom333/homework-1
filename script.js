var money, time;

function start() {
    money = +prompt("What's your budget for a month?", '');
    time = prompt('Enter date in format YYYY-MM-DD', '');

    while(isNaN(money) || money === '' || money === null) {
        money = +prompt("What's your budget for a month?", '');
    }
}
start();

var appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function() {
        for (var i = 0; i < 2; i++) {
            var a = prompt("Enter the required cost item in this month", ''),
                b = prompt("How much will it cost?", '');
            if (typeof(a) === 'string' && typeof(a) !== null && typeof(b) !== null && a !== '' && b !== '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);

        alert("Daily budget is: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Low level of income");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Medium level of income");
        } else if (appData.moneyPerDay > 2000) {
            console.log("High level of income");
        } else {
            console.log("An error has occured");
        }
    },
    checkSavings: function() {
        if (appData.savings === true) {
            let save = +prompt('What is the amount of savings?', ''),
                percent = +prompt('At what percentage?');
    
            appData.monthIncome = save/100/12*percent;
            alert("Your monthly income from your deposit" + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (var l = 0; l < 3; l++) {
            var c = prompt("Enter the optional cost item in this month", '');
            appData.optionalExpenses[l] = c;
        }
    },
    chooseIncome: function() {
        let items = prompt("What will bring additional income? (List with a comma)", "");
        
        if (typeof(items) !== 'string' && typeof(items) === null && items === '') {
                console.log('An error has occured');
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt("Anything else?"));
            appData.income.sort();
        } 

        appData.income.forEach(function(item, i) {
            alert("Ways to make extra money: " + (i+1) + ' - ' + item);
        });
    }
};

for (var key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ' - ' + appData[key]);
}

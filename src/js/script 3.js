alert("Задумайте число!");
alert("Умножте задумманое число на 2!");
alert("Прибавьте к полученному результату 7!");
number_intended = parseInt(prompt("Введите, что получилось"));
number_intended = (number_intended - 7) / 2;
alert(`Вы задумали число ${number_intended}`);
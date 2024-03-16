let lab1 = () => alert("Hello World!");
let lab2 = () => console.log("Hello World!");
let lab5 = () => alert("Текст1: " + prompt("Введите текст") + " Ответ: " + confirm("Ответ?"));
let lab6_1 = () => {
    num = parseInt(prompt("num"));
    num = num > 4 ? num + 5 : num;
    alert(num);
}
let lab6_2 = () => {
    alert(parseInt(prompt("num")) % 2 === 0 ? "четное" : "нечетное");
}
let lab6_3 = () => {
    number = parseInt(prompt("num"));
    if (number < 0) {
        alert("Число меньше нуля.");
    } else if (number === 0) {
        alert("Число равно нулю.");
    } else {
        alert("Число больше нуля.");
    }
}
let lab6_4 = () => {
    let userInput = prompt("Введите число от 1 до 7:");
    let day;
    switch (parseInt(userInput)) {
        case 1:
            day = "понедельник";
            break;
        case 2:
            day = "вторник";
            break;
        case 3:
            day = "среда";
            break;
        case 4:
            day = "четверг";
            break;
        case 5:
            day = "пятница";
            break;
        case 6:
            day = "суббота";
            break;
        case 7:
            day = "воскресенье";
            break;
        default:
            day = "Неверный день недели";
    }
    alert("День недели: " + day);
}
let lab8_a = () => {
    myArray = [3, 5, 7, 12, 8, 5, 1, 4, 3, 2, 12, 152, 53, 22, -1, -142];
    total = 0;
    myArray.forEach(num => total += num);
    console.log("Сумма чисел в массиве:", total);
}
let lab8_b = () => {
    myArray = [3, 5, 7, 12, 8, 5, 1, 4, 3, 2, 12, 152, 53, 22, -1, -142];
    max = myArray[0];
    myArray.forEach(num => max = max < num ? num : max);
    console.log("Максимальное число в массиве:", max);
}
let lab8_1 = () => {
    originalNumber = parseInt(prompt("число"));
    reversedNumber = parseInt(originalNumber.toString().split('').reverse().join(''));
    alert("Перевернутое число: " + reversedNumber);
}
let lab8_2 = () => {
    number = parseInt(prompt("число"));
    maxDigit = Math.max(...number.toString().split('').map(Number));
    alert("Самая большая цифра в числе " + number + " : " + maxDigit);
}
let lab8_3 = () => {
    n = prompt("число").toString();
    alert("сумма первой и последней цифры целого числа: " + (parseInt(n[0]) + parseInt(n[n.length - 1])));
}
let lab10_linear_algorithm_1 = () => {
    a = parseFloat(prompt("число 1"));
    b = parseFloat(prompt("число 2"));
    alert("Среднее арифметическое квадратов: "+((Math.pow(a,2)+Math.pow(b,2))/2)+"\n"+"Среднее арифметическое модулей: "+((Math.abs(a,2)+Math.pow(b,2))/2));
}
let lab10_linear_algorithm_2 = () => {
    a = parseFloat(prompt("число 1"));
    b = parseFloat(prompt("число 2"));
    alert("Площадь: "+(a*b/2)+"\n"+"Периметр: "+(a+b+Math.sqrt(Math.pow(a,2)+Math.pow(b,2))));
}
let lab10_linear_algorithm_3 = () => {
    a = parseFloat(prompt("длина ребра куба"));
    alert("Площадь грани куба: "+(Math.pow(a,2))+"\n"+"Площадь полной поверхности: "+(Math.pow(a,2)*6)+"\n"+"Объем куба: "+Math.pow(a,3));
}
let lab10_linear_algorithm_4 = () => {
    R = parseFloat(prompt("Радиус R"));
    alert("Длина окружности: "+(2*Math.PI*R)+"\n"+"Площадь круга: "+(Math.PI*Math.pow(R,2)));
}
let lab10_linear_algorithm_5 = () => {
    a = parseFloat(prompt("Длина стороны"));
    alert("Площадь равностороннего треугольника: "+((Math.sqrt(3)/4)*Math.pow(a,2))+"\nРадиус вписанной окружности: "+(a/(2*Math.sqrt(3)))+"\nРадиус описанной окружности: "+(a/Math.sqrt(3)));
}
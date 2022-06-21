/*  1.При нажатии на кнопку начать +
1.1 Сделать кнопку неактивной+
1.2 Вставить патрон в барабан+
1.3 Начать крутить барабан
1.4 Скрыть пулю
1.5 Записать случайное число от 1 до 6. Это число отвечает за место пули в барабане+
1.6 Изобразить револьвер+
1.7 Изменить текст кнопки на "Сделать выстрел"+
1.8 Сделать кнопку активной+
    2.При нажатии на кнопку сделать выстрел
2.1 Проверяется число выстрела+
2.2 Если пуля совпадает числу пули в барабане, по персонаж убит+
2.3 Иначе револьвер переворачивается и повторяется п.2+
2.4 При успешном выстреле залить иконку красной жидкостью
2.5 Прокрутить барабан
    3.При завершении игры
3.1 Изменить текст кнопки на рестарт
3.2 При нажатии на эту кнопку перезагрузить страницу */

//
var countShot = 0;
//Записать случайное число от 1 до 6
var bulletPosition = random(1, 6);
console.log(bulletPosition);
var btnShot = document.querySelector("#shot");
var currentPlayer = 1;
var baraban = document.querySelector("#baraban");

btnShot.onclick = start;
//первый клик по кнопке "начать"
function start() {
    //сделать кнопку неактивной
    btnShot.className = "off";
    //Вставить патрон в барабан
    var bullet = document.querySelector("#bullet");
    bullet.style.display = "block";
//Изобразить револьвер
    var revolver = document.querySelector("#revolver");
    revolver.style.display = "block";

    
    //Сделать кнопку активной
    btnShot.onclick = "";
    var rotate = 0;
    //Начать крутить барабан
    var timer = setInterval(function () {
        rotate = rotate + 10;
        baraban.style.transform = "rotate(" + rotate + "deg)";
        //Скрыть пулю
        if (rotate > 300) {
            bullet.style.display = "none";
        }
        
        if (rotate == 720) {
            clearInterval(timer);
            //Изменить текст кнопки на "Сделать выстрел"
            btnShot.innerText = "Сделать выстрел"
 //При нажатии на кнопку сделать выстрел
    btnShot.onclick = shot;

    btnShot.className = ""; 
        }
    }, 50)

    
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
var rotateBaraban = 0;

function shot() {
    //Проверяется число выстрела
    countShot = countShot + 1;
//Если пуля совпадает числу пули в барабане, по персонаж убит
    if (bulletPosition == countShot) {
        //При успешном выстреле залить иконку красной жидкостью
        var blood = document.createElement("div");
        blood.id = "blood";
        var player = document.querySelector("#player" + currentPlayer);
        player.appendChild(blood);

        endGame();
    //Иначе револьвер переворачивается и повторяется п.2
    } else { 

        if (currentPlayer == 1) {
            rotationRight();
            currentPlayer = 2;
        } else {

            rotationLeft();
            currentPlayer = 1;
        }
       //Прокрутить барабан
        var rotate = rotateBaraban
        var timer = setInterval(function () {
            rotate = rotate + 10;
            baraban.style.transform = "rotate(" + rotate + "deg)";
            if (rotate == rotateBaraban + 60) {
                clearInterval(timer);
                rotateBaraban = rotate;
            }
           
        }, 10)
            
        
        baraban.style.transform = "rotate( " + rotateBaraban + " deg)";
    }
    
}

//Функции разворота револьвера влево-вправо
var revolver = document.querySelector("#revolver");

function rotationRight() {
    revolver.style.background = 'url("images/revolver-right.png") no-repeat';
}
rotationRight();
function rotationLeft() {
    revolver.style.background = 'url("images/revolver-left.png") no-repeat';
}
rotationLeft();

//Завершение игры
function endGame() {
    alert("Game over!!!");
    //Изменить текст кнопки на рестарт
    btnShot.innerText = "Рестарт";
    btnShot.onclick = restart;
}
//При нажатии на эту кнопку перезагрузить страницу
function restart() {
    location.reload();
}
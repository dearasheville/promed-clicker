/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import clipboardy from 'clipboardy';

import sleep from '../utils';

const toPaste = (data) => {
  clipboardy.writeSync(data);

  robot.mouseClick();
  robot.mouseClick('right');

  robot.moveMouse(robot.getMousePos()['x'] + 100, robot.getMousePos()['y'] + 190);
  robot.mouseClick();
};

const clicker = (surname, name, path, birth) => {
  robot.moveMouse(32, 230);
  robot.mouseClick();

  sleep(5000);

  toPaste(name);
};

sleep(3000);
/*
// "Человек: поиск", фамилия
robot.moveMouse(480, 335);
toPaste('Серов');

// "Человек: поиск", имя
robot.moveMouse(805, 335);
toPaste('Денис');

// "Человек: поиск", отчество
robot.moveMouse(1135, 335);
toPaste('Оскарович');

// "Человек: поиск", дата рождения
robot.moveMouse(480, 395);
toPaste('23.05.1995');

sleep(5000);

// "Человек: поиск", подтверждение заполнения формы
robot.keyTap('enter');

sleep(5000);

robot.keyTap('enter');

sleep(5000);

// "Данные о направлении", кем направлен
robot.moveMouseSmooth(365, 335);
robot.mouseClick();
robot.keyTap('1');
sleep(5000);
robot.moveMouseSmooth(290, 435);
robot.mouseClick();

// "Данные о направлении", отделение
robot.moveMouse(365, 400);
robot.mouseClick();
robot.typeString('1');
sleep(2000);
robot.moveMouse(365, 610);
robot.mouseClick();

sleep(2000);
// "Данные о направлении", врач
robot.moveMouse(365, 435);
robot.mouseClick();
robot.typeString('16009');
sleep(2000);
robot.moveMouse(robot.getMousePos()['x'], robot.getMousePos()['y'] + 50);
robot.mouseClick();

// "Данные о направлении", диагноз
robot.moveMouseSmooth(365, 500);
robot.mouseClick();
sleep(500);
toPaste('C44.3');
robot.mouseClick();
*/

robot.moveMouse(114, 599);
robot.mouseClick();
sleep(5000);

robot.moveMouse(1405, 1010);
robot.mouseClick();


// "Посещение пациентом поликлиники: Добавление", вид обращения
robot.moveMouse(301, 368);
robot.mouseClick();
robot.keyTap(1);

// "Посещение пациентом поликлиники: Добавление", код посещения
robot.moveMouse(304, 564);
robot.mouseClick();
sleep(2000);
robot.typeString('874737');
sleep(3000);
robot.keyTap('enter');

// "Посещение пациентом поликлиники: Добавление", характер
robot.moveMouse(301, 959);
robot.mouseClick();
robot.keyTap(3);



export default clicker;

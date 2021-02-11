/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import robot from 'robotjs';
import key from 'node-key-sender';
import clipboardy from 'clipboardy';

import { medicalCareSpreadsheet } from './medicalSpreadsheet';
import { sleepUntilGetCorrectPixel, toClick, toPasteByKeyboard } from '../utils';

// должны высчитываться две даты, минимальная и максимальная. дата посередине - сегдняшняя или задается пользователем 
// const searchDates = new Date();

const array = medicalCareSpreadsheet[0];

const line = array;

const person = line[0].split(' ');

const surname = person[0];
const name = person[1];
const pathronymic = person[2];

const birth = String(line[2]);

robot.moveMouse(270, 545);
robot.mouseClick('left', true);
toPasteByKeyboard(surname);

robot.keyTap('tab');
toPasteByKeyboard(birth);

robot.keyTap('tab');
toPasteByKeyboard(name);

robot.keyTap('tab');
toPasteByKeyboard(pathronymic);

robot.keyTap('enter');

sleepUntilGetCorrectPixel(100, 710, 'e4e5e8');
sleepUntilGetCorrectPixel(100, 710, 'fbf0d2');

toClick.normal(600, 650);
toClick.normal(610, 745);

sleepUntilGetCorrectPixel(775, 95, 'ededed');

key.sendCombination(['control', 'a']);
key.sendCombination(['control', 'c']);

console.log(clipboardy.readSync());

/** 1. установить проверки на соответствие назначаемых услуг 203 приказу
типа вообще предусмотрена ли эта услуга вообще или нет, ввести проверки на наличие узи перед кт мрт области ОБП ОМТ ЛИМФОУЗЛЫ
2. составлять древовидную систему для отслеживания каждого этапа
*/
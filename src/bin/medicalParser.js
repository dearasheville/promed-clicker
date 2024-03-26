/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import robot from 'robotjs';
import clipboardy from 'clipboardy';
import key from 'node-key-sender';

import {
  medicalCareSpreadsheet,
} from './medicalSpreadsheet';

import mouse from '../input-devices/mouse';
import keyboard from '../input-devices/keyboard';

import {
  sleepUntilGetCorrectPixel,
} from '../utils/sleep';


/**
// должны высчитываться две даты, минимальная и максимальная. дата посередине - сегдняшняя или задается пользователем
// const searchDates = new Date();

const array = medicalCareSpreadsheet[0];

const line = array;

const person = line[0].split(' ');

const surname = person[0];
const name = person[1];
const pathronymic = person[2];

const birth = String(line[2]);

mouse.move(270, 545);
robot.mouseClick('left', true);
keyboard.paste(surname);

keyboard.tap('tab');
keyboard.paste(birth);

keyboard.tap('tab');
keyboard.paste(name);

keyboard.tap('tab');
keyboard.paste(pathronymic);

keyboard.tap('enter');

sleepUntilGetCorrectPixel([100, 710], 'e4e5e8');
sleepUntilGetCorrectPixel([100, 710], 'fbf0d2');

mouse.click(600, 650);
mouse.click(610, 745);

sleepUntilGetCorrectPixel([775, 95], 'ededed');

key.sendCombination(['control', 'a']);
key.sendCombination(['control', 'c']);

console.log(clipboardy.readSync());

// 1. установить проверки на соответствие назначаемых услуг 203 приказу
//типа вообще предусмотрена ли эта услуга вообще или нет, ввести проверки на наличие узи перед кт мрт области ОБП ОМТ ЛИМФОУЗЛЫ
// 2. составлять древовидную систему для отслеживания каждого этапа
*/

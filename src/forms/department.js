/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable max-len */

// диагноз услуги
// клинцисты диагносты 

import robot from 'robotjs';

const commonFormActiveBodyColor = 'eeeeee';
const commonFormActiveBorderColor = '0000ff';

const commonFormNonactiveBodyColor = 'ffffff'; // Фон неактивного поля - градиент, белый цвет - четвертая точка
const commonFormNonactiveBorderColor = '99aabb';

const mustBeFilledActiveFormBodyColor = 'ccffcc';
const mustBeFilledActiveFormBorderColor = '0000ff';

const mustBeFilledNonactiveFormBodyColor = 'ccffcc';
const mustBeFilledNonactiveFormBorderColor = '78dd70';

class Form { 
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;

        this.point1 = [x, y];
        this.point2 = [x + width, y];
        this.point3 = [x, y + height];
        this.point4 = [x + width, y + height];
    }
    
    isFormActive() {
        return robot.getPixelColor(this.x, this.y) === commonFormActiveBorderColor;
    }

    isFormMustBeFilled() {
        return robot.getPixelColor(this.point1) === mustBeFilledNonactiveFormBorderColor;
    }

    /**
    isFormFilledCorrect() {

    }
    */
}

const formBorderWidth = 1;
const formBorderHeight = 1;

const departmentForm = new Form(0, 0, 418, 287);

console.log(departmentForm.isFormActive());

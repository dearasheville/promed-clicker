import robot from 'robotjs';

import mouse from './mouse.js';

const getDepartmentNumber = (text) => {
  switch (text) {
    case 'Амбулаторное отделение противоопухолевой лекарственной терапи':
      return robot.typeString('22370');
    case 'Онкологическое отделение противоопухолевой лекарственной терапи':
      return robot.typeString('22101');

    case 'Хируругическое отделение № ':
      return robot.typeString('22100');
    case 'РАДИОТЕРАПИЯ, радиологическое отделение № ':
      return robot.typeString('22108');
    case 'ПРОКТОЛОГИЧЕСКОЕ, хирургическое отделение № ':
      return robot.typeString('22102');
    case 'РАДИОГИНЕКОЛОГИЯ, радиологическое отделение № ':
      return robot.typeString('22109');
    case 'Хирургическое торакальное отделени':
      return robot.typeString('22392');
    case 'МАММОЛОГИЧЕСКОЕ, хирургическое отделение № ':
      return robot.typeString('22104');
    case 'ГОЛОВА-ШЕЯ, хирургическое отделение № ':
      return robot.typeString('22105');
    case 'УРОЛОГИЧЕСКОЕ, хирургическое отделение № ':
      return robot.typeString('22106');
    case 'ГИНЕКОЛОГИЧЕСКОЕ, хирургическое отделение № ':
      return robot.typeString('22107');

    case 'ООПЛТ (химиотерапия) г Кумерта':
      return robot.typeString('22413');
    case 'ООПЛТ (химиотерапия) г Нефтекамс':
      return robot.typeString('22424');
    case 'ООПЛТ (химиотерпия) г Октябрьски':
      return robot.typeString('22425');
    case 'ООПЛТ (химиотерапия) г.Салава':
      return robot.typeString('22434');
    case 'ООПЛТ (химиотерапия) г Стерлитама':
      return robot.typeString('22627');

    case 'ООПЛТ (химиотерапия) дневной стационар Кумерта':
      return robot.typeString('22410');
    case 'ООПЛТ (химиотерапия) дневной стационар Бирс':
      return robot.typeString('22411');
    case 'ООПЛТ (химиотерапия) дневной стационар Белорец':
      return robot.typeString('22412');
    case 'ООПЛТ (химиотерапия) дневной стационар Октябрьски':
      return robot.typeString('22426');
    case 'ООПЛТ (химиотерапия) дневной стационар Нефтекамс':
      return robot.typeString('22427');
    case 'ООПЛТ (химиотерапия) дневной стационар Белебе':
      return robot.typeString('22428');
    case 'ООПЛТ (химиотерапия) дневной стационар Сиба':
      return robot.typeString('22429');
    case 'ООПЛТ (химиотерапия) дневной стационар Месягутов':
      return robot.typeString('22430');
    case 'ООПЛТ (химиотерапия) дневной стационар Салава':
      return robot.typeString('22433');

    case 'Онкологическое-дн.стац.на дом':
      return robot.typeString('22405');
    case 'Дневной стационар химиотерапия Стерлитама':
      return robot.typeString('22628');
    case 'Дневной стационар по радиотерапи':
      return robot.typeString('22385');
    case 'Дневной стационар при ООПЛ':
      return robot.typeString('22414');
    case 'Дневной стационар при ООПЛТ ':
      return robot.typeString('22415');

    case 'ОТДЕЛЕНИЕ ОБЩЕЙ ОНКОЛОГИ':
      return robot.typeString('22384');
    case 'Отделение анестезиологии-реанимаци':
      return robot.typeString('22141');

    case 'ОТДЕЛЕНИЕ ПАЛЛИАТИВНОЙ ПОМОЩ':
      return robot.typeString('22319');
    case 'ООПЛТ № ':
      return robot.typeString('22103');
    default:
      break;
  }

  return false;
};

const keyboardVirtual = {
  type: (text, delay) => {
    const alphabet = [
      ['1', [1218, 950]], ['2', [1245, 950]], ['3', [1272, 950]], ['4', [1299, 950]], ['5', [1326, 950]], ['6', [1353, 950]], ['7', [1380, 950]], ['8', [1407, 950]], ['9', [1434, 950]], ['0', [1461, 950]], ['-', [1488, 950]], ['=', [1515, 950]],
      ['й', [1205, 980]], ['ц', [1232, 980]], ['у', [1259, 980]], ['к', [1286, 980]], ['е', [1313, 980]], ['н', [1340, 980]], ['г', [1367, 980]], ['ш', [1394, 980]], ['щ', [1421, 980]], ['з', [1448, 980]], ['х', [1475, 980]], ['ъ', [1502, 980]],
      ['ф', [1218, 1005]], ['ы', [1245, 1005]], ['в', [1272, 1005]], ['а', [1299, 1005]], ['п', [1326, 1005]], ['р', [1353, 1005]], ['о', [1380, 1005]], ['л', [1407, 1005]], ['д', [1434, 1005]], ['ж', [1461, 1005]], ['э', [1488, 1005]],
      ['я', [1232, 1030]], ['ч', [1259, 1030]], ['с', [1286, 1030]], ['м', [1313, 1030]], ['и', [1340, 1030]], ['т', [1367, 1030]], ['ь', [1394, 1030]], ['б', [1421, 1030]], ['ю', [1448, 1030]], ['.', [1475, 1030]],
      [' ', [1272, 1060]],
    ];

    if (getDepartmentNumber(text)) {
      return true;
    }

    const normalizedText = text.split(' (')[0].toLowerCase();
    const normalizedTextLength = normalizedText.length;

    switch (true) {
      case normalizedTextLength >= 25:
        robot.setMouseDelay(75);
        break;
      case normalizedTextLength >= 10 && normalizedTextLength <= 25:
        robot.setMouseDelay(100);
        break;
      default:
        robot.setMouseDelay(125);
        break;
    }

    normalizedText.split('').forEach((textLetter) => alphabet.find((alphabetLetterAndPoint) => {
      const alphabetLetter = alphabetLetterAndPoint[0];
      const alphabetPoint = alphabetLetterAndPoint[1];

      if (textLetter === alphabetLetter) {
        mouse.click(alphabetPoint[0], alphabetPoint[1]);
      }

      return false;
    }));

    robot.setMouseDelay(100);

    return true;
  },
};

export default keyboardVirtual;

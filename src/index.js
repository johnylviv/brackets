module.exports = function check(str, bracketsConfig) {
  let array = [];                                      /* Создание пустого стека */
  let openBr = bracketsConfig.map(pair => pair[0]);    /* Переменная для открывающихся скобок */
  let closeBr = bracketsConfig.map(pair => pair[1]);   /* Переменная для закрывающихся скобок */

  for (let char of str) {
    if (openBr.includes(char)) {
      if (closeBr.includes(char) && array[array.length - 1] === char) {
        /* Открывающаяся и закрывающаяся скобки одинаковые || */
        array.pop();          // Удаляем из массива
      } else 
        array.push(char);     // Добавляем в массив
    } else {
      // Текущая открывающая скобка = индекс текущей закрывающей скобки
      let currentOpenBr = openBr[closeBr.indexOf(char)];
      // Если массив пуст, то нет скобок для сравнения
      // Либо у нас массив начинается с закрывающей скобки
      if (array.length === 0 || array.pop() !== currentOpenBr) {
        return false;
      }
    }
  }
  return array.length === 0;
}

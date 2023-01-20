//написати рекурсивну функцію, яка приймає число і повертає рядок з вкладених пар круглих дужок.
//кількість пар дорівнює прийнятому аргументу.
//якщо число(аргумет) менше 1 - повертаємо лише одну пару круглих дужок
// pairBrickets(4) => '(((())))'
// pairBrickets(-4) => '()'
// pairBrickets('qwe') => error

const pairBrickets = (count) => {
    if (typeof count !== "number") {
      throw new TypeError("type must be number");
    }
    if (count <= 1) {
      return "()";
    }
    return `(${pairBrickets(count - 1)})`;
  };
  
  try {
    console.log(pairBrickets(-2));
  } catch (error) {
    console.log(error);
  }
  
  //написати рекурсивну функцію, яка приймає два числа і повертає найбільший спільний дільник цих двох чисел
  // getDivider(12,15) => 3
  // Ошибки: не 0 , число < 0
  
  //два числа порівнюють і
  //від більшого віднімають менше до тих пір,
  //поки числа не стануть рівними.
  //Число, якому вони стануть рівними,
  //і є їх найбільший спільний дільник.
  
  const getDivider = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new TypeError("type must be number");
    }
    if( num1 <= 0 || num2 <= 0){
      throw new RangeError("Numbers cant be 0 or negative");
    }
    if (num1 === num2){
      return num1;
    }
    if(num1>num2){
      return getDivider(num1-num2,num2);
    }
    if(num1<num2){
      return getDivider(num1,num2-num1);
    }
  };
  
  try {
    console.log(getDivider(12,15));
  } catch (error) {
    console.log(error);
  }
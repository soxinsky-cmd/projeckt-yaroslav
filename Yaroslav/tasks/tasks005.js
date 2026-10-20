// ##Вычислитель индекса массы тела (ИМТ)

// Установите значения для роста в дюймах и веса в фунтах, затем преобразуйте значения в сантиметры и килограммы:

// 1 дюйм равен 2,54 см;
// 2,2046 фунта равны 1 кг.

// Выведите результаты. Затем рассчитайте и запишите ИМТ: он равен весу (в кило­граммах), деленному на квадрат роста (в метрах). Выведите результаты на экран.
// ```
//
let smInInch = 2.54;
let inchInSm = 1/2.54;
//console.log(InchInSm);
//
let kgInPound = 1/2.2046;
//console.log(kgInPound);
//
let rost= 180;//Рост в сантиметрах
let rostInInch= rost/smInInch;
//console.log(rostInInch);
//
let vesInPound=190;// Вес в фунтах
let rostPerInch=71;// Рост в дюймах
let vesInKg=vesInPound/2.2046;
//console.log(vesInKg);
let rostInSm=rostPerInch*2.54;
//console.log(rostInSm);
let IMT=vesInKg/(rostInSm/100)**2;
console.log(IMT)


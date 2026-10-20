/**
 * Взять три вложенные функции и организовать церочку их выполнения, 
 * от самой глубоко вложенной до самой внешней. При этом каждая из них 
 * должна работать с одним и темже объектом.
 * Подсказка: нужно правильно назначить значение оператора return
 */
//
function one (){
    let obj1 = two();
        
        function two() {
            let obj2 = three();
            obj2["param2"]="2";
             console.log(obj2);
                function three() {
                    let obj ={
                        param1: "3"   
                        };
                    console.log(obj);
                    return obj;  
                };
            return obj2;  
            
        };
        obj1["param3"] = "1"; 
    console.log(obj1);
};
one();
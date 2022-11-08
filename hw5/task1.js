// Для перевірки чи порожній об’єкт
function isEmpty(obj){
    for(let key in obj){    
     return "Объект не пустой"
    }
   return "Объект пустой"
    }

obj = {

}

//console.log(isEmpty(obj))

//Порівнює два об'єкти.

function compare(obj1, obj2){
    if(JSON.stringify(obj1) === JSON.stringify(obj2)){
return "Объекты одинаковые "
    }
    return "Разные"
}

obj1 = {
name: "ann"
}
obj2 = {

}

//console.log(compare(obj1,obj2))


//Знаходить перетин об'єктів і повертає об'єкт перетинів.
obj1 = {
    name: "ann",
    age: 12
    }
   
    obj2 = {
        name: "ann"
    }
   
    
   
    function intersection(obj1, obj2) {
        let res = {};
        for (const key in obj1) {
          const one = obj1[key];
          const two = obj2[key];
        
          if (one === two) {
            res[key] = one;
          }
        }
        return res;
      }
     //console.log(intersection(obj1,obj2))

     //Знаходить значення за заданим ключем

     function findValue(obj1, value){
            if(obj1[value]){
                console.log(obj2[value])
            }else{
                console.log(`Такого ключа нет ${value}`)
            }
    }

     console.log(findValue(obj1, "name"))


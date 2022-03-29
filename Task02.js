const mytext= prompt("Выводите строк ?", "");
console.log("изменен строк "+mytext.slice(0,1).toUpperCase()+mytext.slice(1,mytext.length-1).toLowerCase())
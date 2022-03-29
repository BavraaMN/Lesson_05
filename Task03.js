const myREVtext= prompt("Выводите строк ?", "");

const reversedstring=myREVtext.split("").reverse().join("");
console.log(reversedstring);

 /* var newString = "";   // Step 2. Create the FOR loop
    for (let i = mytext.length - 1; i >= 0; i--) { 
        newString += mytext[i]; // or newString = newString + str[i];
    }
    console.log(newString);*/
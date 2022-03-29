let firstinteger_=Number(prompt("Первый номер чтобв найти наибольший общий делитель?", ""));
let secondinteger_=Number(prompt("Второй данный чтобы найти ?", ""));

firstinteger_=Math.abs(firstinteger_);
secondinteger_=Math.abs(secondinteger_);

   while (secondinteger_) 
   {
       let temp=secondinteger_;
       secondinteger_=firstinteger_ % secondinteger_;
       firstinteger_=temp;
   }
   console.log(`наибольший общий делитель ${firstinteger_}`)
   

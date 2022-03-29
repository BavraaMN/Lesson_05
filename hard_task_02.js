const firstinteger=Number(prompt("Первый номер чтобв найти наибольший общий делитель?", ""));
const secondinteger=Number(prompt("Второй данный чтобы найти наибольший общий делитель?", ""));

   while (firstinteger != secondinteger) 
   {
      if ( firstinteger > secondinteger ) 
     {
       firstinteger = firstinteger -secondinteger;
     }
    else 
     {
        secondinteger = secondinteger - firstinteger;
     }
   }
   console.log(`наибольший общий делитель ${firstinteger}`)
const totalcost= prompt("Общая сумма корзины", "");
const totalproduct= prompt("Количество товаров в корзине", "");

const mypromokod= prompt("Промокод", "");

 if (totalproduct>10)
     { 
    totalcost=totalcost*0.97;
     }
   if (totalcost>30000)
     {
      totalcost=totalcost+ (totalcost-30000)*0.85;
     } 
   if (mypromokod==="METHED")
     {
        totalcost=totalcost*0.9;
     }
   if (mypromokod=="G3H2Z1" && totalcost>2000)
     {
        totalcost=totalcost-500;
     }
    console.log(totalcost);


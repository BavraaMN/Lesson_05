const TotalProductLimit=10;
const TotalCostLimit=30000;
const TotalCostLimit_2=2000;
const PromotionString_1="METHED";
const PromotionString_2="G3H2Z1";

const DiscountPart_1=0.97;
const DiscountPart_2=0.85;
const DiscountPart_3=0.9;

const DiscountMoney=500;

let totalcost= Number(prompt("Общая сумма корзины", ""));
const totalproduct=Number(prompt("Количество товаров в корзине", ""));

const mypromokod= prompt("Промокод", "");

 if (totalproduct>10)
     { 
    totalcost=totalcost*DiscountPart_1;
     }
   if (totalcost>TotalCostLimit)
     {
      totalcost=TotalCostLimit+ (totalcost-TotalCostLimit)*DiscountPart_2;
     } 
   if (mypromokod==="METHED")
     {
        totalcost=totalcost*DiscountPart_3;     
      }
    else
   if (mypromokod==PromotionString_2 && totalcost>TotalCostLimit_2)
     {
        totalcost=totalcost-DiscountMoney;
     }
    console.log(totalcost);


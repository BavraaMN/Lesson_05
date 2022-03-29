function Hello() {
    const ProducNameConst = prompt("Наименование товара?", "");
    console.log('Наименование товара?: ', ProducNameConst);
  
  /*const TotalProductCountConst = prompt("Количество товара ?", "");
  console.log('Количество товара ?: ', TotalProductCountConst);*/
    let result = false;
    let TotalProductCountLet; 

    while (!result) {

      const TotalProductCountConst = prompt("Количество товара (должен только цифры)?", "");
      let isnum = /^\d+$/.test(TotalProductCountConst);

      if (isnum)
      {
        TotalProductCountLet=TotalProductCountConst;
         result=true;
      }
      else 
      {
         result=false;
      }
  }

    const ProductCategoryConst = prompt("Категория товара?", "");
    console.log('Категория товара?: ', ProductCategoryConst);

    var ProductCostVar=0;

    result = false;

    while (!result) {
    ProductCostVar = prompt("Цена товара ? (должен только цифры) ?", "");
    let isnum = /^\d+$/.test(ProductCostVar);

    if (isnum)
      {      
         result=true;
      }
      else 
      {
         result=false;
      }
  }



  console.log(`На складе ${TotalProductCountLet} единицы товара "${ProducNameConst}" (${ProductCategoryConst}) на сумму ${TotalProductCountLet*ProductCostVar} деревянных`);

  
  






  let ProducName='Компьютор';
  console.log('ProducName: ', ProducName);
  let TotalProductCount=100
  console.log('TotalProductCount: ', TotalProductCount);
  
  let ProductCategory='Системный блок';
  console.log('ProductCategory: ', ProductCategory);
  
  let ProductModel='Asus 2000 XP';
  console.log('ProductModel: ', ProductModel);

  let ProductCost=1000;
  console.log('ProductCost: ', ProductCost);

  let ProductCostMoneyType='USD dollar';
  console.log('ProductCostMoneyType: ', ProductCostMoneyType);

  console.log(`Всего стоит  ${TotalProductCount*ProductCost} ${ProductCostMoneyType}`); 

 }
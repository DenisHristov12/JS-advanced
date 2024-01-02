//const chai = require("mocha/lib/reporters");

window.addEventListener("load", solve);

function solve() {
  //capture
  let makeInput = document.getElementById('make');
  let modelInput = document.getElementById('model');
  let yearInput = document.getElementById('year');
  let fuelInput = document.getElementById('fuel');
  let originalPrice = document.getElementById('original-cost');
  let sellingPrice = document.getElementById('selling-price');
  let publishBtn = document.getElementById('publish');

  //capture other elements
  let body = document.getElementById('table-body');
  let profit = document.getElementById('profit');
  let carsListUL = document.getElementById('cars-list');

  

  publishBtn.addEventListener("click", publish);

  function publish(e) {
    e.preventDefault();

    let makeInputValue = makeInput.value;
    let modelInputValue = modelInput.value;
    let yearInputValue = yearInput.value;
    let fuelInputValue = fuelInput.value;
    let originalPriceValue = originalPrice.value;
    let sellingPriceValue = sellingPrice.value;

    if(!makeInputValue || 
   !modelInputValue || 
   !yearInputValue || 
   !fuelInputValue ||
   !originalPriceValue ||
   !sellingPriceValue ||
     originalPriceValue >= sellingPriceValue){
       return;
   }

    let trEl = document.createElement("tr");
    trEl.classList.add("row");



    let makeTdEl = document.createElement("td");
    makeTdEl.textContent = makeInputValue;

    let modelTdEl = document.createElement("td");
    modelTdEl.textContent = modelInputValue;

    let yearTdEl = document.createElement("td");
    yearTdEl.textContent = yearInputValue;

    let fuelTdEl = document.createElement("td");
    fuelTdEl.textContent = fuelInputValue;

    let originalTdEl = document.createElement("td");
    originalTdEl.textContent = originalPriceValue;

    let sellingTdEl = document.createElement("td");
    sellingTdEl.textContent = sellingPriceValue;

    let buttonsTd = document.createElement("td");


    let editBtn = document.createElement("button");
    editBtn.classList.add("action-btn", "edit");
    editBtn.textContent = "Edit";

    let sellBtn = document.createElement("button");
    sellBtn.classList.add("action-btn", "sell");
    sellBtn.textContent = "Sell";


    //attach buttons to td
    buttonsTd.appendChild(editBtn);
    buttonsTd.appendChild(sellBtn);

    //attach td's to tr
    trEl.appendChild(makeTdEl);
    trEl.appendChild(modelTdEl);
    trEl.appendChild(yearTdEl);
    trEl.appendChild(fuelTdEl);
    trEl.appendChild(originalTdEl);
    trEl.appendChild(sellingTdEl);
    trEl.appendChild(buttonsTd);

    //attach tr to tbody
    body.appendChild(trEl);

    //clear inputs 
    clearAll();

    editBtn.addEventListener("click", (e) => {
      e.preventDefault();

      makeInput.value = makeInputValue;
      modelInput.value = modelInputValue;
      yearInput.value = yearInputValue;
      fuelInput.value = fuelInputValue;
      originalPrice.value = originalPriceValue;
      sellingPrice.value = sellingPriceValue;

      trEl.remove();
    });

    sellBtn.addEventListener("click", (e) => {
      e.preventDefault();

      let listItem = document.createElement("li");
      listItem.classList.add("each-list");



      let modelSpan = document.createElement("span");
      modelSpan.textContent = `${makeInputValue} ${modelInputValue}`;

      let yearSpan = document.createElement("span");
      yearSpan.textContent = yearInputValue;

      let profitSpan = document.createElement("span");
      profitSpan.textContent = sellingPriceValue - originalPriceValue;


      listItem.appendChild(modelSpan);
      listItem.appendChild(yearSpan);
      listItem.appendChild(profitSpan);

      carsListUL.appendChild(listItem);

      trEl.remove();
      
      profit.textContent = (Number(profit.textContent) + (sellingPriceValue - originalPriceValue)).toFixed(2);
    });
  }

  function clearAll() {
    makeInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
    fuelInput.value = "";
    originalPrice.value = "";
    sellingPrice.value = "";
  }
}

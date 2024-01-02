window.addEventListener('load', solve);

function solve() {
  let modelInput = document.getElementById('car-model');
  let yearInput = document.getElementById('car-year');
  let partInput = document.getElementById('part-name');
  let partNumInput = document.getElementById('part-number');
  let conditionInput = document.getElementById('condition');
  let nextBtn = document.getElementById('next-btn');

  let infoUl = document.querySelector("ul.info-list");
  let confirmUl = document.querySelector("ul.confirm-list");

  let img = document.getElementById("complete-img");
  let completeText = document.getElementById("complete-text");

  nextBtn.addEventListener("click", next);

  function next(e) {
        e.preventDefault();

    let modelInputValue = modelInput.value;
    let yearInputValue = yearInput.value;
    let partInputValue = partInput.value;
    let partNumInputValue = partNumInput.value;
    let conditionInputValue = conditionInput.value;

    if(!modelInputValue || 
   !yearInputValue || 
   !partInputValue ||
   !partNumInputValue ||
   !conditionInputValue ||
     yearInputValue < 1980 || yearInputValue > 2023){
       return;
   }

   let listItem = document.createElement("li");
   listItem.classList.add("part-content");

   let article = document.createElement("article");

   let pModel = document.createElement("p");
   pModel.textContent = "Car Model: " + modelInputValue;

   let pYear = document.createElement("p");
   pYear.textContent = "Car Year: " + yearInputValue;

   let pPart = document.createElement("p");
   pPart.textContent = "Part Name: " + partInputValue;

   let pPartNum = document.createElement("p");
   pPartNum.textContent = "Part Number: " + partNumInputValue;

   let pCondition = document.createElement("p");
   pCondition.textContent = "Condition: " + conditionInputValue;

   let editBtn = document.createElement("button");
   editBtn.classList.add("edit-btn");
   editBtn.textContent = "Edit";

   let continueBtn = document.createElement("button");
   continueBtn.classList.add("continue-btn");
   continueBtn.textContent = "Continue";

   article.appendChild(pModel);
   article.appendChild(pYear);
   article.appendChild(pPart);
   article.appendChild(pPartNum);
   article.appendChild(pCondition);

   listItem.appendChild(article);
   listItem.appendChild(editBtn);
   listItem.appendChild(continueBtn);

   infoUl.appendChild(listItem);

   img.style.visibility = "hidden";
   completeText.textContent = "";

   clearAll();

   nextBtn.disabled = true;

   editBtn.addEventListener("click", (e) => {
        e.preventDefault();

        modelInput.value = modelInputValue;
        yearInput.value = yearInputValue;
        partInput.value = partInputValue;
        partNumInput.value = partNumInputValue;
        conditionInput.value = conditionInputValue;

        listItem.remove();

        nextBtn.disabled = false;
   });

   continueBtn.addEventListener("click", (e) => {
        e.preventDefault();

        let listItemNextSection = document.createElement("li");
        listItemNextSection.classList.add("part-content");

        let article = document.createElement("article");

        let pModel = document.createElement("p");
        pModel.textContent = "Car Model: " + modelInputValue;

        let pYear = document.createElement("p");
        pYear.textContent = "Car Year: " + yearInputValue;

        let pPart = document.createElement("p");
        pPart.textContent = "Part Name: " + partInputValue;

        let pPartNum = document.createElement("p");
        pPartNum.textContent = "Part Number: " + partNumInputValue;

        let pCondition = document.createElement("p");
        pCondition.textContent = "Condition: " + conditionInputValue;

        let confirmBtn = document.createElement("button");
        confirmBtn.classList.add("confirm-btn");
        confirmBtn.textContent = "Confirm";

        let cancelBtn = document.createElement("button");
        cancelBtn.classList.add("cancel-btn");
        cancelBtn.textContent = "Cancel";

        article.appendChild(pModel);
        article.appendChild(pYear);
        article.appendChild(pPart);
        article.appendChild(pPartNum);
        article.appendChild(pCondition);

        listItemNextSection.appendChild(article);
        listItemNextSection.appendChild(confirmBtn);
        listItemNextSection.appendChild(cancelBtn);

        confirmUl.appendChild(listItemNextSection);

        listItem.remove();

        nextBtn.disabled = true;

        confirmBtn.addEventListener("click", (e) => {
                e.preventDefault();

                listItemNextSection.remove();
                img.style.visibility = "visible";
                completeText.textContent = "Part is Ordered!";

                nextBtn.disabled = false;
        });

        cancelBtn.addEventListener("click", (e) => {
                e.preventDefault();

                listItemNextSection.remove();

                nextBtn.disabled = false;
        });
   });

  }

  function clearAll() {
        modelInput.value = "";
        yearInput.value = "";
        partInput.value = "";
        partNumInput.value = "";
        conditionInput.value = "";
      }

}


    
    

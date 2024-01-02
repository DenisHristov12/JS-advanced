function addItem() {
    // capture
    const inputTextElement = document.getElementById('newItemText');
    const inputValueElement = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    // create elements
    const optionElements = document.createElement("option");

    // setup options
    optionElements.textCOntent = inputTextElement.value;
    optionElements.value = inputValueElement.value;

    // append to menu
    menu.appendChild(optionElements);

    // clear
    inputTextElement.value = "";
    inputValueElement.value = "";
}
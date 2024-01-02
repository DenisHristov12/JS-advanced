function extractText() {
    let items = document.getElementsByTagName("li");
    let liArr = Array.from(items);
    let text = liArr.map((x) => x.textContent);

    let textArea = document.getElementById('result');
    textArea.value = text.join("\n");
}
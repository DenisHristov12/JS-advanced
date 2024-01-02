function encodeAndDecodeMessages() {
    // capture buttons
    const [encodeBtn, decodeBtn] = Array.from(document.querySelectorAll("#main button"));
    const textContainers = Array.from(document.querySelectorAll("#main textarea"));

    // attach events
    encodeBtn.addEventListener("click", encodeAndSend);
    decodeBtn.addEventListener("click", decodeAndRead);

    function transformText(text, cb) {
        return text.split("").map(cb).join("");
    }
    
    function prevChar(ch) {
        return String.fromCharCode(ch.charCodeAt(0) - 1);
    }

    function nextChar(ch) {
        return String.fromCharCode(ch.charCodeAt(0) + 1);
    }

    function encodeAndSend(e) {
        textContainers[0].value = transformText(textContainers[0], nextChar);
        textContainers[0].value = "";
    }

    function decodeAndRead(e) {
        textContainers[1].value = transformText(textContainers[1].value, prevChar);
    }
}
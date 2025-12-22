let textArea = document.querySelector("textarea")
let btn = document.querySelector("button")
let select = document.querySelector("select")
let voices = null;


// let voices = speechSynthesis.getVoices();
// console.log(voices);

speechSynthesis.addEventListener("voiceschanged", () => {
    voices = speechSynthesis.getVoices();
    voices.forEach((element) => {
        let option = document.createElement("option")
        option.innerHTML = element.name;
        option.value = element.name;
        select.append(option);
    })
})


btn.addEventListener("click", () => {
    let speech = new SpeechSynthesisUtterance(textArea.value)
    let oneVoice = voices.find((element) => {
        if (element.name == select.value) {
            return element;
        }
    })
    console.log(oneVoice);
    speech.voice = oneVoice;
    speechSynthesis.speak(speech)

    // Manually Entering the Voice 
    // speech.voice = voices[4];
    // speechSynthesis.speak(speech);
})

// if (voices.length > 0) {
//     voices.forEach((element) => {
//         console.log(element);
//         let option = document.createElement("option")
//         option.innerHTML = element.name;
//         option.value = element.name;

//         select.append(option);
//     })
// }
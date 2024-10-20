let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // Set the default voice
    voiceSelect.innerHTML = ''; // Clear previous options
    voices.forEach((voice, i) => {
        const option = new Option(voice.name + ' (' + voice.lang + ')', i);
        voiceSelect.add(option);
    });
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    const text = document.querySelector("textarea").value.trim();
    if (text) {
        speech.text = text;
        window.speechSynthesis.speak(speech);
    } else {
        alert("Please enter some text to convert.");
    }
});

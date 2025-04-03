const textArray = [
    "🌟 Join us in lighting up futures! Donate today and make a difference. Click here to support ➜"
];
let textIndex = 0;
let charIndex = 0;
let typingSpeed = 40; // Speed of typing
let erasingSpeed = 40; // Speed of erasing
let delayBetweenTexts = 3000; // Delay before typing new text

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        document.getElementById("typing-text").innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetweenTexts);
    }
}

function eraseText() {
    if (charIndex > 0) {
        document.getElementById("typing-text").innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        setTimeout(typeText, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeText, 500);
}); 
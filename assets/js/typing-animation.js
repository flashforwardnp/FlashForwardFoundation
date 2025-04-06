const text = "Support our mission to bring light to children in need - Donate Now";
const typingText = document.getElementById('typing-text');
let index = 0;

function type() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 50); // Adjust typing speed here
    } else {
        setTimeout(resetTyping, 3000); // Wait 3 seconds before restarting
    }
}

function resetTyping() {
    typingText.textContent = '';
    index = 0;
    type();
}

// Start the typing animation when the page loads
window.addEventListener('load', type);
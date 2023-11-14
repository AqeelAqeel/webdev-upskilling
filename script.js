document.addEventListener('DOMContentLoaded', function() {
    const headline = document.querySelector('h1');
    const originalText = headline.textContent; // Store the original text

    headline.addEventListener('click', function() {
        // Check if the text is currently the original text
        if (headline.textContent === originalText) {
            // If it is, change it to the new text
            headline.textContent = "Well butter my butt and call me a biscuit, you clicked me!";
        } else {
            // If it's not the original text, change it back
            headline.textContent = originalText;
        }
    });
});

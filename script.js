document.addEventListener('DOMContentLoaded', function() {
    const headline = document.querySelector('h1');
    headline.addEventListener('click', function() {
        headline.textContent = "Well butter my butt and call me a biscuit, you clicked me!";
    });
});

// homepage.js
window.onload = function () {
    fetch('homepage/homepage.html')  // Adjusted path to point to the 'homepage' folder
        .then(response => response.text())
        .then(data => {
            document.getElementById('homepage-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading homepage content:', error));
};

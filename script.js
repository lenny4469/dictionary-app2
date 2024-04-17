const searchInput = document.getElementById('search-input');
const speakBtn = document.getElementById('speak-btn');
const searchBtn = document.getElementById('search-btn');
const resultDiv = document.getElementById('result');
searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchBtn.click();
}})

searchBtn.addEventListener('click', () => {
    const word = searchInput.value.trim();
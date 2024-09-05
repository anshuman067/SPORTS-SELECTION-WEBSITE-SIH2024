function filterCards() {
    // Get the search query
    const query = document.getElementById('search-input').value.toLowerCase();

    // Get all cards
    const cards = document.getElementsByClassName('card');

    // Loop through all cards and hide those that don't match the query
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const title = card.getElementsByTagName('h2')[0].innerText.toLowerCase();
        const text = card.getElementsByTagName('p')[0].innerText.toLowerCase();

        if (title.includes(query) || text.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
}
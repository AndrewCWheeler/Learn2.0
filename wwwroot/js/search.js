const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search our db.json and filter it
const searchData = async searchText => {
    const res = await fetch('/static/data/db.json');
    const db = await res.json();

    // Get matches to current text input
    let matches = db.filter(db => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return db.name.match(regex);
    });

    if(searchText.length === 0) {
        matches = [];
        matchList.innerHTML = '';
    }

    outputHtml(matches);
};
// Show results in HTML

const outputHtml = matches => {
    if(matches.length > 0) {
        const html = matches.map(match => `
            <div class="card card-body mb-1">
                <h3>${match.name} <span class="text-primary"> ${match.manufactured_by}</span></h3>
                <small>description: ${match.description} / upc: ${match.upc}</small>
                <input type="hidden" value="${match.upc}" name="upc">
            </div>
        `
            )
            .join('');
            console.log(matches)
    matchList.innerHTML = html;
    $("#match-list")(function() {
        var selected = match.name; 
        $(".card").click(function() {
            $("#form").autocomplete({
            source: selected
            });
        });
    });
}
};

search.addEventListener('input', () => searchData(search.value));

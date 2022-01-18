const btn = document.querySelector("#quote");
btn.addEventListener("click", function() {

//const zitat "Make it work!";

//todo: fetch

fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
.then((response) => {
    if(response.ok) {
        return response.json();
    }
}).then(data => {
    const zitat = data.data[0];
    const p = document.querySelector("#zitat");
    p.textContent = zitat.quoteText;
    
})
//const p = document.querySelector("#zitat");
//p.textContent = zitat;


});
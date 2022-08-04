
// initializing variables
const button = document.querySelector("#btn-search");
const quote = document.querySelector("#para");
// url for random quote
const url = "https://api.quotable.io/random";

// fetching the data from url
const randomQuote = ()=>{
    quote.classList.remove("fade");
    fetch(url)
    .then(res => res.json())
    .then((data)=>{
        quote.innerText = data.content;
        quote.classList.add("fade");
    })
}
// adding event to the button
button.addEventListener('click', randomQuote)
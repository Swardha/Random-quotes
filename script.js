

const button = document.querySelector("#btn-search");
const quote = document.querySelector("#para");

const url = "https://api.quotable.io/random";

// const random = ()=>{
//     fetch(url)
//     .then(res=>
//         res.json()
//     )
//     .then(data=>{
   
//         quote.innerText = `${data.content}`;

//     }
        
//     )
// }

// button.addEventListener('click', random);
// random();
const randomQuote = ()=>{
    fetch(url)
    .then(res => res.json())
    .then((data)=>{
        // console.log(data.joke);
        quote.innerText = data.content;
    })
}

button.addEventListener('click', randomQuote)
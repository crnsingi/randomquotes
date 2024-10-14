const api_url = "https://api.quotable.io/random";

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
}


/*

    "The only way to do great work is to love what you do. - Steve Jobs",
   
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
   
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
   
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
   
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
   
   ]; // array of quotes 
   
   
   
   const generateButton = document.getElementById("generateButton");
   
   const quoteElement = document.getElementById("quote"); //event listener to the "random Quote" button
   
   
   generateButton.addEventListener("click", generateRandomQuote);
    // function to generate the random quote
   
   function generateRandomQuote() {  // Generate a random index within the range of the quotes array
   
   
    const randomIndex = Math.floor(Math.random() * quotes.length);
     // Display the randomly selected quote in the quoteElement
   
   
   
    quoteElement.textContent = quotes[randomIndex];
   
   } */

    
   
   
   
   
   
// Array to hold restaurants 
const restaurants = [
    'Sarang',
    'Aji Sushi and Asian Cuisine',
    'Monnik',
    'New Wave Burrito',
    'Four Pegs',
    'Dakshin',
    'The Post',
    'Hammerheads',
    'Pizza Donisi',
    'Simply Thai',
    'Queen of Sheba',
    'Dragon King\'s Daughter',//the slash is an escape character to allow 
    'Mi Sueño',
    'Royals',
    'Back Deck BBQ',
    'El Taco Luchador',
    'Game',
    'The Tea Station',
    'Muscle Burger Bar',
    'Hometown Pizza',
    
]

// This pulls a random value from the array
let pick = restaurants[Math.floor(Math.random() * restaurants.length)];


//function to display the random value

document.getElementById("myBtn").addEventListener("click", suggestion);

function suggestion(){
    document.getElementById("para").innerHTML =`${pick}`;
}
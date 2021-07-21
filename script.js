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
    'Dragon King\'s Daughter',
    'Mi Sueño',
    'Royals',
    'Back Deck BBQ',
    'Taco Luchador',
    'Game',
    'The Tea Station',
    'Mussel & Burger Bar',
    'Hometown Pizza',
    'Nam Nam Cafe',
    'Gogi 1055',
    'Chik\'n & Mi',
    'La Suerte',
    'Shalimar',
    'Foko',
    'Fresh Out of the Box',


]
// This pulls a random value from the array
let pick = restaurants[Math.floor(Math.random() * restaurants.length)];


//function to display the random value

document.getElementById("myBtn").addEventListener("click", suggestion);

function suggestion(){
    document.getElementById("selection").innerHTML =`${pick}`;
};

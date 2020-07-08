const jokeForm = document.getElementById('jokeForm') ;
const jokeText = document.getElementById('jokeText') ;
const firstNameI = document.getElementById('firstName') ;
const lastNameI = document.getElementById('lastName') ;


jokeForm.addEventListener('submit', (e) =>
{
    e.preventDefault();

const firstName = firstNameI.value || "Mr";
const lastName = lastNameI.value || "Humble";

const url = `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;
fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
      
       jokeText.innerHTML = data.value.joke;
    });
});
const jokeForm = document.getElementById('jokeForm');
const jokeText = document.getElementById('jokeText');
const firstNameI = document.getElementById('firstName');
const lastNameI = document.getElementById('lastName');

jokeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = firstNameI.value || 'Mr';
  const lastName = lastNameI.value || 'Humble';

  const url = `https://v2.jokeapi.dev/joke/Any?safe-mode&type=single&lang=en&firstName=${firstName}&lastName=${lastName}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        jokeText.innerHTML = 'Failed to fetch a joke. Please try again later.';
      } else {
        jokeText.innerHTML = data.joke || 'No joke found!';
      }
    })
    .catch((err) => {
      jokeText.innerHTML = `Error: ${err.message}`;
      console.error(err);
    });
});

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const currencyEl_one = document.getElementById('currency-one');
let rate;

// keep user selection when page reloads
populateUI();
// print tricket unit price based on currency when page loads
appendCurrencyExchange();

// Initial selected price (+ sign make value a number)
let ticketPrice = +movieSelect.value;

// Save selected movie index and price
const setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // Create an array of selected seats index to save it in localStorage
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  // keep user selected seats even if browser reloads
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  // get currency & rate info from localStorage to print it in UI
  const ticketRate = JSON.parse(localStorage.getItem('rate'));
  const currency = localStorage.getItem('currency');

  count.innerText = selectedSeatsCount;
  total.innerText = (selectedSeatsCount * (ticketPrice * ticketRate)).toFixed(2) + ' ' + currency;

}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  const currency = localStorage.getItem('currency');

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });

    // keep currency value even if browser reloads
    currencyEl_one.value = currency;
  }

  // selected movie index
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Fetch exchange rates and update the DOM
function calculate() {
  const currency = currencyEl_one.value;
  localStorage.setItem('currency', currency);

  // fetching resources asynchronously across the network
  fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
    // return a promise, we catch it with "then"
    .then(res => {
      if (res.ok || res.status === 200) {
        return res.json();
      }
      throw new Error('Something went wrong');
    })
    .catch(error => alert(`An error has occurred: ${error.message}`))
    // return a new promise
    .then(data => {
      // dynamic variable as index
      rate = data.rates[currency];
      // saving rate in localStorage
      localStorage.setItem('rate', rate);

      // update ticket price, currency in the UI
      updateSelectedCount();


      // update ticket unit price in movie select when currency changed
      appendCurrencyExchange();
    })
}

function appendCurrencyExchange() {
  const currency = localStorage.getItem('currency');
  const rate = localStorage.getItem('rate');

  for (const child of movieSelect.children) {

    let content = document.createTextNode(` (${(child.value * rate).toFixed(2)} ${currency})`);
    
    if (child.childNodes.length === 1) {
      child.appendChild(content);
    } else {
      // remove previous unit price in DOM
      child.removeChild(child.lastChild);
      // append new child with updated unit price based on currency selection
      child.appendChild(content);
    }
  }
}

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  // selectedIndex property reflects the index of the first or last selected <option> element
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// Event listeners
currencyEl_one.addEventListener('change', calculate);

// Initial count and total set
updateSelectedCount();

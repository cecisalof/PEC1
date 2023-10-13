const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {

    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    // fetching resources asynchronously across the network
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        // return a promise, we catch it with "then"
        .then(res => {
            if (res.ok || res.status === 200) {
                return res.json();
            } else {
                throw new Error('Something went wrong! Please try again.');
            }
        })
        .catch((error) => alert(`Network error: ${error.message}`))
        .then(data => {
            // dynamic variable as index && avoid rate negative values
            const rate = data.rates[currency_two] < 0 ? 0 : data.rates[currency_two];

            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
        })
        // if, by any chance, fetch request failed 
        .catch(error => alert(`An error has occurred: ${error.message}`))
}

// Event listeners
currencyEl_one.addEventListener('change', calculate);
// JS event 'input' that runs with arrows or with typing
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    // temporary store of currency one initial value
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});

calculate();
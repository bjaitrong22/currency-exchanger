import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

//UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const currencyAmount = document.querySelector('#currencyAmount').value;
  document.querySelector('#currencyAmount').value = null;
  const baseCurrency = document.querySelector('#baseCurrency').value;
  document.querySelector('#baseCurrency').vlaue = null;
  //getAPIData(currencyAmount,baseCurrency);
}

window.addEventListener("load", () => {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service';

function getAPIData(Amount,baseCurrency) {
  let promise = CurrencyService.getCurrency(Amount,baseCurrency);
  promise.then(function(currencyResponse){
    printCurrencyRate(currencyResponse);      
    }, function(error) {
      printError(error);
    });
  }
    
//UI Logic

function printCurrencyRate(exchangeRates) {
  document.querySelector('#currency-rate1').innerText = `The currency exchange rate is ${exchangeRates}`;
}

function printError(error) {
  document.querySelector('#error').innerText = `There was a problem accessing the exchnage rate data from ExchangeRate-API for ${error}`;
}

function clearResults() {
  document.querySelector('#currency-rate1').innerText = null;
  document.querySelector('#baseCurrency-info').innerText = null;
  document.querySelector('#error').innerText = null;
}

function handleFormSubmission(event) {
  event.preventDefault();
  clearResults();
  const currencyAmount = document.querySelector('#currencyAmount').value;
  document.querySelector('#currencyAmount').value = null;
  const baseCurrency = document.querySelector('#baseCurrency').value;
  document.querySelector('#baseCurrency').value = null;
  getAPIData(currencyAmount,baseCurrency.toUpperCase());
}

window.addEventListener("load", () => {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});


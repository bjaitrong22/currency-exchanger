import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service';

let currencyCodeAndRates = {};
const currencyInputElement = document.querySelector("#targetCurrency-input");

function getAPIData() {
  let promise = CurrencyService.getCurrency();
  promise.then(function(currencyResponse){
    currencyCodeAndRates = currencyResponse[0].conversion_rates;    
    }, function(error) {
      printError(error);
    });
  }

  function getConversionAmount(baseCurrencyAmount,targetCurrencyCode) {
    let conversionRate = currencyCodeAndRates[`${targetCurrencyCode}`];
    let convertedAmount = baseCurrencyAmount * conversionRate;
    console.log(convertedAmount);
  }
  
//UI Logic

function onKeyInputChange() {
  removeAutoDropDown ();

  const filteredCodes = [];
  let currencyCodes = Object.keys(currencyCodeAndRates);
  const value = currencyInputElement.value.toLowerCase();

  if(value.lenght === 0) {
    return;
  }
  
  currencyCodes.forEach((element) => {
    if(element.toLowerCase().includes(value)) {
      filteredCodes.push(element);
    }
  });
  
  createAutoCompleteDropDown(filteredCodes);
}

function createAutoCompleteDropDown(nameList) {
  const listElement = document.createElement("ul");
  listElement.className = "autocomplete-list";
  listElement.id = "autocomplete-list";

  nameList.forEach((currencyCode) => {
    const listItem = document.createElement("li");
    const currencyNameBtn = document.createElement("button");
    currencyNameBtn.innerHTML = currencyCode;
    currencyNameBtn.addEventListener("click", onCurrencyNameBtnClick);
    listItem.appendChild(currencyNameBtn);
    listElement.appendChild(listItem); 
  });
  document.querySelector("#autocomplete-list-div").appendChild(listElement);
} 

function removeAutoDropDown () {
  const listElement = document.querySelector("#autocomplete-list");
  if(listElement) listElement.remove();
}

function onCurrencyNameBtnClick(e) {
  e.preventDefault();
  const buttonE1 = e.target;
  currencyInputElement.value = buttonE1.innerHTML;
  removeAutoDropDown();
}

currencyInputElement.addEventListener('keyup', function(event) {
  const key = event.key;
  if (key === "Backspace" || key === "Delete") {
    removeAutoDropDown();
  }
});

function printError(error) {
  document.querySelector('#error').innerText = `There was a problem accessing the exchnage rate data from ExchangeRate-API for ${error}`;
}

/*function clearResults() {
  document.querySelector('#currency-rate1').innerText = null;
  document.querySelector('#baseCurrency-info').innerText = null;
  document.querySelector('#error').innerText = null;
}*/

function handleFormSubmission(event) {
  event.preventDefault();
  //clearResults();
  const baseCurrencyAmount = document.querySelector('#amount-usd').value;
  document.querySelector('#amount-usd').value = null;
  const targetCurrencyCode = document.querySelector('#targetCurrency-input').value;
  document.querySelector('#targetCurrency-input').value = null;
  getConversionAmount(baseCurrencyAmount,targetCurrencyCode);
}

currencyInputElement.addEventListener("input", onKeyInputChange);

window.addEventListener("load", () => {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
  getAPIData();
});


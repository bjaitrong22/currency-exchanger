import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service';

let currencyCodeAndRates = {};
const currencyInputElement = document.querySelector("#conversionCurrency-input");

function getAPIData() {
  let promise = CurrencyService.getCurrency();
  promise.then(function(currencyResponse){
    currencyCodeAndRates = currencyResponse[0].conversion_rates;    
    }, function(error) {
      printError(error);
    });
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
        console.log(element);
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

currencyInputElement.addEventListener("input", onKeyInputChange);

/*function printCurrencyRate(exchangeRates) {
  document.querySelector('#currency-rate1').innerText = `The currency exchange rate is ${exchangeRates}`;
}*/

function printError(error) {
  document.querySelector('#error').innerText = `There was a problem accessing the exchnage rate data from ExchangeRate-API for ${error}`;
}

/*function clearResults() {
  document.querySelector('#currency-rate1').innerText = null;
  document.querySelector('#baseCurrency-info').innerText = null;
  document.querySelector('#error').innerText = null;
}*/

getAPIData();
/*function handleFormSubmission(event) {
  event.preventDefault();
  clearResults();
  //const currencyAmount = document.querySelector('#currencyAmount').value;
  document.querySelector('#currencyAmount').value = null;
  //const baseCurrency = document.querySelector('#baseCurrency').value;
  document.querySelector("#baseCurrency").value = null;
  getAPIData();
}*/

//window.addEventListener("load", () => {
  //document.querySelector('form').addEventListener("input", handleFormSubmission);
//});


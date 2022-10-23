export default class CurrencyService {
  static getCurrency(baseAmount,baseCurrency) {
    return new Promise( (resolve, reject) => {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${baseCurrency}`;
      console.log(url);
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response,baseAmount]);
        } else {
          reject(response['error-type']);
        }
      });
      request.open("GET",url, true);
      request.send();
    });
  }
}
    
    
    
    
    
    
    
    






export default class CurrencyService {
  static getCurrency(baseCurrency="USD") {
    return new Promise( (resolve, reject) => {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${baseCurrency}`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response]);
        } else {
          reject(response['error-type']);
        }
      });
      request.open("GET",url, true);
      request.send();
    });
  }
}
    
    
    
    
    
    
    
    






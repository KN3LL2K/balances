const client = deepstream('localhost:6020').login();
const inputUser = document.querySelector('input.user');
const inputAmount = document.querySelector('input.amount');
const inputCurrency = document.querySelector('input.currency');

let options = {};

inputUser.onkeyup = (() => {
  options.userID = inputUser.value;
});
inputAmount.onkeyup = (() => {
  options.update = inputAmount.value;
});
inputCurrency.onkeyup = (() => {
  options.currency = inputCurrency.value.toUpperCase();
});



const checkBalance = () => {
  console.log('options', options);
  client.event.emit('checkBalance', options);
}

const updateBalance = () => {  
  console.log('options', options);
  client.event.emit('updateBalance', options);
}



const balanceListener = () => {
  client.event.subscribe('returnBalance', (data) => {
    console.log('user balance is', data);
  })
}

balanceListener();

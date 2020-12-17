let getItem = function() {
    let userInput = prompt('please enter what color of cats you need to order?');
    let item = '';
  
    while(userInput !== 'black' && userInput !== 'wihte') {
      userInput = prompt('Please enter something like black or wihte only');
    }
  
    if(userInput === 'black') {
      item = '<img src="cats/b2.jpg" />';
    } else if (userInput === 'wihte') {
      item = '<img src="cats/w2.jpg" />';
    }
  
    return item;
  }

 

  let howMany = function() {
    let count = prompt('How many cats do you want to order');
  
    while(count === '' || isNaN(count)) {
      count = prompt('Please enter a number!!');
    }
  
    return count;
  }

  
  
  
  let showOrder = function() {
    let item = getItem();
    let total = howMany();
    let result = '';
  
    for(let i = 0; i < total; i++) {
      result = result + '<p>Type #' + i + ' ' + item + '</p>';
    }
    
    return result;
  }

  
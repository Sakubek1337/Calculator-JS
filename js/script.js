let display = document.getElementById('display');
let buttons =  Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
  button.addEventListener('click', (e) => {
    switch(e.target.innerText){
      case '=': 
        try{
          display.innerText = eval(display.innerText);
        }catch{
          display.innerText = 'Error!';
        }
        break;
      case '←':
        display.innerText = display.innerText.slice(0, -1);  
        break;
      case 'C':
        display.innerText = '';
        break;
      default:
        if(display.innerText === 'Error!'){
          console.log('Clearing...')
          display.innerText = '' + e.target.innerText;
        }else{
          display.innerText += e.target.innerText;
        }    
    }
  })
})
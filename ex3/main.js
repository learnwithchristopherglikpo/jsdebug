const inputs = document.querySelectorAll('input');
const label = document.querySelector('p');
const button = document.querySelector('button');
button.addEventListener('click', onClick);
function onClick() {
    if (FieldsAreEmpty()) {
      label.textContent = 'Input fields cannot be empty';
      return;
    }
    updateLabel();
  }
  function FieldsAreEmpty() {
    if (getNum1() === '' || getNum2() === '') {
      return true;
    } else {
      return false;
    }
  }
  function updateLabel() {
    let addend1 = getNum1();
    let addend2 = getNum2();
    let sum = addend1 + addend2;
    label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
  }
  function getNum1() {
    return inputs[0].value;
  }
  function getNum2() {
    return inputs[1].value;
  }
 
  
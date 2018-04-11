// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import { Calculator } from 'calculator';

const aInput = document.getElementById('value-a');
const bInput = document.getElementById('value-b');
const addButton = document.getElementById('action-add');
const displaySum = document.getElementById('display-sum');

addButton.addEventListener('click', (event) => {
  const aValue = (aInput as HTMLInputElement).value;
  const bValue = (bInput as HTMLInputElement).value;

  if (!aValue || !bValue) {
    displaySum.innerHTML = 'Please fill in the blank areas';
    return;
  }

  // displaySum.innerHTML = `a: ${aValue} | b: ${bValue}`
  const myCalculator = new Calculator(parseInt(aValue, 10), parseInt(bValue, 10));
  displaySum.innerHTML = myCalculator.add().toString();
});

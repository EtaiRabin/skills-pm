// Get all relevant elements.
// const table1 = document.getElementById('table1');
const table1 = document.querySelector('#table1');
const table2 = document.querySelector('#table2');
const table3 = document.querySelector('#table3');

const button1 = document.querySelector('#btnTable1');
const button2 = document.querySelector('#btnTable2');
const button3 = document.querySelector('#btnTable3');

// This function receives a table element, and resets all 'tr' elements classes to black.
function resetTextColorToBlack(someTable) {
  const tbody = someTable.children[1];
  const tableTrElements = Array.from(tbody.children);
  for(let tr of tableTrElements){
    tr.className = 'backToBlack';
  }
}
// Add functionality to all buttons
button1.addEventListener('click', () => resetTextColorToBlack(table1))

button2.addEventListener('click', () => resetTextColorToBlack(table2))

button3.addEventListener('click', () => resetTextColorToBlack(table3))


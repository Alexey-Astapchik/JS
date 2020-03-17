нужно закрасить каждую третью ячейку в каждом ряду
one way 
let body = document.body;
let tab = body.querySelector('table').rows[0].cells;
let tabOne = body.querySelector('table').rows[1].cells;
let tabTwo = body.querySelector('table').rows[2].cells;
let tabThree = body.querySelector('table').rows[3].cells;
tab[2].style.background = 'red';
tabOne[2].style.background = 'red';
tabTwo[2].style.background = 'red';
tabThree[2].style.background = 'red';


second way
let body = document.body;
let tab = body.querySelector('table');
let tr = tab.rows;

for (let i = 0; i < tr.length; i++){
    tr[i].cells[2].style.background = 'pink';
}
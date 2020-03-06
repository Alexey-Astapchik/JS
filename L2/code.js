let data = [{
    firstName: 'Ashton',
    lastName: 'Kutcher',
    age: 40
}, {
    firstName: 'Bradley',
    lastName: 'Pitt',
    age: 54
}, {
    firstName: 'Hannah',
    lastName: 'Dakota',
    age: 24
}];

let queryData = prompt('Please, enter username');
let result = 'No results found for your request';

for (let i = 0; i < data.length; i++) {
    if (queryData === data[i].lastName || queryData === data[i].lastName.toLowerCase() || queryData === data[i].lastName.toUpperCase()) {
        alert('User is found: ' + '\nUser name: ' + data[i].firstName + ' ' + data[i].lastName + ' ' + '\nUser age: ' + data[i].age);
        result = `user name : ${data[i].firstName} user age: ${data[i].age}`;
    } 
}
console.log(result);


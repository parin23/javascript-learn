console.log("script is imprted Succesfully");

const lowerbound = document.querySelector('#lowerbound');
const upperbound = document.querySelector('#upperbound');

const form = document.querySelector('#form-1');

form.addEventListener('submit',event => {
    event.preventDefault();

    let low = Number(lowerbound.value);
    let high = Number(upperbound.value)
    
    let ans = Math.floor(Math.random()*(high - low)) + low;

    const display = document.querySelector('.screen');

    const text = `
    <span>${ans}</span>
    `

    display.innerHTML  = text;
});

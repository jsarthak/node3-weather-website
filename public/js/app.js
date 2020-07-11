// const url = 'http://puzzle.mead.io/puzzle';
// fetch(url).then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     });
// }).catch((e) => {

// });
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.getElementById('message-one');
const messgaeTwo = document.getElementById('message-two');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    messageOne.textContent = "Loading...";
    messgaeTwo.textContent = '';
    const searchValue = search.value;
    const url = `http://localhost:3000/weather?address=${searchValue}`;

    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
                messgaeTwo.textContent = '';
            } else {
                messageOne.textContent = (data.location);
                messgaeTwo.textContent = (data.forecast);
            }
        });
    });
})
// js/script.js
function birthdayParty() {
    document.getElementById("message").innerHTML = `
        <h1>Happy Birthday!!</h1>
        <p>Wishing you a day filled with love and happiness.</p>
        <img src="images/happyBirthday.jpg" alt="Birthday Cake">
        
    `;
}

function GoToWork() {
    document.getElementById("message").innerHTML = `
        <h1>No Party Today!</h1>
        <p>Only work, but don't worry, your special day is coming!</p>
    `;
}

function checkBirthday() {
    const today = new Date();
    const birthday = new Date('March 05, 2025');

    if (today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth() && today.getFullYear() === birthday.getFullYear()) {
        birthdayParty();
    } else {
        GoToWork();
    }
}

window.onload = checkBirthday;

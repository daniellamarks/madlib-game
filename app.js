const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const input3 = document.getElementById("input-3");
const input4 = document.getElementById("input-4");
const input5 = document.getElementById("input-5");
const input6 = document.getElementById("input-6");
const input7 = document.getElementById("input-7");
const display1 = document.getElementById("display-1");
const display2 = document.getElementById("display-2");
const display3 = document.getElementById("display-3");
const display4 = document.getElementById("display-4");
const display5 = document.getElementById("display-5");
const display6 = document.getElementById("display-6");
const display7 = document.getElementById("display-7");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener('click', () => {
    display1.textContent = input1.value;
    display2.textContent = input2.value;
    display3.textContent = input3.value;
    display4.textContent = input4.value;
    display5.textContent = input5.value;
    display6.textContent = input6.value;
    display7.textContent = input7.value;
    const story = document.getElementById("story")
    story.classList.remove('hidden')
})

console.log(input1, display1)
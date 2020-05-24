// Set a value in browser storage (local or session)

const keyName = "name";
const keyValue = "mada";

localStorage.setItem(keyName, keyValue);
const getName = localStorage.getItem("name");
console.log("getName" + getName);


const getAnswer = document.getElementsByName('ans');
console.log("getAnswer " + getAnswer)


for (let i = 0; i < getAnswer.length; i++) {
    const answer = localStorage.getItem('ans');
    getAnswer[i].addEventListener('click', (event) => {
        localStorage.setItem('ans', event.target.value);
    })
    if (getAnswer[i].value === answer) {
        getAnswer[i].checked = 'checked';
    }

}
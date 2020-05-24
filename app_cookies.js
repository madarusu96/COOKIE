//1. Set a cookie on a document / Set a value in browser storage (local or session)

document.cookie = "username=mada_rusu"
document.cookie = "age=25"

// 2. Read all cookies (storage)
var x = document.cookie;
// ○ The one whose value equals cookie’s value (storage value) should be “pre-selected”
const languageRadio = document.getElementsByName("languages");
const cookiesObj = verifyCookieValue();
const actualButton = getButton();

document.getElementById("radio-group").addEventListener("click", function () {
    const actualButton = getButton();
    document.cookie = "language=" + actualButton.value;

})
for(let i = 0; i < languageRadio.length; i++){
    if(languageRadio[i].value === cookiesObj.language){
        languageRadio[i].checked = "checked";
    }

    languageRadio[i].addEventListener("click", (event) => {
        document.cookie = `language=${event.target.value}`
    })
}


function getButton() {
    for (var i = 0; i < languageRadio.length; i++) {
        if (languageRadio[i].checked) {
            return languageRadio[i];

        }
    }
}
function verifyCookieValue() {
    //console.log("cookie string " + document.cookie);
    let cookieValue = document.cookie.split("; ");
    let cookieObject = {};

    cookieValue.forEach((element) => {
        let cookieData = element.split("=");
       // console.log("cookieData======="+cookieData)
        cookieObject[cookieData[0]] = cookieData[1];
        console.log(cookieObject);
    })
   // console.log("cookieObject" + cookieObject)
    return cookieObject;
}

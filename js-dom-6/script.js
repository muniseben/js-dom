// 1. Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.

//////////////////////////// alternative - 1 /////////////////////////

// const input = document.getElementById('firstname');
// const spanKey = () => {

// const span = document.getElementById('display-firstname');
//     span.textContent = input.value;
// }
// input.addEventListener('keyup', spanKey);

//////////////////////////// alternative - 2 ///////////////////////

let firstname = document.querySelector('input');
let span =document.querySelector('span');

firstname.addEventListener('change',() => {
    span.innerText = firstname.value
});

// 2 .Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.

const input_age = document.getElementById('age');
const visib_elmnt = document.getElementById('a-hard-truth');

const ageKey = () => {
    yas = input_age.value
    if (yas >= 18) {
       visib_elmnt.style.visibility = "visible";
    }
    else if (yas < 18) {
      visib_elmnt.style.visibility = "hidden";
    }
}

input_age.addEventListener('keyup', ageKey);

//keyup | anahtarlama

// 3. Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.

const pwd_elmnt = document.getElementById('pwd');
const confirm_elmnt = document.getElementById('pwd-confirm');
const cre_span = document.createElement("span");
pwd_elmnt.appendChild(cre_span);

const cre_span_2 = document.createElement("span");
confirm_elmnt.appendChild(cre_span_2);

const pwdKey = () => {

    cre_span.textContent = pwd_elmnt.value;
    const chr  = cre_span.textContent.length

    if (chr > 5){
        pwd_elmnt.style.background= "green";

    } else {
        pwd_elmnt.style.background= "red";
        }
}

const pwdcKey = () => {

    cre_span_2.textContent = confirm_elmnt.value;
    const chr  = cre_span_2.textContent.length

    if (cre_span.textContent == cre_span_2.textContent && chr > 5){
        confirm_elmnt.style.background= "green";

    } else {
        confirm_elmnt.style.background= "red";
}
}

pwd_elmnt.addEventListener('keyup', pwdKey);
confirm_elmnt.addEventListener('keyup', pwdcKey);

// 4. Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.

const toggle = document.getElementById('toggle-darkmode');
toggle.addEventListener('change',() => {
document.body.style.backgroundColor = "black";
document.body.style.color = "white";
})

//////////////////////////// NOTES /////////////////////////////////

let x = document.querySelector('section')[2];
console.log(x);

// Add Keyup listener on  first input field

// Add a keyup listener on the second input - remains hidden

// Visual hint - turn red

// change listener on the select file

//////////////////////////// NOTES /////////////////////////////////



// eventTarget.addEventListener("keyup", (event) => {
//     if (event.isComposing || event.keyCode === 229) {
//       return;
//     }
//     // do something
//   });

//////////////////////////// NOTES /////////////////////////////////

// v-on:click
// app.names.push



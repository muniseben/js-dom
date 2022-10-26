// Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
// Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.
// Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.
// Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.

//1

const container = document.querySelector("ul")
const lis = document.querySelectorAll("li")
const films = container.childNodes
var string = "";

for (i = 0; i < films.length; i++) {
    films.nodeType === 1
    string = string + films[i].textContent;
}

console.log(string)

//2.1 & 2.2

for (i = 0; i < films.length; i++) {
    films.nodeType === 1
    if (films[i].textContent == "Fast and Furious") {
        container.insertBefore(films[i], films[0])
    }
}

//2.3

for (i = 0; i < films.length; i++) {
    films.nodeType === 1
    if (films[i].textContent == "Fast and Furious") {
        films[i].classList.add("important")
    }
}

//2.4 & 2.5


const clickli = (e) => {
    if (e.target.innerText == "Fast and Furious") {
        alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
    } else{
    alert(e.target.innerText);
}
}

    for (let liso of films) {
   liso.addEventListener('click', clickli)}


//2.6

for (i = 0; i < films.length; i++) {
    films.nodeType === 1

    for (e = 0; e < films.length; e++)
    if (films[i].textContent == films[e].textContent && films[i] !== films[e]) {
        container.removeChild(films[e])
    }
}

body = document.querySelector("body")

for (element of films){
if (element.textContent == "Fast and Furious") {
var fasty = element}}

const randomClone = (e) => {
    if (e.key == "r" ||
    e.code == "KeyR" ||
    e.keyCode == 82
) {
  for(i=0; i < films.length; i++) {
     let index = Math.floor(Math.random() * films.length);
     container.appendChild(films[index]);
     console.log(index)
    }
   for (let element of films) {
      if (element.textContent === "Fast and Furious") {
           container.prepend(element);
        }
      }
  }

  else if (e.code == "KeyD") {
    const fandf = fasty.cloneNode(true);
    container.prepend(fandf);
  }
}

body.addEventListener('keyup', randomClone)
// 5, 6 & 7


mynewdiv = document.createElement("div");
body.appendChild(mynewdiv)
body.insertBefore(mynewdiv, body.children[1])

newselect = document.createElement("select");
mynewdiv.appendChild(newselect)
newoption3 = document.createElement("option");
newselect.appendChild(newoption3)
newoption = document.createElement("option");
newselect.appendChild(newoption)
newoptiontext = document.createTextNode("normal franchises")
newoption.appendChild(newoptiontext)
newoption2 = document.createElement("option");
newselect.appendChild(newoption2)
newoptiontext2 = document.createTextNode("important franchises")
newoption2.appendChild(newoptiontext2)

select = document.querySelector("select")

const selectFr = (e) => {
    if (select.selectedIndex === 2){
    for (let element of lis) {
        if (element.textContent === "Fast and Furious") {
            element.style.visibility = 'visible'
          } else {
            element.style.visibility = 'hidden'
          }
        }
 }

 else if (select.selectedIndex === 1){
    for (let element of lis) {
        if (element.textContent === "Fast and Furious") {
            element.style.visibility = 'hidden'
          } else {
            element.style.visibility = 'visible'
          }
        }
    }


    else if (select.selectedIndex === 0){
        for (let element of lis) {
                element.style.visibility = 'visible'
            }
        }
 }

select.addEventListener('change', selectFr)
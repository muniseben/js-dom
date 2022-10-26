
const show_sections =document.querySelectorAll('section');
const section_m =show_sections[0];
const section_l =show_sections[2].children[1];


const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

//1.Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  const mydiv = document.createElement('div');
  section_m.appendChild(mydiv);  //sonraki asamada divimize class ekleyecegiz
  mydiv.classList.add('displayedsquare');
  mydiv.classList.add(e.target.classList[1]);

// mydiv.className= "displayedsquare";  // bu metod iyi ama hep kullanilmasi
// mydiv.className= (e.target.classList[1]);


//2. Create a new <li> in the log below to state when the action was done
  const myli = document.createElement('li');
  section_l.appendChild(myli);
  const info_m = document.createTextNode(getElapsedTime()+" created a new " + e.target.classList[1]+ ' square');
  myli.appendChild(info_m);
}
//3.Add an event listener on the document <body>, listening for the keypress event. (hint: have a look at this)

// When the spacebar is hit randomly change the background color of the whole page

// Log when the spacebar is used the same way you used for the generated squares.

// When the l key is pressed the log gets deleted (erases the generated <li>s). Mind you: using a delete in a for loop might cause issues (as the amount of items to loop over changes), so a while loop might be a good choice instead.

// When the s key is pressed the squares get deleted (erases the generated squares)

document.body.onkeyup = function(e) {
  if (
      e.code == "Space"
  ) {
    d1 = Math.floor(Math.random() * 255);
    d2 = Math.floor(Math.random() * 255);
    d3 = Math.floor(Math.random() * 255);

    randomcolor = "rgb("+d1+","+d2+","+d3+")";

    document.body.style.background = randomcolor;
}}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}


document.getElementById("press_button").onclick = function(){
    alert();
}
//////////////////////////////////////////////////////////////

console.log(document.querySelector('#header'));

/////////////////////////////////////////////////////////////

document.getElementById("section_one").innerHTML="Modifying the DOM";

/////////////////////////////////////////////////////////////

// const myFunction = () =>  {
//     var disp_tit = document.getElementsByTagName("TITLE")[0].text;
//     document.getElementById("title_p1").innerHTML = disp_tit;
//   }
// myFunction();

////////////////////////////////////////////////////////////

document.body.style.backgroundColor = "#FF69B4";

////////////////////////////////////////////////////////////

// const collection = document.body.children;
// let text = "";
// for (let i = 0; i < collection.length; i++) {
//     text += collection[i].tagName + "<br>";
// }
// document.getElementById("title_p2").innerHTML = text;

///////////////////////////////////////////////////////////////

// const collection = document.body.children;
// let text = "";
// for (let i = 0; i < collection.length; i++) {
//     text += collection[i].tagName + "<br>";
// }
// document.getElementById("title_p2").title = "This is an important item"

///////////////////////////////////////////////////////////////

// const collection = document.body.children;
// let text = "";
// for (let i = 0; i < collection.length; i++) {
//     text += collection[i].tagName + "<br>";
// }
// document.getElementById("title_p2").className = "important"

/////////////////////////////////////////////////////////////////

let val;
val = document.getElementById('section_one');
val = document.getElementById('section_one').id;
val = document.getElementById('section_one').className;

console.log(val);

/////////////////////////////////////////////////////////////////

let vala;
vala = document.getElementById('h1');
vala.style.fontSize='48px';

console.log(vala);

///////////////////////////////////////////////////////////////

document.querySelector('li:nth-child(3)').textContent = "task item";

// ///////////////////////////////////////////////////////////////

const create_img = document.createElement('img');

create_img.className= 'important';

create_img.setAttribute('title', 'image1');

create_img.setAttribute('src','https://envato-shoebox-0.imgix.net/825b/38b5-ee60-4d57-bfb1-44085e846142/DR_110614_5672-Edit.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=804f44f4a776554c5243c22077522915');

create_img.setAttribute('alt', 'nature_bird');
create_img.setAttribute('height', 350); //  height in px
create_img.setAttribute('width', 550); // width in px

const section_one = document.getElementById('section_one');
section_one.appendChild(create_img);
console.log(create_img);

////////////////////////////////////////////////////

console.log(document.querySelectorAll('body *'));

//////////////////////////////////////

const listItems = document.querySelector('ul').children;
const listArray = Array.from(listItems);
console.log(listArray)

////// or

// const listItems = document.querySelector('ul').children;
// const listArray = [...listItems];
// listArray.forEach((item) => {console.log(item)});

////////////////////////////////////////////////////

var children = document.getElementById('section_one').children;
for(var i=0; i<children.length; i++){
         console.log(children[i]);
}

///////////////////////////////////////////////////////
const all_img_elements = document.getElementsByTagName('img');

for (const element of all_img_elements) {
  console.log(element);

  if (element.textContent === 'important') {
    break;
  }
}
///////////////////////////////////////////////////////

/////// look again!
// const all_img_elements = document.getElementsByTagName('img');
// const imp = document.querySelectorAll('.important');
// for (const element of all_img_elements) {
//   console.log(element);

//   if (element.classList == 'important') {
//     break;
//   }
//   else { selectimg[i].style.display = 'none';}
// }

// selectimg[i].style.display = "none"
// const element = document.getElementsByTagName('img');

//     const imp = document.querySelectorAll('.important');

//     for (let i = 0; i < element.length; i++) {
//        if( element[i].className == 'important'){
//         console.log("this element has class = important ");
//        }else{
//         element[i].style.display = 'none';
//         console.log("no class");
//        }

//     }

// document.getElementById("img.important").style.display = "block";


// const all_p_elements = document.getElementsByTagName('p');
// console.log(all_p_elements);


////////////////////////////////////////////////////////////


// font size vermek
// var p_var=15;
// var s=document.getElementsByTagName('p');
// for(i=0;i<s.length;i++)
// {
//     s[i].setAttribute("style","font-size:"+p_var+"px");
// }

///////////////////////////////////////////////////////

// bu bi ornek ama ise yariyor
// const setBg = () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
//     color.innerHTML = "#" + Math.floor(Math.random()*16777215).toString(16);
//   }

///////////////////////////////////////////////////////

// ise yariyor
// var list= document.getElementsByTagName('p');
// for (var i = 0; i < list.length; i++) {
//     list[i].style.color = "white";
// }

///////////////////////////////////////////////////////

// normal color vermek
// var renk='salmon';
// var element_p=document.getElementsByTagName('p');
// for(i=0;i<s.length;i++)
// {
//     element_p[i].setAttribute("style","color:"+renk );
// }

///////////////////////////////////////////////////////

// ilk elemana random renk vermek
var list= document.getElementsByTagName('p');
for (var i = 0; i < list.length; i++) {
    list[i].style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
}

///////////////////////////////////////////////////////

const create_article = document.createElement('article');
create_article.className= "class_article";
content.appendChild(create_article);

const create_section = document.createElement('section');
create_section.className= "class_section";
content.appendChild(create_section);

const x = document.querySelector('.class_article');
x.appendChild(create_section);

let p1 = document.createElement('p');
p1.textContent ="first name,second name bla bla ";

const c = document.querySelector('.class_section');
c.appendChild(p1);

///////////////////////////////////////////////////////

// let p1 = document.createElement('p');
// p1.textContent ="first name,second name bla bla ";

// const c = document.querySelector('.class_section');
// c.appendChild(p1);

//create a new term
// const terms = document.createElement('p');

// //set id
// terms.setAttribute("id","para-1");

// //add the new element to html
// var body = document.querySelector('body');
// body.appendChild(terms)
// document.getElementsByTagName("p")[0].innerHTML="Welcome to Educative!";

//change attribute of the id
// document.getElementsById("H1")[0].setAttribute("class", "democlass");

const cre_par = document.createElement('p');
// cre_par.setAttribute("id","para-1");
var section = document.querySelector('section');
section.appendChild(cre_par)
document.getElementsByTagName("p")[0].innerHTML="i added!";




## Note: 

I studied the titles 1.Introduction / 2.Selectors / 3.Create only in the introduction part. Ups! :shushing_face: 

That's why my HTML file is complex. :relieved: 

But from now on, I'm starting to work in the right place.

You will find my notes and solutions in the readme file. 
# DOM

- The DOM defines a standard for accessing documents | Belgelere erisim icin bir standart tanimlar. 

- It is a standard for how to get, change, add, or delete HTML elements. 

- There are some predefined Javascript objects in your browser. The DOM is one of them.

- Text nodes |  cannot bear a child, nor have attributes.

- <p>Hello</p> |  p = node containing | Hello = textnode.

- <script defer src="script.js"></script> | helps fully loaded |  erteleme ozelligi linkin altina eklenir. 

#### Display the document title in the console
## a
```js
let val;
val = document.title;

console.log(val);     //  <title>Exploring the DOM</title>   // Exploring the DOM
```
## b
```js
console.log(document.querySelector('#h1')); // id secmek icin # isareti sart!
```
#### Display the class in the console
## a
```js
console.log(document.querySelector(".class_one"));   // sinif secmek icin . isareti sart! // selects only the first element it finds.
```
#### Display all HTML elements
```js
let val;
val = window.document;

console.log(val);    
```
#### Display all HTML Collection
```js
let val;
val = document.all;

console.log(val);   
```
#### Display how many elements are there
```js
let val;
val = document.all.length;

console.log(val);     //  Kac adet elemanin oldugunu yazar.
```
#### Display the 11.element
```js
let val;
val = document.all[10];

console.log(val);     //  11.elemani bulur ve alir.
```
#### Display the document title in a window
```html
<p id="title_p"></p>    <!-- p'ye id ver. -->
```
```js
var disp_tit = document.getElementsByTagName("TITLE")[0].text; 
document.getElementById("title_p").innerHTML = disp_tit; 
```
#### Display all 'li' elements with querySelector
## a
```js
const listItems = document.querySelector('ul').children;
const listArray = Array.from(listItems);

console.log(listArray)
```
## b
```js
const listItems = document.querySelector('ul').children;
const listArray = [...listItems];
listArray.forEach((item) => {console.log(item)});
```
#### Select Single Element
## a
```js
let val;
val = document.getElementById('section_one');   // id yi secmek
val = document.getElementById('section_one').id;  // id yi goster
val = document.getElementById('section_one').className;  // class adini goster

console.log(val);
```
## b
```js
let val;
val = document.getElementById('section_one');   // We only need to write this once
val = val.id;  // id yi goster
val = val.className;   // class adini goster

console.log(val);
```
#### Change the fontsize
```js
let val;
val = document.getElementById('h1');
val.style.fontSize='48px';

console.log(val);
```

#### Change the document title to 'Modifying the DOM'
```js
document.getElementById("title_p2").innerHTML="Modifying the DOM";
```
#### Change li text content (element 3)
```js
document.querySelector('li:nth-child(3)').textContent = "bla bla bla";
```

- innerText and texContent are change content. | Their purpose is the same

#### Change the background color of the body to hot pink (#FF69B4). If that worked, try with a random color as an extra challenge. (tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255)
```js
document.body.style.backgroundColor = "#FF69B4";
```
#### Using the children method and a for ... of loop, display every children elements of the second child element of your document (display all children elements of the <body>)
## a
```js
var children = document.getElementById('section_one').children;
for(var i=0; i<children.length; i++){
         console.log(children[i]);
}
```
## b
```js
const collection = document.body.children;
let text = "";
for (let i = 0; i < collection.length; i++){
        text += collection[i].tagName + "<br>";
    }
document.getElementById("add_title").innerHTML = text;
```
## c
```js
console.log(document.querySelectorAll('body *'));
```
#### Add a class attribute "important"
```js
const collection = document.body.children;
let text = "";
for (let i = 0; i < collection.length; i++) {
    text += collection[i].tagName + "<br>";
}
document.getElementById("title_p2").className = "important"
```
#### Add a title attribute "This is an important item" 
```js
const collection = document.body.children;
let text = "";
for (let i = 0; i < collection.length; i++) {
    text += collection[i].tagName + "<br>";
}
document.getElementById("title_p2").title = "This is an important item;"
```
#### Add a title attribute to every element that has the important class, stating This is an important item. Tip: adding a title attribute to an element is different from changing the title of a document.
```js
answer to the above two questions
```


#### Add img element
```js
const create_img = document.createElement('img');
// add class
create_img.className= 'important';

// add title
create_img.setAttribute('title', 'image1');

// add src
create_img.setAttribute('src','https://envato-shoebox-0.imgix.net/825b/38b5-ee60-4d57-bfb1-44085e846142/DR_110614_5672-Edit.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=804f44f4a776554c5243c22077522915');

// add alt
create_img.setAttribute('alt', 'nature_bird');

//  height in px
create_img.setAttribute('height', 350); 

// ️ width in px
create_img.setAttribute('width', 550); 

//write on document
const section_one = document.getElementById('section_one');
section_one.appendChild(create_img);

//display on console
console.log(create_image);
```
#### Select all the img tags and loop through them. 
```js
const all_img_elements = document.getElementsByTagName('img');

for (const element of all_img_elements) {
  console.log(element);

if (element.textContent === 'important') {
    break;
  }
}
```
#### Select all the img tags and loop through them. If they have no important class, turn their display property to none
```js
Look again! 
val = style.display.none
```

#### Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
```js
const all_p_elements = document.getElementsByTagName('p');

 console.log(all_p_elements);
```
#### Give firs of the paragraph a white color
```js
var list= document.getElementsByTagName('p');
for (var i = 0; i < list.length; i++) { 
list[i].style.color = "white";
 }
```
#### Give firs of the paragraph a random text color
```js
var list= document.getElementsByTagName('p');
for (var i = 0; i < list.length; i++) {
    list[i].style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
}
```
#### Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
```js
Look Again!
```
# CREATING NODES

-  document.createElement()  

- createTextNode

-  appendChild

-   insertBefore

#### Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
```js
//Without random background

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
```

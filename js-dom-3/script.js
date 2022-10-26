
// 1. create article and its class name by without usind <getElementById> but in the end

const create_article = document.createElement('article');
create_article.className= "class_article_2";
document.body.append(create_article);

// 2. create article withoud id.

 document.body.appendChild(
    Object.assign(
      document.createElement('article'),
      { id : 'id_article_2'}
    )
  )

// 3. create li list in article

const names = document.createElement('li');
names.setAttribute('id','id_li_1');
names.textContent ="people1, people2, people3, people4, people 5";
const id_article_2 = document.getElementById('id_article_2');
main_id.appendChild(names);

// 4. add list in to the article

const x =document.getElementById('id_article_2');
x.appendChild(names);

// 5. add all elements in the section

document.body.appendChild(
    Object.assign(
      document.createElement('section'),
      { id : 'id_section_1'}
    )
  )

  const y =document.getElementById('id_section_1');
  y.append(id_article_2);

// 6. delete footer

const rem = document.querySelector("footer");
rem.parentElement.removeChild(rem);


// 7. Find a way so that everytime you load the page the order of the elements changes!//thanks for BENYAMINNNN

var people = ["x", "r", "c", "t", "y", "h"]
var my_list = people.length

people.sort(() => Math.random() - 0.5);

for (i=0; i<my_list; i++) {
    var sec = document.createElement("section");
    var text = document.createTextNode(people[i]);
    sec.appendChild(text);
    var element = document.querySelector('article');
    element.appendChild(sec);

    d1 = Math.floor(Math.random() * 255);
    d2 = Math.floor(Math.random() * 255);
    d3 = Math.floor(Math.random() * 255);

    randomcolor = "rgb("+d1+","+d2+","+d3+")";

    sec.style.background = randomcolor;

}

let bgColor = document.querySelectorAll('section');

for (let text_2 of bgColor) {
    let d1 = Math.floor(Math.random() * 360);
    let d2 = Math.floor(Math.random() * 100);
    let d3 = Math.floor(Math.random() * 100);
    text_2.style.background = 'hsl('+ d1 +','+ d2 +'%,'+ d3 +'%)';
    if (d3 > 50) {
        text_2.style.color = 'black';
    }
    else if (d3 <= 50) {
        text_2.style.color = 'white';
    }
}


//////////////////  MAY HELP LATER /////////////////////////////

// ------- create article and its id by usind <getElementById>

// const cr_a = document.createElement('article');
// cr_a.setAttribute('id','id_article_1');
// cr_a.textContent ="people1, people2, people3, people4, people 5";
// cr_a.innerHTML =`<span> ikinci bir article  </span>`; / 2.alternative
// const main_id = document.getElementById('main_id');
// main_id.appendChild(cr_a);

// ------ add list

// const create_ul = document.createElement('ul');
// create_ul.className= "class_ul";
// document.body.append(create_ul);


// ----- add input
// let newElement = document.createElement('input');
// document. body. appendChild(newElement)


// ----- id varsa list yaparsin
// const create_ul = document.createElement('ul');
// create_ul.className= "class_ul";
// document.body.append(create_ul);

// const create_list= (text) => {
//     var li = document.createElement('li');
//     li.textContent = text;
//     return li;
// }

// const append_cild = (parent, children) => {
//     children.forEach(function (child){
//         parent.appendChild(child);
//     });
// }

// var list_m =document.getElementById('list-yaz');
// var items =[
//     createListItem('x'),
//     createListItem('y'),
//     createListItem('d'),
// ];

// appendChild(list_m,items);






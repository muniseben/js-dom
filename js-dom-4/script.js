
// 1.Select the last child of the <ol> tag and put it at the beginning of the list

const ol = document.querySelector("ol");
const lastOlChild = ol.lastElementChild;
ol.prepend(lastOlChild);

////////////////////////////////////////////////////

// 2.Move the <h2> of the third section in the second one and vice-versa

var header3 = document.getElementsByTagName('h2')[2];
var header2 = document.getElementsByTagName('h2')[1];

var x = header3.innerHTML;
var y = header2.innerHTML;

header2.innerHTML =x;
header3.innerHTML =y;

////////////////////////////////////////////////////

// 3. Delete the last section from the DOM, we don't need it anyways

const del = document.getElementsByTagName('footer')[0];
del.parentElement.removeChild(del);

/////////////////en bastakini en sona getiriyor////////////

// (() => {
//     const my_list = document.querySelector("ol");
//     my_list.appendChild(my_list.firstElementChild);
//   })();

///////////////// for replace ///////////////////////////
// var source=document.getElementById('first');
// var target=document.getElementById('second');
// target.appendChild(source);

// target.innerHTML += source.innerHTML;

// source.innerHTML ='';

//////////////////sadece header 3 un adini degistiyor.//////////////////

// header2.innerHTML = header3.innerHTML; //third - second

////////////////////sadece header3un yerini degistiiryor ve 2 yi siliyor///////////

// header2.replaceChild(header3, header2.childNodes[0]);

////////////////////////////////////
// const li= document.getElementsByTagName('li');
// const lastItem = li[li.length - 1]
// console.log(lastItem);


// const firstItem = li[li.length-5]
// console.log(firstItem);







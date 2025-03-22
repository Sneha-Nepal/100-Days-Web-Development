This section introduced me to DOM in JavaScript.

document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Me";
document.querySelector();
document.querySelectorAll();
document.getElementById()
document.getElementsByTagName()
document.getElementsByClassName()

Above are some codes which were taught in this section.
It seems like querySelector and querySelectorAll are more used than other codes.
JavaScript styling follows camel case and everything should be mentioned inside a string.

document.querySelector("h1").classList.add()
document.querySelector("h1").classList.remove()
document.querySelector("h1").classList.toggle()

document.querySelector().innerHTML = "";
document.querySelector().textContent = "";
The major difference between these two lines of code is that we can also add HTML codes in innerHTML tag 
whereas only text can be manipulated in the textContent tag.

document.querySelector().attributes;
document.querySelector().getAttribute();
document.querySelector().setAttribute();
These are lines of code for manipulating attibutes of HTML tags.

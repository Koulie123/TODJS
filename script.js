const div = document.createElement('div');
const body = document.querySelector('body');

const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.color = 'red';
const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
const p2 = document.createElement('p');
p2.textContent = "ME TOO!";
body.appendChild(p);
div.appendChild(h1);
div.appendChild(p2);
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';
body.appendChild(div);


const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World!");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Hello World!");
});
function alertFunction() {
    alert("Yay you did it!");
}
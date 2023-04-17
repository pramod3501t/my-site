const colour=`#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`;
console.log(colour);
// document.body.style.backgroundColor='red';
// let bg_colour=document.querySelector('body');
// console.log(bg_colour);
// bg_colour.style.backgroundColour=`${colour}`;
let swh=document.querySelector('.on');
let body=document.querySelector('body');
on.onclick =function(){
    body.classList.toggle('switch_on');
}
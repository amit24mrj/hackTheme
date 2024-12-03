const matrix= document.querySelector('.matrix');
const characters=['0','1'];

function createMatrix(){
    const span =document.createElement('span');
    span.textContent=characters[Math.floor(Math.random()*characters.length)];
    span.style.left=Math.random()*100+'vw';
    span.style.animationDuration=Math.random()*3+2+'s';
    matrix.appendChild(span);
    setTimeout(()=>{
        span.remove();
    },3000)
}
setInterval(createMatrix,50);
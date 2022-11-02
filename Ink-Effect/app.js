let body = document.querySelector('body');
basicColor = ['palevioletred', 'violet', 'grey', 'royalblue'];

const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const color3 = document.querySelector('.color3');
const color4 = document.querySelector('.color4');

let color = []; 
color = document.querySelectorAll('.color');
console.log(color);


document.addEventListener('mousemove', (e)=>{
    let circle = document.createElement('span');
    let x= e.offsetX;
    let y= e.offsetY;
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    circle.style.width = 30 + "px";
    circle.style.height = 30 + "px";
    body.appendChild(circle);
    if(y < body.scrollHeight/2 & x < body.scrollWidth/2){
        circle.style.backgroundColor = basicColor[0];
    }
    else if(y > body.scrollHeight/2 & x > body.scrollWidth/2){
        circle.style.backgroundColor = basicColor[1];
    }
    else if(y < body.scrollHeight/2 & x > body.scrollWidth/2){
        circle.style.backgroundColor = basicColor[2];        
    }
    else if(y > body.scrollHeight/2 & x < body.scrollWidth/2){
        circle.style.backgroundColor = basicColor[3];        
    }
    else{
        circle.style.backgroundColor == '#232323';
    }
    
// circle.style.backgroundColor != '#232323'
    setTimeout(()=>{
        circle.remove();
    }, 150);
});

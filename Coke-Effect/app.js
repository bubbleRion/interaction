class App{
    constructor(){
        const con = document.querySelector('.con');
        const c3 = document.querySelector('.color3');
        const face = document.querySelector('.face');
        const stageWidth = document.body.scrollWidth;
        const stageHeight = document.body.scrollHeight;
        
        face.addEventListener('click',()=>{ 
            c3.classList.toggle('hidden');
            con.style.cursor = "w-resize";
    });
        this.mkColor(c3, 0,0,stageWidth, stageHeight, '#261a1e');
    
        c3.addEventListener('mousemove', ()=>{
            window.addEventListener('mousemove', this.moveColor(event,'white'));
        })

    }
    
    mkColor(c,x,y,radiusW, radiusH, color){
        c.style.backgroundColor = color;
        c.style.width = `${radiusW}px`;
        c.style.height = `${radiusH}px`;
        c.style.position = 'absolute';
        c.style.left = `${x}px`;
        c.style.top = `${y}px`;
    }
    moveColor(e, color){
        let body = document.querySelector('body');
        let circle = document.createElement('section');
        let x= e.clientX;
        let y= e.clientY;
        circle.style.left = x + "px";
        circle.style.top = y + "px";
        circle.style.width = 30 + "px";
        circle.style.height = 30 + "px";
        circle.style.backgroundColor = color;
        body.appendChild(circle);
        setTimeout(()=>{
            circle.remove();
        }, 2900);
    }
    


}
window.onload = () =>{
    new App();
}



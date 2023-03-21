let car = document.querySelector(".car");
let checkpoint = document.querySelector(".checkpoint");
let light = document.querySelector(".light");
let road = document.querySelector(".road");


let togglehandler = ()=> {
    light.classList.toggle('red');
};

let change =()=>{
    setInterval(togglehandler,Math.floor(Math.random()*4 + 5 )*1000);
};

let carwid = car.offsetWidth;
let checkwid = checkpoint.offsetLeft;
let width = road.offsetWidth;

let movecar= (flag,id)=>{
    id = setInterval(() => {
        flag += 3;
        car.style.marginLeft = flag + "px";
        if(light.classList.contains('red')&&flag+carwid<=checkwid){
            stopcar(flag,id);
        }
        if (width <= flag) {
            flag = 0;
        }
    }, 10);
}
let resume = (flag,id) =>{
    movecar(flag,id);
}

let stopcar = (flag,id)=>{
    if(flag+carwid >= checkwid){
        clearInterval(id);
        id2 =   setInterval(()=>{
            if(!light.classList.contains('red')){
                resume(flag,id);
                clearInterval(id2);
            }},10);
    }
}

let traffic=()=>{
    let flag =0;
    let id = 0;
    movecar(flag,id);
}

change();
traffic();
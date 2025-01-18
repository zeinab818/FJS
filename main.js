let stars = document.getElementById('stars');
let moons = document.getElementById('moons');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let mountains7 = document.getElementById('mountains7');// not need 
let boat = document.getElementById('boat');
let river = document.getElementById('river');
let safa = document.querySelector('.safa');

window.onscroll = function(){
    let value= scrollY;
    stars.style.left=value + 'px';
    moons.style.top=value*4 + 'px';
    mountains3.style.top=value*2 + 'px';
    mountains4.style.top=value*1.5 + 'px';
    river.style.top=value + 'px';
    boat.style.left=value*3 + 'px';
    boat.style.top=value + 'px';
    safa.style.fontSize=value + 'px';
    if(scrollY>=70){
    safa.style.fontSize= 70 + 'px';
    safa.style.position='fixed';
    if(scrollY>=350){
        safa.style.display='none';
    }
    else{
        safa.style.display='block';

    }
    if(scrollY>=150){
        document.querySelector('.main').style.background='linear-gradient(#370138,rgb(114, 134, 236))'
    }
    else{
        document.querySelector('.main').style.background=' linear-gradient(#370138,#190142)'

    }
        
    }

}
const incre = document.getElementById("btn-incre");
const decre = document.getElementById("btn-decre");
const reset = document.getElementById("btn-reset");
let counter = 0;
let changer = document.getElementById('h1');
incre.addEventListener('click',function (){
    counter++;
    changer.innerHTML = "Counter:" + counter
    changer.style.color = 'green';
    console.log(changer);
})
decre.addEventListener('click',function (){
    if(counter>0)
    counter--;
    changer.innerHTML = "Counter:" + counter
    changer.style.color = 'red';
    console.log(changer);
})
    reset.addEventListener('click',function (){
        counter = 0;
        changer.innerHTML = "Counter:" + counter
        console.log(changer);
    })

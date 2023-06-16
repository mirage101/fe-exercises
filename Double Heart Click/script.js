const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

//dbl click
let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click', (e) => {
    if(clickTime === 0){
        clickTime = new Date().getTime();
    }else{
        //dbl click check click times
        if((new Date().getDate() -  clickTime) < 800){
            //console.log(123);//its in time range 800 ms
            createHeart(e);
            clickTime = 0;
        }else{
            clickTime = new Date().getTime(); //if more set to current datetime
        }
    }
    
});

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    //position of heart in container
    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.appendChild(heart);
    times.innerHTML = ++timesClicked;

    //clear heart after 1s
    setTimeout(() => heart.remove(), 1000);
    //console.log(xInside, yInside);
}
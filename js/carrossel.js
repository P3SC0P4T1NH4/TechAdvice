const imgs = document.getElementById("iemg");
const img = document.querySelectorAll("#iemg img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx=0;
    }

    imgs.style.transform =`translateX(${-idx * 895}px)`;
}

setInterval(carrossel, 5000);

const fadeIn = document.querySelectorAll('.fade-in');
const fadeTime=300

let fadeIndex=0

function fade() {
    setTimeout(() => {
        fadeIn[fadeIndex].style.opacity='100%';
        fadeIndex += 1
        if (fadeIndex <= fadeIn.length){
            fade()
        }
        else{
            null;
        }
    },fadeTime) 
}

fade()



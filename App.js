dropdown = document.querySelectorAll('.dropdown')

expand = function expand(){
    this.previousElementSibling.classList.toggle('expand')
    console.dir(this. previousElementSibling.classList)
    console.log(this.previousElementSibling.getAttribute('class'))
}

for (drop of dropdown) {
    drop.addEventListener('click', expand)
}
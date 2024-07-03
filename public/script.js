//image slider

let next = document.querySelector('.nex')
let prev = document.querySelector('.pre')
next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    console.log(items)
    document.querySelector('.slide').appendChild(items[0])
})
prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 
    console.log("Hello")// here the length of items = 6
})

function autoSlide() {
    next.click();
  }
  
  setInterval(autoSlide, 5000);




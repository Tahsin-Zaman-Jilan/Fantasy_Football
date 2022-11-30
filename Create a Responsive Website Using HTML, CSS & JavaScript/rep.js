burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
listnav=document.querySelector('.list-nav')
rightnav=document.querySelector('.Rightnav')


burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp')
    listnav.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')

})
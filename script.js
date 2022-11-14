var btn = document.getElementById('click');
btn.addEventListener('click',function onClick(){
    console.log('clicked');
})

var activePage = window.location.pathname;

var navLinks = document.querySelectorAll('nav li a').forEach(link => {
   
    if(link.href.includes(`${activePage}`))
    link.classList.add('active');
   
})
var activePage = window.location.pathname;

var navLinks = document.querySelectorAll('nav li a').forEach(link => {
   
    if(link.href.includes(`${activePage}`))
    link.classList.add('active');
    console.log(link+'  link');
    console.log(link.href+'  link.href');
    console.log(`${activePage}`+'  activePage')
    console.log(activePage+'  activePage');
})
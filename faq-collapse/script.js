const toggleBtns = document.querySelectorAll('.faq-toggle');

//console.log(toggleBtns)
toggleBtns.forEach(btn =>{
    btn.addEventListener('click', () =>{
        //console.log(btn)
        btn.parentNode.classList.toggle('active');
    })
})
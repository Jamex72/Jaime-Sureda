const nav=document.querySelector('.nav');const updateNav=()=>nav.classList.toggle('scrolled',scrollY>35);addEventListener('scroll',updateNav,{passive:true});updateNav();

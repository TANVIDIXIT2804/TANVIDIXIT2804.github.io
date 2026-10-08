const navLinks=[...document.querySelectorAll('.nav nav a')];
const sections=navLinks.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const id='#'+entry.target.id;
      navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===id));
    }
  });
},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(section=>observer.observe(section));

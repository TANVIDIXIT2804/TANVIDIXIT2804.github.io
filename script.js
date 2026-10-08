const links=[...document.querySelectorAll('.nav nav a')];
const sections=links.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean);
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const id='#'+entry.target.id;
      links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===id));
    }
  });
},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(section=>observer.observe(section));

const links=[...document.querySelectorAll('.nav nav a')];
const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const id='#'+entry.target.id;
      links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===id));
    }
  });
},{rootMargin:'-35% 0px -55% 0px',threshold:0});
sections.forEach(s=>observer.observe(s));

document.querySelectorAll('.photo-slot').forEach(slot=>{
  const img=slot.querySelector('img');
  if(img && img.complete && img.naturalWidth>0) slot.classList.add('has-photo');
});

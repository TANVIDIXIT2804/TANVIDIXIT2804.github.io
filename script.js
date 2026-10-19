document.documentElement.classList.add('js');

// Active nav link
const navLinks=[...document.querySelectorAll('.nav nav a')];
const sections=navLinks.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const navObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const id='#'+entry.target.id;
      navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===id));
    }
  });
},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>navObserver.observe(s));

// Nav border once scrolled
const nav=document.querySelector('.nav');
const onScroll=()=>nav.classList.toggle('scrolled',window.scrollY>10);
window.addEventListener('scroll',onScroll,{passive:true});onScroll();

// Queen's Necklace: streetlights along the Marine Drive curve
const necklace=document.querySelector('.necklace');
if(necklace){
  const ns='http://www.w3.org/2000/svg';
  for(let i=0;i<=26;i++){
    const t=i/26, x=t*300;
    // follows the promenade curve: y = 236 at x=0 to ~300 at x=300
    const y=237+64*Math.pow(t,1.9);
    const c=document.createElementNS(ns,'circle');
    c.setAttribute('cx',x.toFixed(1));c.setAttribute('cy',y.toFixed(1));
    c.setAttribute('r',(1.6+t*1.6).toFixed(2));
    c.style.animationDelay=(i*0.11)+'s';
    necklace.appendChild(c);
  }
}

// Gentle reveal on scroll; content stays visible if JS or observers are unavailable
const revealTargets=document.querySelectorAll('.section-top,.section h2,.problem,.people-card,.lesson,.quote,.little-list li,.postcard');
if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{rootMargin:'0px 0px -8% 0px'});
  revealTargets.forEach((el,i)=>{
    const r=el.getBoundingClientRect();
    if(r.top<innerHeight){return;} // already on screen: leave as is
    el.classList.add('reveal');el.style.transitionDelay=((i%3)*80)+'ms';io.observe(el);
  });
}

const header=document.querySelector('[data-header]');
const menuButton=document.querySelector('.menu-button');
const mobileMenu=document.querySelector('.mobile-menu');
const setHeader=()=>header.classList.toggle('scrolled',window.scrollY>32);
setHeader();
window.addEventListener('scroll',setHeader,{passive:true});
menuButton.addEventListener('click',()=>{
  const open=menuButton.getAttribute('aria-expanded')==='true';
  menuButton.setAttribute('aria-expanded',String(!open));
  menuButton.textContent=open?'Menu':'Close';
  mobileMenu.classList.toggle('open',!open);
  header.classList.add('scrolled');
});
mobileMenu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  menuButton.setAttribute('aria-expanded','false');
  menuButton.textContent='Menu';
  mobileMenu.classList.remove('open');
}));

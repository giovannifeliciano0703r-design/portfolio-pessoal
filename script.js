const menuToggle=document.querySelector('.menu-toggle');const navLinks=document.querySelector('.nav-links');const themeToggle=document.querySelector('#themeToggle');
menuToggle?.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
const savedTheme=localStorage.getItem('portfolio-theme');if(savedTheme==='light')document.body.classList.add('light');
function updateThemeIcon(){themeToggle.textContent=document.body.classList.contains('light')?'☀':'☾';themeToggle.setAttribute('aria-label',document.body.classList.contains('light')?'Ativar modo escuro':'Ativar modo claro');}updateThemeIcon();
themeToggle?.addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('portfolio-theme',document.body.classList.contains('light')?'light':'dark');updateThemeIcon();});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelector('#year').textContent=new Date().getFullYear();

// O relatório é totalmente client-side: não há POST nem chamada de API.
const reportForm=document.querySelector('#reportForm');
reportForm?.addEventListener('submit',(event)=>{
  event.preventDefault();
  const formData=new FormData(reportForm);
  const report={
    name:String(formData.get('name')||'').trim(),
    email:String(formData.get('email')||'').trim(),
    goal:String(formData.get('goal')||'').trim(),
    notes:String(formData.get('notes')||'').trim(),
    createdAt:new Date().toISOString()
  };
  localStorage.setItem('portfolio-report',JSON.stringify(report));
  window.open('/relatorio','_blank');
});
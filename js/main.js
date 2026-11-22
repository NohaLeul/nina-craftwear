(() => {
 const $=(s,r=document)=>r.querySelector(s);
 const cart=JSON.parse(localStorage.getItem('ninaCart')||'[]');
 const count=cart.reduce((n,x)=>n+x.qty,0);
 document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=count);
 const toggle=$('[data-menu-toggle]'); if(toggle) toggle.addEventListener('click',()=>{$('[data-nav]').classList.toggle('open');toggle.setAttribute('aria-expanded',$('[data-nav]').classList.contains('open'));});
 const themeBtn=$('[data-theme-toggle]');
 const saved=localStorage.getItem('ninaTheme'); if(saved==='dark')document.documentElement.dataset.theme='dark';
 if(themeBtn)themeBtn.addEventListener('click',()=>{const dark=document.documentElement.dataset.theme!=='dark';document.documentElement.dataset.theme=dark?'dark':'light';localStorage.setItem('ninaTheme',dark?'dark':'light');});
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 const slides=[...document.querySelectorAll('.hero-slide')]; if(slides.length>1){let i=0;setInterval(()=>{slides[i].classList.remove('active');i=(i+1)%slides.length;slides[i].classList.add('active');},5200);}
 window.NinaEmail = window.NinaEmail || {};
 window.NinaEmail.openCompose = function(subject, body){
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=netsizeru2@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const opened = window.open(url, '_blank');
  if (!opened) window.location.assign(url);
 };
 const form=$('[data-contact-form]');if(form)form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const body=`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nMessage:\n${d.get('message')}`;window.NinaEmail.openCompose('Nina Crochet website enquiry', body);});
 const newsletter=$('[data-newsletter]');if(newsletter)newsletter.addEventListener('submit',e=>{e.preventDefault();alert('Thank you! Newsletter signup is a front-end demo. Connect an email service to collect subscriptions.');});
})();


(() => {
 const $=(s,r=document)=>r.querySelector(s);
 const cart=JSON.parse(localStorage.getItem('ninaCart')||'[]');
 const count=cart.reduce((n,x)=>n+x.qty,0);
 document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=count);

 const toggle=$('[data-menu-toggle]');
 if(toggle) toggle.addEventListener('click',()=>{
  $('[data-nav]').classList.toggle('open');
  toggle.setAttribute('aria-expanded',$('[data-nav]').classList.contains('open'));
 });

 const themeBtn=$('[data-theme-toggle]');
 const saved=localStorage.getItem('ninaTheme');
 if(saved==='dark')document.documentElement.dataset.theme='dark';

 if(themeBtn)themeBtn.addEventListener('click',()=>{
  const dark=document.documentElement.dataset.theme!=='dark';
  document.documentElement.dataset.theme=dark?'dark':'light';
  localStorage.setItem('ninaTheme',dark?'dark':'light');
 });

 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

 const slides=[...document.querySelectorAll('.hero-slide')];
 if(slides.length>1){
  let i=0;
  setInterval(()=>{
   slides[i].classList.remove('active');
   i=(i+1)%slides.length;
   slides[i].classList.add('active');
  },5200);
 }

 // EMAIL COMPOSE FUNCTION
 window.NinaEmail = window.NinaEmail || {};

 window.NinaEmail.openCompose = function(subject, body){

  const recipient = 'craftwearbynina@gmail.com';

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  // Detect mobile devices
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

  if(isMobile){

   // Open the phone's default email application
   const mailtoUrl =
    `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;

   window.location.href = mailtoUrl;

  }else{

   // Preserve desktop Gmail compose functionality
   const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodedSubject}&body=${encodedBody}`;

   const opened = window.open(gmailUrl, '_blank');

   if(!opened){
    window.location.assign(gmailUrl);
   }

  }
 };

 // CONTACT FORM
 const form=$('[data-contact-form]');

 if(form)form.addEventListener('submit',e=>{
  e.preventDefault();

  const d=new FormData(form);

  const body=`Name: ${d.get('name')}
Email: ${d.get('email')}
Message:
${d.get('message')}`;

  window.NinaEmail.openCompose(
   'Craftwear by Nina website enquiry',
   body
  );
 });

 // NEWSLETTER
 const newsletter=$('[data-newsletter]');

 if(newsletter)newsletter.addEventListener('submit',e=>{
  e.preventDefault();
  alert('Thank you! Newsletter signup is a front-end demo. Connect an email service to collect subscriptions.');
 });

})();

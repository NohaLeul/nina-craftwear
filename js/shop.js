
const productViewer=document.querySelector('#product-viewer');
let viewerProduct=null,viewerIndex=0;

function showViewerImage(){
 if(!productViewer||!viewerProduct)return;
 const p=PRODUCTS.find(x=>x.id===viewerProduct);
 const images=p.images&&p.images.length?p.images:[p.image];
 viewerIndex=(viewerIndex+images.length)%images.length;
 const img=productViewer.querySelector('[data-viewer-image]');
 img.src=images[viewerIndex];
 img.alt=p.name+` — photo ${viewerIndex+1} of ${images.length}`;
 productViewer.querySelector('[data-viewer-count]').textContent=`${viewerIndex+1} / ${images.length}`;
 productViewer.querySelector('[data-viewer-title]').textContent=p.name;
 productViewer.querySelector('[data-viewer-prev]').hidden=images.length<2;
 productViewer.querySelector('[data-viewer-next]').hidden=images.length<2;
}

function openProductViewer(id){
 if(!productViewer)return;
 viewerProduct=id;
 viewerIndex=0;
 showViewerImage();
 if(!productViewer.open)productViewer.showModal();
}

if(productViewer){
 productViewer.querySelector('[data-viewer-close]').addEventListener('click',()=>productViewer.close());
 productViewer.querySelector('[data-viewer-prev]').addEventListener('click',()=>{viewerIndex--;showViewerImage();});
 productViewer.querySelector('[data-viewer-next]').addEventListener('click',()=>{viewerIndex++;showViewerImage();});
 productViewer.addEventListener('click',e=>{if(e.target===productViewer)productViewer.close();});
 document.addEventListener('keydown',e=>{
  if(!productViewer.open)return;
  if(e.key==='ArrowLeft'){viewerIndex--;showViewerImage();}
  if(e.key==='ArrowRight'){viewerIndex++;showViewerImage();}
 });
}

const grid=document.querySelector('#product-grid');

if(grid){
 const filters={q:'',category:'All',min:0,max:5000,size:'All',yarn:'All',sort:'featured',expanded:false};
 const seeMore=document.querySelector('#see-more');
 const money=n=>`ETB ${Number(n).toLocaleString('en-US')}`;

 function render(){
  let list=PRODUCTS.filter(p=>
   (filters.category==='All'||p.category===filters.category)&&
   (p.price==null||(p.price>=filters.min&&p.price<=filters.max))&&
   (filters.size==='All'||p.size===filters.size)&&
   (filters.yarn==='All'||p.yarn===filters.yarn)&&
   (`${p.name} ${p.description} ${p.category} ${p.yarn} ${p.size}`).toLowerCase().includes(filters.q)
  );

  if(filters.sort==='low')list.sort((a,b)=>(a.price??Infinity)-(b.price??Infinity));
  if(filters.sort==='high')list.sort((a,b)=>(b.price??-Infinity)-(a.price??-Infinity));
  if(filters.sort==='name')list.sort((a,b)=>a.name.localeCompare(b.name));

  const visible=filters.expanded?list:list.slice(0,4);

  grid.innerHTML=visible.map(p=>`
   <article class="product-card">
    <button class="product-photo" type="button" data-view="${p.id}" aria-label="View photos of ${p.name}">
     <img src="${p.image}" alt="${p.name}" loading="lazy">
    </button>
    <div class="product-info">
     <span class="eyebrow">${p.category}</span>
     <h3>${p.name}</h3>
     <p>${p.description}</p>
     <div style="display:grid;gap:3px;margin:4px 0 10px;font-size:.88rem;color:var(--muted)">
      <p style="margin:0"><strong>Size:</strong> ${p.size||'Not specified'}</p>
      <p style="margin:0"><strong>Yarn:</strong> ${p.yarn||'Not specified'}</p>
     </div>
     <div class="product-meta">
      <span>${p.price==null?'Contact for price':money(p.price)}</span>
     </div>
     <button class="button button-small" data-add="${p.id}">Add to Cart</button>
    </div>
   </article>
  `).join('');

  document.querySelector('#result-count').textContent=`Showing ${visible.length} of ${list.length} products`;

  seeMore.hidden=list.length<=4;
  seeMore.textContent=filters.expanded?'See Less':'See More';

  grid.querySelectorAll('[data-add]').forEach(b=>b.addEventListener('click',()=>{
   Cart.add(Number(b.dataset.add));
   b.textContent='Added ✓';
   setTimeout(()=>b.textContent='Add to Cart',1000);
  }));

  grid.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{
   openProductViewer(Number(b.dataset.view));
  }));
 }

 document.querySelectorAll('[data-filter]').forEach(el=>el.addEventListener('input',()=>{
  filters[el.dataset.filter]=el.type==='number'?Number(el.value):el.value;
  filters.expanded=false;
  render();
 }));

 seeMore.addEventListener('click',()=>{
  filters.expanded=!filters.expanded;
  render();
 });

 document.querySelector('#clear-filters').addEventListener('click',()=>{
  Object.assign(filters,{
   q:'',category:'All',min:0,max:5000,size:'All',
   yarn:'All',sort:'featured',expanded:false
  });

  document.querySelectorAll('[data-filter]').forEach(el=>{
   el.value=el.type==='number'
    ?(el.dataset.filter==='max'?5000:0)
    :({category:'All',size:'All',yarn:'All',sort:'featured',q:''}[el.dataset.filter]||'');
  });

  render();
 });

 render();
}

const cartList=document.querySelector('#cart-items');

if(cartList){
 const fmt=n=>`ETB ${n.toLocaleString('en-US')}`;

 function draw(){
  const items=Cart.get();
  const rows=items.map(x=>({...x,p:PRODUCTS.find(p=>p.id===x.id)})).filter(x=>x.p);

  cartList.innerHTML=rows.length?rows.map(x=>`
   <div class="cart-row">
    <img src="${x.p.image}" alt="">
    <div class="cart-row-main">
     <b>${x.p.name}</b>
     <small>${x.p.price==null?'Contact for price':fmt(x.p.price)+' each'}</small>
     <div class="quantity">
      <button data-dec="${x.id}" aria-label="Decrease quantity">−</button>
      <span>${x.qty}</span>
      <button data-inc="${x.id}" aria-label="Increase quantity">+</button>
     </div>
    </div>
    <strong>${x.p.price==null?'Contact for price':fmt(x.p.price*x.qty)}</strong>
    <button class="icon-button" data-remove="${x.id}" aria-label="Remove">×</button>
   </div>
  `).join(''):'<p class="empty-state">Your cart is waiting for something lovely.</p>';

  const hasUnknown=rows.some(x=>x.p.price==null);
  const total=rows.reduce((n,x)=>n+(x.p.price??0)*x.qty,0);

  document.querySelector('#cart-total').textContent=hasUnknown?'To be confirmed':fmt(total);
  document.querySelector('#cart-subtotal').textContent=hasUnknown?'To be confirmed':fmt(total);

  document.querySelectorAll('[data-cart-count]').forEach(el=>
   el.textContent=items.reduce((n,x)=>n+x.qty,0)
  );

  cartList.querySelectorAll('[data-inc]').forEach(b=>b.onclick=()=>{
   Cart.change(+b.dataset.inc,1);
   draw();
  });

  cartList.querySelectorAll('[data-dec]').forEach(b=>b.onclick=()=>{
   Cart.change(+b.dataset.dec,-1);
   draw();
  });

  cartList.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{
   Cart.remove(+b.dataset.remove);
   draw();
  });
 }

 draw();

 const modal=document.querySelector('#checkout-modal');

 document.querySelector('#checkout-open').onclick=()=>{
  if(!Cart.get().length){
   alert('Please add at least one product first.');
   return;
  }
  modal.showModal();
 };

 document.querySelectorAll('[data-close-modal]').forEach(b=>b.onclick=()=>modal.close());

 document.querySelector('#checkout-form').addEventListener('submit',e=>{
  e.preventDefault();

  const data=new FormData(e.currentTarget);

  const items=Cart.get().map(x=>({...x,p:PRODUCTS.find(p=>p.id===x.id)})).filter(x=>x.p);
  const hasUnknown=items.some(x=>x.p.price==null);
  const total=items.reduce((n,x)=>n+x.qty*(x.p.price??0),0);

  const lines=items.map(x=>
   `${x.p.name} | Qty: ${x.qty} | ${x.p.price==null?'Contact for price':fmt(x.p.price)+' each | Subtotal: '+fmt(x.qty*x.p.price)}`
  ).join('\n');

  const body=`NINA CROCHET ORDER

Customer: ${data.get('name')}
Phone: ${data.get('phone')}
Email: ${data.get('email')}
Delivery address: ${data.get('address')||'Not provided'}

ORDER ITEMS
${lines}

ORDER TOTAL: ${hasUnknown?'To be confirmed':fmt(total)}

Notes: ${data.get('notes')||'None'}

Please confirm availability, delivery and payment arrangements.`;

  if(window.NinaEmail&&window.NinaEmail.openCompose){
   window.NinaEmail.openCompose('Craftwear by Nina order request',body);
  }else{
   const url=`https://mail.google.com/mail/?view=cm&fs=1&to=craftwearbynina@gmail.com&su=${encodeURIComponent('Craftwear by Nina order request')}&body=${encodeURIComponent(body)}`;
   const opened=window.open(url,'_blank');
   if(!opened)window.location.assign(url);
  }

  modal.close();
 });
}

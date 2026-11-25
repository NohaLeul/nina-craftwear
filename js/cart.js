const Cart = {
 get(){return JSON.parse(localStorage.getItem('ninaCart')||'[]').filter(x=>PRODUCTS.some(p=>p.id===x.id))},
 save(items){localStorage.setItem('ninaCart',JSON.stringify(items));document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=items.reduce((n,x)=>n+x.qty,0));},
 add(id){const items=this.get();const found=items.find(x=>x.id===id);if(found)found.qty++;else items.push({id,qty:1});this.save(items);},
 change(id,delta){let items=this.get();const item=items.find(x=>x.id===id);if(item)item.qty+=delta;items=items.filter(x=>x.qty>0);this.save(items);},
 remove(id){this.save(this.get().filter(x=>x.id!==id));},
 clear(){this.save([])}
};

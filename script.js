const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
$('#menu').addEventListener('click',()=>$('#navlinks').classList.toggle('open'));
$$('#navlinks a').forEach(a=>a.addEventListener('click',()=>$('#navlinks').classList.remove('open')));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible');else entry.target.classList.remove('visible')}),{threshold:.14,rootMargin:'0px 0px -4% 0px'});
$$('.reveal').forEach(el=>revealObserver.observe(el));
let ticking=false;function scrollEffects(){const max=document.documentElement.scrollHeight-innerHeight;$('#progress').style.width=(max>0?scrollY/max*100:0)+'%';$('#backtop').classList.toggle('show',scrollY>650);ticking=false}
addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(scrollEffects);ticking=true}},{passive:true});scrollEffects();$('#backtop').addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)$$('.navlinks a').forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id))}),{rootMargin:'-35% 0px -55% 0px'});$$('main section[id]').forEach(s=>sectionObserver.observe(s));
addEventListener('pointermove',e=>{if(matchMedia('(pointer:coarse)').matches)return;const g=$('#glow');g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
$('#visitForm').addEventListener('submit',e=>{e.preventDefault();$('#formNote').textContent=`Thanks, ${$('#name').value.trim()}! This demo form works locally. Connect an email service to receive submissions.`;$('#toast').classList.add('show');setTimeout(()=>$('#toast').classList.remove('show'),3000)});

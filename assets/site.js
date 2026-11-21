(function(){
  var KEY='tb_lang', cur=document.documentElement.getAttribute('data-lang')||'en';
  var stored=null; try{stored=localStorage.getItem(KEY);}catch(e){}
  // Language persistence: a visitor who chose ES/FR stays in that language
  if(cur==='en' && (stored==='es'||stored==='fr') && !/[?&]stay=1/.test(location.search)){
    var alt=document.querySelector('.lang a[data-lang="'+stored+'"]');
    if(alt){location.replace(alt.getAttribute('href')+location.hash);return;}
  }
  var links=document.querySelectorAll('.lang a[data-lang]');
  for(var i=0;i<links.length;i++){links[i].addEventListener('click',function(){try{localStorage.setItem(KEY,this.getAttribute('data-lang'));}catch(e){}});}
  if(cur!=='en'||stored===null||stored==='en'){try{localStorage.setItem(KEY,cur);}catch(e){}}
  var b=document.querySelector('.menu-btn'),n=document.querySelector('nav.links');
  if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});}
  var gs=document.querySelector('.gallery');
  if(gs){var gb=document.querySelectorAll('.gbtn');for(var t=0;t<gb.length;t++){gb[t].addEventListener('click',function(){gs.scrollBy({left:(this.classList.contains('l')?-1:1)*gs.clientWidth*0.8,behavior:'smooth'});});}}
  var gis=document.querySelectorAll('.gallery .gi');
  if(gis.length){
    var lb=document.createElement('div');lb.id='lb';lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');
    lb.innerHTML='<button class="x" aria-label="Close">&times;</button><button class="p" aria-label="Previous">&#8249;</button><button class="n" aria-label="Next">&#8250;</button><img alt=""><div class="cap"></div>';
    document.body.appendChild(lb);var im=lb.querySelector('img'),cp=lb.querySelector('.cap'),ix=0;
    function show(i){ix=(i+gis.length)%gis.length;im.src=gis[ix].getAttribute('href');im.alt=gis[ix].querySelector('img').alt;cp.textContent='Unsplash / '+gis[ix].getAttribute('data-by');lb.classList.add('open');}
    function hide(){lb.classList.remove('open');im.src='';}
    for(var g=0;g<gis.length;g++){(function(k){gis[k].addEventListener('click',function(e){e.preventDefault();show(k);});})(g);}
    lb.querySelector('.x').addEventListener('click',hide);lb.querySelector('.p').addEventListener('click',function(){show(ix-1);});lb.querySelector('.n').addEventListener('click',function(){show(ix+1);});
    lb.addEventListener('click',function(e){if(e.target===lb)hide();});
    document.addEventListener('keydown',function(e){if(!lb.classList.contains('open'))return;if(e.key==='Escape')hide();if(e.key==='ArrowLeft')show(ix-1);if(e.key==='ArrowRight')show(ix+1);});
  }
  try{var q=new URLSearchParams(location.search).get('dest');var m=document.getElementById('msg');if(q&&m&&!m.value){m.value=q+': ';}}catch(e){}
})();

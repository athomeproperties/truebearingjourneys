(function(){
  var b=document.querySelector('.menu-btn'),n=document.querySelector('nav.links');
  if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});}
  try{
    var q=new URLSearchParams(location.search).get('dest');
    var m=document.getElementById('msg');
    if(q&&m&&!m.value){m.value="I'm interested in "+q+". ";}
  }catch(e){}
})();

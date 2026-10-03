
document.querySelectorAll('.copy').forEach(function(b){
  b.addEventListener('click',function(){
    var t=b.getAttribute('data-copy');
    var done=function(){b.textContent='Copied';setTimeout(function(){b.textContent='Copy'},1500)};
    try{navigator.clipboard.writeText(t).then(done,function(){b.textContent=t})}catch(e){b.textContent=t}
  });
});
var f=document.getElementById('quote'),out=document.getElementById('q-result');
if(f)f.addEventListener('submit',function(e){
  e.preventDefault();
  var missing=[].filter.call(f.querySelectorAll('[required]'),function(i){return !i.value.trim()});
  f.querySelectorAll('[required]').forEach(function(i){i.setAttribute('aria-invalid',!i.value.trim())});
  if(missing.length){out.hidden=false;out.innerHTML='<p>Please fill in the required fields marked with *.</p>';missing[0].focus();return}
  var v=function(id){return document.getElementById(id).value.trim()};
  var text='Quote request\nName: '+v('q-name')+'\nCompany: '+(v('q-company')||'-')+'\nPhone: '+v('q-phone')+'\nEmail: '+v('q-email')+'\nFreight: '+v('q-type')+'\nPickup: '+v('q-from')+'\nDelivery: '+v('q-to')+'\nDetails: '+(v('q-msg')||'-');
  out.hidden=false;
  out.innerHTML='<p>Your request is ready. Copy it and email it to <strong>Jamal@truckupayme.com</strong>, or call (347) 940-0905.</p><pre></pre><div><button type="button" class="copy" id="q-copy">Copy request</button> <a href="mailto:Jamal@truckupayme.com?subject='+encodeURIComponent('Quote request')+'&body='+encodeURIComponent(text)+'">Open in email app</a></div>';
  out.querySelector('pre').textContent=text;
  document.getElementById('q-copy').addEventListener('click',function(){
    var b=this;try{navigator.clipboard.writeText(text).then(function(){b.textContent='Copied'},function(){})}catch(err){}
  });
});

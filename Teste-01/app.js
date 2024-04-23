document.getElementById('tema').addEventListener('click', function() {
   document.body.classList.toggle('teminha');
   document.querySelector('header').classList.toggle('teminha');
   document.querySelector('footer').classList.toggle('teminha');
   document.getElementById('search').classList.toggle('teminha');
   document.getElementById('sicon').classList.toggle('teminha');
   document.getElementById('h1denot').classList.toggle('teminha');
   document.getElementById('tema').classList.toggle('teminha');
   document.getElementById('prof').classList.toggle('teminha');
   
   var btsnav = document.getElementsByClassName('btsnav');
   for (var i = 0; i < btsnav.length; i++) {
      btsnav[i].classList.toggle('teminha');
   }
});

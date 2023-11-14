
window.addEventListener('scroll', () => {
   let scrollPos = window.scrollY;

   console.log(scrollPos)

   if (scrollPos > 270) {
      document.getElementById('name').style.fontSize = '3em';
      document.getElementById('name').style.top = '0'
      document.getElementById('name').style.position = 'fixed';  

   } else if (scrollPos < 250) {
      document.getElementById('name').style.fontSize = '7em';
      document.getElementById('name').style.position = 'static';
   }

   if (scrollPos > 190) { 
   document.querySelector('.arr').classList.add('invisible');
   document.querySelector('.icons').classList.add('invisible');
   } else {
      document.querySelector('.arr').classList.remove('invisible');
      document.querySelector('.icons').classList.remove('invisible');
   }
   
 });


const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add('show');
      } else {
         entry.target.classList.remove('show')
      }


   });
});


const hiddenElements = document.querySelectorAll('.hiddenL');
hiddenElements.forEach((el) => observer.observe(el))

const hiddenElementsR = document.querySelectorAll('.hiddenR');
hiddenElementsR.forEach((el) => observer.observe(el))

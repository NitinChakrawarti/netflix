const summar = document.querySelector('.summary');
const span = document.querySelector('.span');

summar.addEventListener("toggle", (e) => {
   console.log("hello");
   if (e.target.tagName === 'span') {
      span.innerHTML = ' -'
      span.style.fontSize = '60px'
      span.style.marginRight = '4px'
   }
   else {
      span.innerHTML = ' +'
      span.style.fontSize = '50px'
      span.style.marginRight = '0px'
   }
}
);
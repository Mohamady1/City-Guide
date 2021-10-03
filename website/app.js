//global varaibles
const header = document.querySelector('.header');
const buttonTop = document.querySelector('#btntop');
//location
const place = document.querySelector('.about')
const map = document.querySelector('.mapouter')
const galtaloc = document.querySelector('#galta');
const bosforloc = document.querySelector('#bosfor');
const sofialoc = document.querySelector('#sofia');
const ahmedloc = document.querySelector('#ahmed');
const bazarloc = document.querySelector('#bazar');
const manbaaaloc = document.querySelector('#manbaa');

//make color for header change 
window.onscroll = () => {
    if (window.scrollY > 50) {
        header.classList.add('move');
    }
    else {
        header.classList.remove('move');
    }
}

// When the user scrolls down 100px from the top of the document, show the button
document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) {
        buttonTop.style.display = "block";
      } else {
        buttonTop.style.display = "none";
      }
})

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//get location
//1
galtaloc.addEventListener('click', () => {
    const map = document.querySelector('.mapouter');
    //remove istanbul map
    map.remove();
    //create main div
    const div = document.createElement('div');
    div.id = 'goMap';
    div.className = 'mapouter';
    //secondary div
    const secDiv = document.createElement('div');
    secDiv.className = 'gmap_canvas';
    //iframe
    const iframe = document.createElement('iframe')
    iframe.id = 'gmap_canvas';
    iframe.src = 'https://maps.google.com/maps?q=Galta%20Tower,%20istanbul&t=k&z=19&ie=UTF8&iwloc=&output=embed';
    iframe.width = '500'; 
    iframe.height = '300';
    secDiv.appendChild(iframe);
    div.appendChild(secDiv);
    place.appendChild(div);

});
//2
bosforloc.addEventListener('click', () => {
    const map = document.querySelector('.mapouter');
    //remove istanbul map
    map.remove();
    //create main div
    const div = document.createElement('div');
    div.id = 'goMap';
    div.className = 'mapouter';
    //secondary div
    const secDiv = document.createElement('div');
    secDiv.className = 'gmap_canvas';
    //iframe
    const iframe = document.createElement('iframe');
    iframe.id = 'gmap_canvas';
    iframe.src = 'https://maps.google.com/maps?q=Bosphorus%20Bridge&t=k&z=17&ie=UTF8&iwloc=&output=embed';
    iframe.width = '500'; 
    iframe.height = '300';
    secDiv.appendChild(iframe);
    div.appendChild(secDiv);
    place.appendChild(div);

});
//3
sofialoc.addEventListener('click', () => {
    const map = document.querySelector('.mapouter');
    //remove istanbul map
    map.parentNode.removeChild(map);
    //create main div
    const div = document.createElement('div');
    div.id = 'goMap';
    div.className = 'mapouter';
    //secondary div
    const secDiv = document.createElement('div');
    secDiv.className = 'gmap_canvas';
    //iframe
    const iframe = document.createElement('iframe')
    iframe.id = 'gmap_canvas';
    iframe.src = 'https://maps.google.com/maps?q=Hagia%20Sophia%20Mosque&t=k&z=17&ie=UTF8&iwloc=&output=embed';
    iframe.width = '500'; 
    iframe.height = '300';
    secDiv.appendChild(iframe);
    div.appendChild(secDiv);
    place.appendChild(div);

});
//4
ahmedloc.addEventListener('click', () => {
    const map = document.querySelector('.mapouter');
    //remove istanbul map
    map.parentNode.removeChild(map);
    //create main div
    const div = document.createElement('div');
    div.id = 'goMap';
    div.className = 'mapouter';
    //secondary div
    const secDiv = document.createElement('div');
    secDiv.className = 'gmap_canvas';
    //iframe
    const iframe = document.createElement('iframe')
    iframe.id = 'gmap_canvas';
    iframe.src = 'https://maps.google.com/maps?q=Sultan%20Ahmed%20Mosque&t=k&z=17&ie=UTF8&iwloc=&output=embed';
    iframe.width = '500'; 
    iframe.height = '300';
    secDiv.appendChild(iframe);
    div.appendChild(secDiv);
    place.appendChild(div);

});
//5
bazarloc.addEventListener('click', () => {
    const map = document.querySelector('.mapouter');
    //remove istanbul map
    map.parentNode.removeChild(map);
    //create main div
    const div = document.createElement('div');
    div.id = 'goMap';
    div.className = 'mapouter';
    //secondary div
    const secDiv = document.createElement('div');
    secDiv.className = 'gmap_canvas';
    //iframe
    const iframe = document.createElement('iframe')
    iframe.id = 'gmap_canvas';
    iframe.src = 'https://maps.google.com/maps?q=Grand%20Bazaar,%20istanbul&t=k&z=17&ie=UTF8&iwloc=&output=embed';
    iframe.width = '500'; 
    iframe.height = '300';
    secDiv.appendChild(iframe);
    div.appendChild(secDiv);
    place.appendChild(div);

});
//6
manbaaaloc.addEventListener('click', () => {
    const map = document.querySelector('.mapouter');
    //remove istanbul map
    map.parentNode.removeChild(map);
    //create main div
    const div = document.createElement('div');
    div.id = 'goMap';
    div.className = 'mapouter';
    //secondary div
    const secDiv = document.createElement('div');
    secDiv.className = 'gmap_canvas';
    //iframe
    const iframe = document.createElement('iframe')
    iframe.id = 'gmap_canvas';
    iframe.src = 'https://maps.google.com/maps?q=Basilica%20Cistern&t=k&z=17&ie=UTF8&iwloc=&output=embed';
    iframe.width = '500'; 
    iframe.height = '300';
    secDiv.appendChild(iframe);
    div.appendChild(secDiv);
    place.appendChild(div);

});

//make scroll smooth
const navLinks = document.querySelectorAll('a');

for (link of navLinks) {
  link.addEventListener("click", clickHand);    
}

function clickHand(event) {
  event.preventDefault();
  const id = this.getAttribute('href');  
  // get the reference to the corresponding section
  const targetSection = document.querySelector(id); 
  
  // add smooth scrolling feature
  targetSection.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest"
  });
}

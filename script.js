var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}

// for contact Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbwUP3ZODmCFasOygALDz4e_vfWRkip3PIh8pCTUANS-H8pkivplvGBZnl6HzBGhFPbU/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
// for main page
    var typed = new Typed('#element', {
      strings: ['Programmer', 'Web developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });


// Animation

gsap.from(
    "nav li",
    {
        x: -60,
        duration: .5,
        opacity: 0,
        stagger: .2,
        delay: 1,

    }
)
gsap.from(
    "nav p",
    {
        x: -60,
        duration: 1,
        opacity: 0,
    }
)
gsap.from(
    ".header-text",
    {
        x: -60,
        duration: 1,
        opacity: 0,
        delay:1.5,
    }
)
gsap.from(
    ".spinner",
    {
        duration: 2,
        opacity: 0,
        delay:2,
    }
)
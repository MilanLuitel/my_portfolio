// for scrolltrigger
gsap.registerPlugin(ScrollTrigger);

gsap.from(".work",{
    ScrollTrigger: ".work",
    x: -50,
    duration:2,
    transition: ease-out
});

gsap.from (".navbar .logo,.nav-links",{
   x:-1500,
   duration:2,
   delay:0.5,
})
gsap.from(".hero-content h1,p,.btn",{
    scale:0,
    delay:1.8,
    duration:2,

})
gsap.from("#services .box ",{
    scale:0,
    delay:0.3,
    duration:1.3,
    scrollTrigger:"#services .box"
})
gsap.from(".ourPlan .planCard",{
       x:-1500,
       duration:2,
       delay:0.5,
       scrollTrigger:".ourPlan .planCard"
})
gsap.from(".footer .footerText",{
    scale:0,
    delay:0.5,
    duration:1.5,
    scrollTrigger:".footer .footerText"
})


let crsr = document.querySelector('#cursor')
let blur=document.querySelector('#cursor-blur')
document.addEventListener("mousemove",function(dets){
//   console.log(dets.x)
   crsr.style.left=dets.x+"px"
   crsr.style.top=dets.y+"px"

   blur.style.left=dets.x-150+"px"
   blur.style.top=dets.y-150+"px"
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"120px",
    duration:1,
    // delay:1
    // y:10
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -15%",
        scrub:1
    }

})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
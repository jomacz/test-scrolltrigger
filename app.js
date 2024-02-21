// Set default GSAP options
gsap.defaults({ ease: 'none' });

// Get the height of the .hero element
let h = gsap.getProperty(".hero", "height");

// Update the height value on window resize
window.addEventListener("resize", () => {
  h = gsap.getProperty(".hero", "height");
})

// Animate the .title element
gsap.to('.title', {
  y: h / 3,
  scale: 3,
  scrollTrigger: {
    trigger: '.hero',
    scrub: 1,
    toggleActions: 'restart none none reset',
    pin: true,
    start: 'top top',
    end: () => "+=" + h
  }
})

// Iterate through .reassurance-content elements and apply animation
document.querySelectorAll('.reassurance-content').forEach(el => {
  gsap.from(el, {
    scale: 0,
    opacity: 0,
    ease: 'Power4.easeOut',
    scrollTrigger: {
      trigger: el,
      start: 'top 50%',
    }
  })
})

// Iterate through .card .img elements and apply animation
document.querySelectorAll('.card .img').forEach(el => {
  gsap.from(el, {
    opacity: 0,
    y: 100,
    ease: 'Power4.easeOut',
    duration: 1,
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
    }
  })
})

// Apply animation to .boxes .box elements
gsap.from('.boxes .box ', {
  opacity: 0,
  y: 100,
  stagger: 0.1,
  ease: 'Power4.easeOut',
  duration: 1,
  scrollTrigger: {
    trigger: '.boxes',
    start: 'top 50%',
  }
})

// Iterate through .img elements and apply mouse enter/leave animation

document.querySelectorAll('.img').forEach((el) => {
  let dymmyImg = el.querySelector('.dummy-img');
  el.addEventListener('mouseenter', () => {
    gsap.to(el, { scale: 1.1 })
    gsap.to(dymmyImg, { opacity: 1, scale: 1, ease: 'Power4.easeOut' })
  })
  el.addEventListener('mouseleave', () => {
    gsap.to(el, { scale: 1 })
    gsap.to(dymmyImg, { opacity: 0, scale: 0, ease: 'Power4.easeOut' })
  })
})

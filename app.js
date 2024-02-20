gsap.defaults({ ease: 'none' });

let tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.hero',
      scrub: 1,
      toggleActions: 'restart none none reset',
      pin: true,
  }
})

.to ('.title', {
  y: '50vw',
  scale: 2,
  opacity: 1
})

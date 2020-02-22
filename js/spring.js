
TweenMax.fromTo("#monkey_wrap", 2, {
    y: 10,
    repeat: -1,
    ease: Power1.easeInOut
  }, {
      y: 20,
      repeat: -1,
      ease: Power1.easeInOut,
      yoyo: true
  
    });
  
TweenMax.fromTo("#wave01", 2, { opacity: 0, ease: Power4.easeIn }, { opacity: 0.8, ease: Power4.easeOut });

TweenMax.fromTo("#wave02", 2, { opacity: 0, ease: Power4.easeIn }, { opacity: 0.8, ease: Power4.easeOut });
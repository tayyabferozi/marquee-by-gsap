var lastScrollTop = 0;
gsap.set(".marquee", { xPercent: -50, yPercent: -50 });

var boxWidth = 250,
  totalWidth = boxWidth * 7, //  * n of boxes
  no01 = document.querySelectorAll("#no01 .box"),
  dirFromLeft = "+=" + totalWidth,
  dirFromRight = "-=" + totalWidth;

var mod = gsap.utils.wrap(0, totalWidth);

function marquee(which, time, direction) {
  gsap.set(which, {
    x: function (i) {
      return i * boxWidth;
    },
  });
  var action = gsap.timeline().to(which, {
    x: direction,
    modifiers: {
      x: (x) => mod(parseFloat(x)) + "px",
    },
    duration: time,
    ease: "none",
    repeat: -1,
  });
  return action;
}

gsap.timeline().add(marquee(no01, 15, dirFromLeft));

window.addEventListener(
  "scroll",
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      gsap.timeline().add(marquee(no01, 15, dirFromLeft));
    } else {
      gsap.timeline().add(marquee(no01, 15, dirFromRight));
    }
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);

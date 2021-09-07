gsap.set(".wrapper", { xPercent: -50, yPercent: -50 });
gsap.set("#no02", { y: 50 });
gsap.set("#no03", { y: 120 });

var boxWidth = 250,
  totalWidth = boxWidth * 7, //  * n of boxes
  no01 = document.querySelectorAll("#no01 .box"),
  no02 = document.querySelectorAll("#no02 .box"),
  no03 = document.querySelectorAll("#no03 .box"),
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

var master = gsap.timeline().add(marquee(no01, 15, dirFromLeft));

window.addEventListener("click", function () {
  gsap.timeline().add(marquee(no01, 15, dirFromRight));
});
//   .add(marquee(no02, 20, dirFromLeft), 2)
//   .add(marquee(no03, 20, dirFromRight), 3);

// =============================

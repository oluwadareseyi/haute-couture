import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const landingAnim = () => {
  const tl = gsap.timeline();
  tl.from(".animate-text span", {
    duration: 1,
    opacity: 0,
    ease: "Power2.easeIn",
  })
    .to(".animate-text span", {
      duration: 0.7,
      css: {
        webkitBackgroundClip: "text",
        background: "linear-gradient(180deg, #85FFBD 40%, #FFFB7D 100%)",
      },
      ease: "Power4.easeIn",
    })
    .to(".animate-text span", {
      duration: 0.5,
      css: {
        webkitTextStroke: "0",
      },
      ease: "Power4.easeIn",
    })
    .to(".animate-text span", {
      duration: 1.5,
      x: "-100vw",
      opacity: 0,
      scale: 0.8,
      ease: "Power2.easeIn",
    })
    .to(".landing", {
      duration: 1,
      opacity: 1,
      delay: -1,
      display: "block",
    })
    .to(".animate-text", {
      duration: 0.2,
      delay: -0.5,
      display: "none",
      ease: "Power2.easeIn",
    })
    .from(
      ".main-hero .left",
      {
        duration: 3,
        x: "-100vw",
        ease: "Power2.easeOut",
      },
      "-=2.1"
    )
    .from(
      ".label-1",
      {
        duration: 2,
        opacity: 0,
        x: "-40vw",
        ease: "Power2.easeOut",
      },
      "-=2"
    )
    .from(
      ".label-2",
      {
        duration: 3,
        opacity: 0,
        x: "60vw",
        ease: "Power2.easeOut",
      },
      "-=2.7"
    )
    .from(
      ".hero-image img",
      {
        duration: 3.5,
        scale: 0.2,
        transformOrigin: "right center",
        ease: "Power3.easeOut",
      },
      "-=2.5"
    )
    .from(
      ".arrow",
      {
        duration: 1,
        right: 300,
        opacity: 0,
        ease: "Power3.easeOut",
      },
      "-=2.5"
    );
};

export const womenAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  window.innerWidth > 850 &&
    gsap.from(".center-top", {
      scrollTrigger: {
        trigger: ".center-top",
        start: "top center",
        toggleActions: "play none none none",
      },
      duration: 5,
      y: -200,
      ease: "Power3.easeOut",
    });

  gsap.from(".item span", {
    scrollTrigger: {
      trigger: ".center-top",
      start: "top center",
      toggleActions: "play none none none",
    },
    duration: 2,
    y: 100,
    ease: "Power3.easeOut",
  });

  gsap.to(".hero-image", {
    scrollTrigger: {
      trigger: ".hero-image",
      start: "center 40%",
      toggleActions: "play none none none",
      scrub: true,
    },
    duration: 3,
    y: -150,
    ease: "Power3.easeOut",
  });

  gsap.from(".image-con", {
    scrollTrigger: {
      trigger: ".mens-wear",
      start: "top center",
      toggleActions: "play none none none",
    },
    duration: 3,
    x: "100vw",
    ease: "Power3.easeOut",
  });

  const tl = gsap.timeline();

  tl.from(".inner", {
    duration: 2,
    scaleX: 1.5,
    transformOrigin: "center center",
    ease: "Power3.easeOut",
  }).from(
    ".inner .title, .inner .sub",
    {
      duration: 1,
      opacity: 0,
      ease: "Power3.easeOut",
    },
    "-=1.2"
  );

  ScrollTrigger.create({
    animation: tl,
    trigger: "footer",
    start: "top 70%",
  });
};

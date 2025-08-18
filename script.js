function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const scrollContainer = document.querySelector("#main");

  const locoScroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    multiplier: 1,   
    lerp: 0.06,        
    smoothMobile: true, 
    smartphone: { smooth: true },
    tablet: { smooth: true }
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(scrollContainer, {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: scrollContainer.style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}


function animateText() {
  let clutter = "";
  document.querySelector("#page2>h1").textContent.split("").forEach((char) => {
    clutter += `<span>${char}</span>`;
  });
  document.querySelector("#page2>h1").innerHTML = clutter;

  gsap.to("#page2>h1>span", {
    scrollTrigger: {
      trigger: "#page2>h1>span",
      start: "top bottom",
      end: "bottom top",
      scroller: "#main",
      scrub: 0.5
    },
    stagger: 0.2,
    color: "#fff"
  });
}

// --- Preloader Logic ---
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main");

  const MIN_TIME = 2000; 
  const startTime = performance.now();

  const finish = () => {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
      mainContent.style.display = "block";
      loco();
      animateText();
    }, 500); 
  };

  const elapsed = performance.now() - startTime;
  if (elapsed < MIN_TIME) {
    setTimeout(finish, MIN_TIME - elapsed);
  } else {
    finish();
  }
});

// --- Page 2 ---
function canvas(){
    const canvas = document.querySelector("#page3>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
    });

    function files(index) {
    var data = `
      ./Assets/pg2/000.jpg
      ./Assets/pg2/001.jpg
      ./Assets/pg2/002.jpg
      ./Assets/pg2/003.jpg
      ./Assets/pg2/004.jpg
      ./Assets/pg2/005.jpg
      ./Assets/pg2/006.jpg
      ./Assets/pg2/007.jpg
      ./Assets/pg2/008.jpg
      ./Assets/pg2/009.jpg
      ./Assets/pg2/010.jpg
      ./Assets/pg2/011.jpg
      ./Assets/pg2/012.jpg
      ./Assets/pg2/013.jpg
      ./Assets/pg2/014.jpg
      ./Assets/pg2/015.jpg
      ./Assets/pg2/016.jpg
      ./Assets/pg2/017.jpg
      ./Assets/pg2/018.jpg
      ./Assets/pg2/019.jpg
      ./Assets/pg2/020.jpg
      ./Assets/pg2/021.jpg
      ./Assets/pg2/022.jpg
      ./Assets/pg2/023.jpg
      ./Assets/pg2/024.jpg
      ./Assets/pg2/025.jpg
      ./Assets/pg2/026.jpg
      ./Assets/pg2/027.jpg
      ./Assets/pg2/028.jpg
      ./Assets/pg2/029.jpg
      ./Assets/pg2/030.jpg
      ./Assets/pg2/031.jpg
      ./Assets/pg2/032.jpg
      ./Assets/pg2/033.jpg
      ./Assets/pg2/034.jpg
      ./Assets/pg2/035.jpg
      ./Assets/pg2/036.jpg
      ./Assets/pg2/037.jpg
      ./Assets/pg2/038.jpg
      ./Assets/pg2/039.jpg
      ./Assets/pg2/040.jpg
      ./Assets/pg2/041.jpg
      ./Assets/pg2/042.jpg
      ./Assets/pg2/043.jpg
      ./Assets/pg2/044.jpg
      ./Assets/pg2/045.jpg
      ./Assets/pg2/046.jpg
      ./Assets/pg2/047.jpg
      ./Assets/pg2/048.jpg
      ./Assets/pg2/049.jpg
      ./Assets/pg2/050.jpg
      ./Assets/pg2/051.jpg
      ./Assets/pg2/052.jpg
      ./Assets/pg2/053.jpg
      ./Assets/pg2/054.jpg
      ./Assets/pg2/055.jpg
      ./Assets/pg2/056.jpg
      ./Assets/pg2/057.jpg
      ./Assets/pg2/058.jpg
      ./Assets/pg2/059.jpg
      ./Assets/pg2/060.jpg
      ./Assets/pg2/061.jpg
      ./Assets/pg2/062.jpg
      ./Assets/pg2/063.jpg
      ./Assets/pg2/064.jpg
      ./Assets/pg2/065.jpg
      ./Assets/pg2/066.jpg
      ./Assets/pg2/067.jpg
      ./Assets/pg2/068.jpg
      ./Assets/pg2/069.jpg
      ./Assets/pg2/070.jpg
      ./Assets/pg2/071.jpg
      ./Assets/pg2/072.jpg
      ./Assets/pg2/073.jpg
      ./Assets/pg2/074.jpg
      ./Assets/pg2/075.jpg
      ./Assets/pg2/076.jpg
      ./Assets/pg2/077.jpg
      ./Assets/pg2/078.jpg
      ./Assets/pg2/079.jpg
      ./Assets/pg2/080.jpg
      ./Assets/pg2/081.jpg
      ./Assets/pg2/082.jpg
      ./Assets/pg2/083.jpg
      ./Assets/pg2/084.jpg
      ./Assets/pg2/085.jpg
      ./Assets/pg2/086.jpg
      ./Assets/pg2/087.jpg
      ./Assets/pg2/088.jpg
      ./Assets/pg2/089.jpg
      ./Assets/pg2/090.jpg
      ./Assets/pg2/091.jpg
      ./Assets/pg2/092.jpg
      ./Assets/pg2/093.jpg
      ./Assets/pg2/094.jpg
      ./Assets/pg2/095.jpg
      ./Assets/pg2/096.jpg
      ./Assets/pg2/097.jpg
      ./Assets/pg2/098.jpg
      ./Assets/pg2/099.jpg
      ./Assets/pg2/100.jpg
      ./Assets/pg2/101.jpg
      ./Assets/pg2/102.jpg
      ./Assets/pg2/103.jpg
      ./Assets/pg2/104.jpg
      ./Assets/pg2/105.jpg
      ./Assets/pg2/106.jpg
      ./Assets/pg2/107.jpg
      ./Assets/pg2/108.jpg
      ./Assets/pg2/109.jpg
      ./Assets/pg2/110.jpg
      ./Assets/pg2/111.jpg
      ./Assets/pg2/112.jpg
      ./Assets/pg2/113.jpg
      ./Assets/pg2/114.jpg
      ./Assets/pg2/115.jpg
      ./Assets/pg2/116.jpg
      ./Assets/pg2/117.jpg
      ./Assets/pg2/118.jpg
      ./Assets/pg2/119.jpg
      ./Assets/pg2/120.jpg
      ./Assets/pg2/121.jpg
      ./Assets/pg2/122.jpg
      ./Assets/pg2/123.jpg
      ./Assets/pg2/124.jpg
      ./Assets/pg2/125.jpg
      ./Assets/pg2/126.jpg
      ./Assets/pg2/127.jpg
      ./Assets/pg2/128.jpg
      ./Assets/pg2/129.jpg
      ./Assets/pg2/130.jpg
      ./Assets/pg2/131.jpg
      ./Assets/pg2/132.jpg
      ./Assets/pg2/133.jpg
      ./Assets/pg2/134.jpg
      ./Assets/pg2/135.jpg
      ./Assets/pg2/136.jpg
      ./Assets/pg2/137.jpg
      ./Assets/pg2/138.jpg
      ./Assets/pg2/139.jpg
      ./Assets/pg2/140.jpg
      ./Assets/pg2/141.jpg
      ./Assets/pg2/142.jpg
      ./Assets/pg2/143.jpg
      ./Assets/pg2/144.jpg
      ./Assets/pg2/145.jpg
      ./Assets/pg2/146.jpg
      ./Assets/pg2/147.jpg
      ./Assets/pg2/148.jpg
      ./Assets/pg2/149.jpg
      ./Assets/pg2/150.jpg
      ./Assets/pg2/151.jpg
      ./Assets/pg2/152.jpg
      ./Assets/pg2/153.jpg
      ./Assets/pg2/154.jpg
      ./Assets/pg2/155.jpg
      ./Assets/pg2/156.jpg
      ./Assets/pg2/157.jpg
      ./Assets/pg2/158.jpg
      ./Assets/pg2/159.jpg
      ./Assets/pg2/160.jpg
      ./Assets/pg2/161.jpg
      ./Assets/pg2/162.jpg
      ./Assets/pg2/163.jpg
      ./Assets/pg2/164.jpg
      ./Assets/pg2/165.jpg
      ./Assets/pg2/166.jpg
      ./Assets/pg2/167.jpg
      ./Assets/pg2/168.jpg
      ./Assets/pg2/169.jpg
      ./Assets/pg2/170.jpg
      ./Assets/pg2/171.jpg
      ./Assets/pg2/172.jpg
      ./Assets/pg2/173.jpg
      ./Assets/pg2/174.jpg
      ./Assets/pg2/175.jpg
      ./Assets/pg2/176.jpg
      ./Assets/pg2/177.jpg
      ./Assets/pg2/178.jpg
      ./Assets/pg2/179.jpg
      ./Assets/pg2/180.jpg
      ./Assets/pg2/181.jpg
      ./Assets/pg2/182.jpg
      ./Assets/pg2/183.jpg
      ./Assets/pg2/184.jpg
      ./Assets/pg2/185.jpg
      ./Assets/pg2/186.jpg
      ./Assets/pg2/187.jpg
      ./Assets/pg2/188.jpg
      ./Assets/pg2/189.jpg
      ./Assets/pg2/190.jpg
      ./Assets/pg2/191.jpg
      ./Assets/pg2/192.jpg
      ./Assets/pg2/193.jpg
      ./Assets/pg2/194.jpg
      ./Assets/pg2/195.jpg
      ./Assets/pg2/196.jpg
      ./Assets/pg2/197.jpg
      ./Assets/pg2/198.jpg
      ./Assets/pg2/199.jpg
      ./Assets/pg2/200.jpg
      ./Assets/pg2/201.jpg
      ./Assets/pg2/202.jpg
      ./Assets/pg2/203.jpg
      ./Assets/pg2/204.jpg
      ./Assets/pg2/205.jpg
      ./Assets/pg2/206.jpg
      ./Assets/pg2/207.jpg
      ./Assets/pg2/208.jpg
      ./Assets/pg2/209.jpg
      ./Assets/pg2/210.jpg
      ./Assets/pg2/211.jpg
      ./Assets/pg2/212.jpg
      ./Assets/pg2/213.jpg
      ./Assets/pg2/214.jpg
      ./Assets/pg2/215.jpg
      ./Assets/pg2/216.jpg
      ./Assets/pg2/217.jpg
      ./Assets/pg2/218.jpg
      ./Assets/pg2/219.jpg
      ./Assets/pg2/220.jpg
      ./Assets/pg2/221.jpg
      ./Assets/pg2/222.jpg
      ./Assets/pg2/223.jpg
      ./Assets/pg2/224.jpg
      ./Assets/pg2/225.jpg
      ./Assets/pg2/226.jpg
      ./Assets/pg2/227.jpg
      ./Assets/pg2/228.jpg
      ./Assets/pg2/229.jpg
      ./Assets/pg2/230.jpg
      ./Assets/pg2/231.jpg
      ./Assets/pg2/232.jpg
      ./Assets/pg2/233.jpg
      ./Assets/pg2/234.jpg
      ./Assets/pg2/235.jpg
      ./Assets/pg2/236.jpg
      ./Assets/pg2/237.jpg
      ./Assets/pg2/238.jpg
      ./Assets/pg2/239.jpg
    `;

    return data.split("\n")[index];
    }

    const frameCount = 241;

    const images = [];
    const imageSeq = {
    frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
    }

    gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: .5,
        trigger: `#page3`,
        start: `top top`,
        end: `250% top`,
        scroller: `#main`,
    },
    onUpdate: render,
    });

    images[1].onload = render;

    function render() {
    scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
    }
    ScrollTrigger.create({

    trigger: "#page3",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
    });
}

// --- Page 6 ---
function animateScrollySection() {
    ScrollTrigger.matchMedia({
        "(min-width: 769px)": function() {
            const imageWrappers = document.querySelectorAll(".scrolly-section__image-wrapper");
            const textBlocks = document.querySelectorAll(".scrolly-section__text-block");

            ScrollTrigger.create({
                trigger: ".scrolly-section",
                start: "top top",
                end: "bottom bottom",
                pin: ".scrolly-section__image-column",
                scroller: "#main"
            });
  
            function setActiveImage(activeIndex) {
                imageWrappers.forEach((wrapper, index) => {

                    gsap.to(wrapper, {
                        autoAlpha: index === activeIndex ? 1 : 0,
                        scale: index === activeIndex ? 1 : 0.95,
                        duration: 0.5,
                        ease: "power2.inOut"
                    });
                });
            }

            setActiveImage(0);

            textBlocks.forEach((block, index) => {
                ScrollTrigger.create({
                    trigger: block,
                    scroller: "#main",
                    start: "top center", 
                    end: "bottom center", 
                    onToggle: self => {
                        if (self.isActive) {
                            setActiveImage(index);
                        }
                    }
                });
            });
        },
        
        "(max-width: 768px)": function() {
            gsap.set(".scrolly-section__image-wrapper", { autoAlpha: 1 });
        }
    });
}

window.addEventListener("load", () => {
  loco();
  animateText();
  canvas();
  animateScrollySection();
});

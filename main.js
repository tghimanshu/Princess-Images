import "./style.css";

import * as THREE from "three";
import * as dat from "dat.gui";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const myAudio = document.querySelector("#myAudio");
myAudio.currentTime = 37.9;
myAudio.volume = 0.1;
let mainCurrentTime = 0;

let visibleImage = 0;
const titles = [
  {
    id: 1,
    title: "Haldi Shinnanigans",
    subtitle: "Tu kiti ga sada ahe and fakt maza ahe",
  },
  {
    id: 2,
    title: "Gorgeous Pic",
    subtitle: "Got addicted to it and also kept it as WA wall",
  },
  {
    id: 3,
    title: "First Year Tech Fest",
    subtitle: "This is the time we interacted a lot",
  },
  {
    id: 4,
    title: "First Juhu Visit",
    subtitle: "Suruvat sab cheezo ka",
  },
  {
    id: 5,
    title: "Won the Best Class",
    subtitle: "",
  },
  {
    id: 6,
    title: "BEING LISA",
    subtitle: "Taarif Karu kya uski jisne tujhe banaya...",
  },
  {
    id: 7,
    title: "NISHABD HUA MAI",
    subtitle: "laga waqt wahi tham jaye",
  },
  {
    id: 8,
    title: "PRAJULISA",
    subtitle: "Best Thing",
  },
  {
    id: 9,
    title: "LAST PRAJISA",
    subtitle: "Kyuuuuuuu....",
  },
  {
    id: 10,
    title: "Birthday Preps",
    subtitle: "Edit karwaya tha mujhse",
  },
  {
    id: 11,
    title: "How I Look",
    subtitle: "When u shared lots of your pics to ask how u look",
  },
  {
    id: 12,
    title: "Cuteness Overloaded",
    subtitle: "",
  },
  {
    id: 13,
    title: "Shot on Redmi 10",
    subtitle: "Mere phone mai teri photo mummy puche beta kon hai!",
  },
  {
    id: 14,
    title: "Udaas Praju",
    subtitle: "Why can't i make you happy?",
  },
  {
    id: 15,
    title: "In Aakhon ki masti ke",
    subtitle: "Mastaane hazaaron hai (but mili sirf mujhe hehe)",
  },
  {
    id: 16,
    title: "Filter Chimu",
    subtitle: "Mat kar natural Zyada Pyaari lagti merko tu",
  },
  {
    id: 17,
    title: "Maaza",
    subtitle:
      "Kabhi apple kabhi juice peeti hai, par pricess har baar pretty lagti hai",
  },
  {
    id: 18,
    title: "SPEECHLESS",
    subtitle: "Why don't you talk about this pic",
  },
  {
    id: 19,
    title: "Birthday Wear",
    subtitle: "Kitni Pretty teri look hai",
  },
  {
    id: 20,
    title: "PhotoShoot",
    subtitle: "When you act like a normal Girl for a change",
  },
  {
    id: 21,
    title: "Asked for Smile",
    subtitle: "Aisa kon karta hai yr",
  },
  {
    id: 22,
    title: "MERKO GHAR JANA HAI",
    subtitle: "When you became the most adorable creature to ever exist",
  },
  {
    id: 23,
    title: "Diwali Times",
    subtitle: "Kitna kachra hua iske aas paas",
  },
  {
    id: 24,
    title: "HICKEY STRUGGLES",
    subtitle: "Maza aya tha chupane?",
  },
  {
    id: 25,
    title: "Hair Cut",
    subtitle: "Na na bolke bheji pic",
  },
  {
    id: 26,
    title: "Diwali Time",
    subtitle: "Kitna Kachra kiya us waqt apan ne",
  },
  {
    id: 27,
    title: "Cute Collection",
    subtitle: "Kaise Mujhe tum mil gayi Kismat pe aye na yakin",
  },
  {
    id: 28,
    title: "Phone Wall",
    subtitle: "Ek din bhi pura nai rakhne di",
  },
  {
    id: 29,
    title: "Event Photo Shoot",
    subtitle: "",
  },
  {
    id: 30,
    title: "Making Blank",
    subtitle: "Are kaam ke beech mai blank kon karta hai yr",
  },
  {
    id: 31,
    title: "Yaad Nai",
    subtitle: "Memory Problem",
  },
  {
    id: 32,
    title: "PIC STRUGGLES",
    subtitle: "Kaha se pic le rahi dekho jara",
  },
  {
    id: 33,
    title: "Kya hai yeh",
    subtitle: "Terko pata chale to bata yeh style",
  },
  {
    id: 34,
    title: "BEST PIC",
    subtitle: "waah re waah kya ss liya tha",
  },
  {
    id: 35,
    title: "Sad Day",
    subtitle: "Kid when we will do the cloning we found the azure resource too",
  },
  {
    id: 36,
    title: "Sadma Pic",
    subtitle: "Itna nai but still",
  },
  {
    id: 37,
    title: "Dekh Le",
    subtitle: "Kiti Gondas baal aahe re tu",
  },
  {
    id: 38,
    title: "Collarbone Fetish",
    subtitle: "Collarbone ka addiction laga dij",
  },
  {
    id: 39,
    title: "FIRST SPECS PIC",
    subtitle: "Cute",
  },
  {
    id: 40,
    title: "Filter Specs Pic",
    subtitle: "Cute kitne hai tu Mute itni hai tu.... ",
  },
  {
    id: 41,
    title: "Pooja Preps",
    subtitle: "Princess in a Saree",
  },
  {
    id: 42,
    title: "Kaash Wo Pal Paida hi na ho",
    subtitle: "Jis pal mai nazar tu na aaye",
  },
  {
    id: 43,
    title: "Random Cute Pic",
    subtitle: "",
  },
  {
    id: 44,
    title: "Aish... Kya baat ay",
    subtitle: "",
  },
  {
    id: 45,
    title: "Kuch bolu?",
    subtitle: "Shabdo ki kami ho gayi hai",
  },
];

const main = document.querySelector("#main");
titles.map((title) => {
  main.innerHTML += `
      <div id="${title.id}" class="items">
        <div class="container">
          <div class="title">${title.title}</div>
          <div class="sub">${title.subtitle}</div>
        </div>
      </div>
  `;
});

// SCENE
const scene = new THREE.Scene();

// CAMERA
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// const camera = new THREE.Camera();
camera.position.x = -0.5;
camera.position.y = 0;
camera.position.z = 2;

// CAMERA DAT GUI
// const gui = new dat.GUI();
// const cameraFolder = gui.addFolder("Camera");
// cameraFolder.add(camera.position, "x", -20, 20);
// cameraFolder.add(camera.position, "y", -20, 20);
// cameraFolder.add(camera.position, "z", -20, 20);
// cameraFolder.open();

// RENDERER
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#princess-bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

// LIGHTS
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 0, 0);
// scene.add(pointLight);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// ORBIT CONTROLS
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.target.x = 5;

// OBJECTS

const texture = new THREE.TextureLoader();

for (let i = 0; i < 30; i++) {
  let demX = 0;
  let demY = 0;
  const tex = texture.load(`princess-images/${i + 1}.jpg`, function (t) {
    demX = t.image.width / 1000;
    demY = t.image.height / 1000;

    const material = new THREE.MeshBasicMaterial({
      map: t,
    });
    const geometry = new THREE.PlaneGeometry(0.8, (demY * 0.8) / demX);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 5 * i;
    scene.add(mesh);
  });
}
/**
 * Lights
 **/
camera.lookAt(0.0009, 0, 0.09);
camera.position.x = 0.5;

const speed = 0.3;

// addEventListener("wheel", function (e) {
//   if (e.deltaY > 0) {
//     // camera.position.x += (speed * 5) / 0.3;
//     visibleImage += 1;
//     gsap.to(camera.position, {
//       x: camera.position.x + (speed * 5) / 0.3,
//       duration: 1,
//       ease: "power1.out",
//     });
//     gsap.to(main, {
//       top: 100 * -visibleImage + "vh",
//       duration: 1,
//       ease: "power1.out",
//     });
//   } else {
//     visibleImage -= 1;
//     gsap.to(camera.position, {
//       x: camera.position.x - (speed * 5) / 0.3,
//       duration: 1,
//       ease: "power1.out",
//     });
//     gsap.to(main, {
//       top: 100 * -visibleImage + "vh",
//       duration: 1,
//       ease: "power1.out",
//     });
//   }
// });
window.addEventListener("keyup", function (e) {
  console.log(e);
  if (e.code === "ArrowDown") {
    visibleImage += 1;
    gsap.to(camera.position, {
      x: camera.position.x + (speed * 5) / 0.3,
      duration: 1,
      ease: "power1.out",
    });
    gsap.to(main, {
      top: 100 * -visibleImage + "vh",
      duration: 1,
      ease: "power1.out",
    });
  } else if (e.code === "ArrowUp") {
    visibleImage -= 1;
    gsap.to(camera.position, {
      x: camera.position.x - (speed * 5) / 0.3,
      duration: 1,
      ease: "power1.out",
    });
    gsap.to(main, {
      top: 100 * -visibleImage + "vh",
      duration: 1,
      ease: "power1.out",
    });
  }
  if (e.code === "Space") {
    if (myAudio.paused) {
      myAudio.play();
    } else {
      myAudio.pause();
    }
  }
  if (visibleImage === 0) {
    if (myAudio.getAttribute("src") !== "audios/dimple.mp3") {
      mainCurrentTime = 0;
      myAudio.setAttribute("src", "audios/dimple.mp3");
      myAudio.currentTime = 37.9;
      myAudio.play();
    }
  } else if (visibleImage === 5) {
    if (myAudio.getAttribute("src") !== "audios/tareef_karu_kya_uski.mp3") {
      mainCurrentTime = myAudio.currentTime;
      myAudio.setAttribute("src", "audios/tareef_karu_kya_uski.mp3");
      myAudio.currentTime = 37.9;
      myAudio.play();
    }
  } else if (visibleImage === 12) {
    if (myAudio.getAttribute("src") !== "audios/phone_mai_teri_photo.mp3") {
      mainCurrentTime = myAudio.currentTime;
      myAudio.setAttribute("src", "audios/phone_mai_teri_photo.mp3");
      myAudio.currentTime = 15;
      myAudio.play();
    }
  } else if (visibleImage === 14) {
    if (myAudio.getAttribute("src") !== "audios/deewane.mp3") {
      mainCurrentTime = myAudio.currentTime;
      myAudio.setAttribute("src", "audios/deewane.mp3");
      myAudio.currentTime = 15;
      myAudio.play();
    }
  } else if (visibleImage === 41) {
    if (myAudio.getAttribute("src") !== "audios/kash_wo_pal.mp3") {
      mainCurrentTime = myAudio.currentTime;
      myAudio.setAttribute("src", "audios/kash_wo_pal.mp3");
      myAudio.currentTime = 53;
      myAudio.play();
    }
  } else if (visibleImage === 43) {
    if (myAudio.getAttribute("src") !== "audios/kya_baat_ay.mp3") {
      mainCurrentTime = myAudio.currentTime;
      myAudio.setAttribute("src", "audios/kya_baat_ay.mp3");
      myAudio.currentTime = 15;
      myAudio.play();
    }
  } else if (visibleImage === 26) {
    if (myAudio.getAttribute("src") !== "audios/kaise_mujhe.mp3") {
      mainCurrentTime = myAudio.currentTime;
      myAudio.setAttribute("src", "audios/kaise_mujhe.mp3");
      myAudio.currentTime = 45;
      myAudio.play();
    }
  } else {
    if (myAudio.getAttribute("src") !== "audios/falling.mp3") {
      myAudio.setAttribute("src", "audios/falling.mp3");
      myAudio.currentTime = mainCurrentTime;
      myAudio.play();
    }
  }
});

// const bg = texture.load("bg.jpg");
// scene.background = bg;

function animate() {
  requestAnimationFrame(animate);

  // controls.target.x += 10 * 0.1;
  // controls.target.z += 10 * -0.1;
  // controls.update();

  renderer.render(scene, camera);
}

animate();

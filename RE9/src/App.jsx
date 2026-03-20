import { useRef, useState } from "react";
import Entry from "./assets/Entry.mp4";
import { gsap } from "gsap";
import logo from "./assets/logo.webp";
import bgTrans from "./assets/bgTrans.webp";
import bg from "./assets/bg.avif";
import ch from "./assets/ch.webp";
import "remixicon/fonts/remixicon.css";
import PS5_Logo from "./assets/PS5_Logo.webp";
import text_logo1 from "./assets/text_logo1.webp";
import text_logo2 from "./assets/text_logo2.webp";
import { useGSAP } from "@gsap/react";
import pic_2 from "./assets/pic_2.webp";
import pic_2logo from "./assets/pic_2logo.webp";
import ZombieGames from "./ZombieGames.jsx";

function App() {
  const [showCnt, setShowCnt] = useState(false);
  const videoRef = useRef(null);
  const mainRef = useRef(null);
  const containerRef = useRef(null);
  const [hovered, sethovered] = useState(false);

  const gsapTransition = () => {
    const tl = gsap.timeline();

    tl.to(videoRef.current, {
      opacity: 0,
      duration: 1.2,
      ease: "power2.inOut",
    })

      .set(videoRef.current, { display: "none" })
      .set(mainRef.current, { display: "block", opacity: 1 })

      .to(".vi-mask-grp", {
        rotate: 20,
        duration: 3,
        ease: "power4.inOut",
        transformOrigin: "50% 50%",
      })

      .to(".vi-mask-grp", {
        scale: 12,
        duration: 4,
        delay: -3.5,
        ease: "expo.inOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: () => {
          if (tl.progress() >= 0.9) {
            setShowCnt(true);
            document.querySelector(".svg")?.remove();
            tl.kill();
          }
        },
      });
  };

  useGSAP(() => {
    if (!showCnt) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "expo.easeInOut",
    });

    gsap.to(".bgTrans", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "expo.easeInOut",
    });

    gsap.to(".character", {
      scale: "0.65",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "expo.easeInOut",
    });

    gsap.to(".logo1", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "expo.easeInOut",
    });

    gsap.to(".logo2", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "expo.easeInOut",
    });

    const main = mainRef.current;
    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      //window.innerWidth = total screen range
      gsap.to(".main .logo1", {
        x: xMove * 0.8,
      });
      gsap.to(".main .logo2", {
        x: xMove * 0.6,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
      gsap.to(".lines .line", {
        x: xMove * 0.8,
      });
    });
  }, [showCnt]);

  return (
    <>
      <div className="w-full bg-black" ref={containerRef}>
        <div
          className="fVideo fixed w-full h-screen left-0 top-0 z-[10] bg-black"
          ref={videoRef}
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            preload="auto"
            onEnded={gsapTransition}
          >
            <source src={Entry} type="video/mp4" />
          </video>
        </div>

        <div
          className="hero relative top-0 left-0 w-full h-full z-[5]"
          ref={mainRef}
          style={{ display: "none", opacity: 0, backgroundColor: "black" }}
        >
          <div className="svg fixed top-0 left-0 z-[2] w-full h-screen overflow-hidden bg-black">
            <svg
              viewBox="0 0 800 600"
              preserveAspectRatio="xMidYMid slice"
              className="w-full h-full"
            >
              <defs>
                <mask id="viMask">
                  <rect width="100%" height="100%" fill="black" />
                  <g className="vi-mask-grp">
                    <text
                      x="50%"
                      y="50%"
                      fill="white"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontFamily="'Bebas Neue', sans-serif"
                      letterSpacing="20"
                    >
                      <tspan x="400" dy="0" fontSize="200" color="red">
                        IX
                      </tspan>
                    </text>
                  </g>
                </mask>
              </defs>
              <image
                href={bg}
                alt="background-image"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                mask="url(#viMask)"
              />
            </svg>
          </div>

          {showCnt && (
            <>
              <div
                className="main w-full rotate-[-10deg] scale-[1.7] bg-black"
                ref={mainRef}
              >
                <div className="landing relative w-full h-screen bg-black overflow-hidden min-h-screen flex items-center">
                  <div className="navbar absolute top-0 left-0 z-[50] w-full py-5 px-5">
                    <div className="logo flex gap-3">
                      <div className="lines flex flex-col gap-1">
                        <div className="line w-12 h-1 bg-[#FFCB08]"></div>
                        <div className="line w-8 h-1 bg-[#FFCB08]"></div>
                        <div className="line w-3 h-1 bg-[#FFCB08]"></div>
                      </div>
                      <img
                        src={logo}
                        alt="Logo"
                        style={{ height: "20px", width: "80px" }}
                      />
                    </div>
                  </div>
                  <div className="imagesDiv h-full w-full relative items-center">
                    <img
                      className="absolute inset-0 w-full h-screen object-cover bg scale-[1.8] rotate-[-3deg] bgTrans"
                      src={bgTrans}
                      alt="Background-transparent"
                    />

                    <div className="logo_text text-red-500 relative top-0 left-[30%] bottom-5 z-[10] leading-none logo1 rotate-[10deg] scale-[1.7]">
                      <img
                        src={text_logo1}
                        alt="RESIDENT EVIL LOGO-1"
                        className="top-[-100px] left-[-200px] z-[10] w-[950px] absolute logo1"
                      />
                      <img
                        src={text_logo2}
                        alt="RESIDENT EVIL LOGO-2"
                        className="top-[150px] left-[-50px] z-[10] w-[600px] absolute logo2 rotate-[10deg] scale-[1.7]"
                      />
                    </div>

                    <img
                      className="absolute bottom-[-200px] left-[130px] z-[20] character scale-[2] rotate-[-10deg]"
                      src={ch}
                      alt="Character"
                      UseMap="#ch-map"
                    />
                    <map name="ch-map">
                      <area
                        shape="circle"
                        coords="834,386,263"
                        href="https://residentevil.fandom.com/wiki/Grace_Ashcroft"
                        target="_blank"
                        rel="noopener noreferrer" // Hides from where the user has come
                        alt="MainCharacter"
                      />
                    </map>
                  </div>
                  <div
                    className="btmbar text-white absolute bottom-0 left-0 z-[30] w-full py-7 px-5 
              bg-gradient-to-t from-black to-transparent"
                  >
                    <div className="flex gap-4 items-center">
                      <i className="text-xl ri-arrow-down-fill"></i>
                      <h3
                        className="font-[Helvetica_Now_Display] text-sm"
                        onMouseOver={(e) => {
                          gsap.to(e.target, {
                            y: -5,
                            duration: 0.3,
                            color: "red",
                            scale: 1.2,
                          });
                        }}
                        onMouseLeave={(e) => {
                          gsap.to(e.target, {
                            y: 0,
                            duration: 0.3,
                            color: "white",
                            scale: 0.8,
                            x: -10,
                          });
                        }}
                      >
                        Scroll Down
                      </h3>
                    </div>
                    <img
                      src={PS5_Logo}
                      alt="PS5 and XBOX Logo"
                      className="h-[40px] sm:h-[50px] lg:h-[60px] w-auto absolute left-1/2 -translate-x-1/2 bottom-[10%]"
                      useMap="#logo-map"
                    />
                    <map name="logo-map">
                      <area
                        shape="circle"
                        coords="37,77,82"
                        href="https://store.playstation.com/en-in/concept/10015533"
                        target="_blank"
                        rel="noopener noreferrer" // Hides from where the user has come
                        alt="PlayStation"
                      />
                      <area
                        shape="circle"
                        coords="168,80,82"
                        href="https://www.xbox.com/en-in/games/store/resident-evil-requiem-deluxe-edition/9pc9tlbhhg89"
                        target="_blank"
                        rel="noopener noreferrer" // Hides from where the user has come
                        alt="XBOX"
                      />
                    </map>
                  </div>
                </div>
              </div>
              <div className="w-full h-screen bg-black page2 flex items-center justify-center">
                <div className="cntnr w-full h-auto flex flex-col lg:flex-row text-white">
                  <div className="lImg relative w-1/2 h-full">
                    <img
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[-10%] w-[100%] h-auto scale-[0.9] transition-transform duration-600 hover:scale-110"
                      src={pic_2}
                      alt="Pic 2"
                      useMap="#ch-2"
                    />
                    <map name="ch-2">
                      <area
                        shape="circle"
                        coords="571,467,328"
                        href="https://youtu.be/DdMK8nmZQUc?si=1GZQKQGi11K2o122"
                        target="_blank"
                        rel="noopener noreferrer" // Hides from where the user has come
                        alt="MainCharacter-2"
                      />
                    </map>
                  </div>
                  <div
                    className="rg w-full lg:w-[40%] h-auto"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      margin: 0,
                      color: "#8a0000",
                      fontSize: "12px",
                    }}
                  >
                    <div className="-mt-10 flex ">
                      <img
                        className="w-full h-100% object-cover"
                        src={pic_2logo}
                        alt="Pic 2 Logo Text"
                      />
                    </div>
                    <p className="font-[Helvetica_Now_Display] -mt-10 text-md filter:dropShadow(0 0 8px rgba(255, 0, 0, 0.3)) overflow-auto">
                      Rosemary Winters investigates a fog-shrouded island where
                      a rogue BSAA faction is resurrecting the Megamycete.
                      Plagued by fungal hallucinations, she must navigate gothic
                      ruins that blur the line between her reality and her
                      father's memory.
                    </p>
                    <p className="font-[Helvetica_Now_Display] mt-5 text-md filter:dropShadow(0 0 8px rgba(255, 0, 0, 0.3)) overflow-auto">
                      After a biological agent suppresses her powers, Rose must
                      survive against "The Draugr"—intelligent, mutated husks.
                      Hunted by enigmatic overseers who view her as a "final
                      specimen," she relies on environmental puzzles and grit to
                      stay alive.
                    </p>
                    <p className="font-[Helvetica_Now_Display] mt-5 text-md filter:dropShadow(0 0 8px rgba(255, 0, 0, 0.3)) overflow-auto">
                      Rose uncovers a deep BSAA betrayal, revealing the island
                      as a bio-weapon testing ground. To prevent a global
                      outbreak, she destroys the hive mind and severs her
                      connection to the mold, finally ending the Winters'
                      legacy.
                    </p>
                    <a
                      href="https://www.residentevil.com/requiem/en-us/products/"
                      target="_blank"
                    >
                      <button
                        className="flex items-center justify-center
              px-10 py-6 text-3xl mt-5 border-none outline-none w-fit max-w-full"
                        style={{
                          color: hovered ? "#b91c1c" : "white",
                          transition: "all 0.5s ease-in-out",
                          border: hovered ? "4px solid white" : "#b91c1c",
                          borderRadius: hovered ? "50px" : "0px",
                          cursor: "pointer",
                          backgroundColor: hovered ? "white" : "null",
                        }}
                        onMouseOver={() => sethovered(true)}
                      >
                        Download Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full h-[100vh] bg-black text-white gameArea relative items-center justify-center">
                <ZombieGames />
              </div>
              <div className="bg-red-500 h-screen w-full">
                <div className="poster text-center underline">
                  <h1
                    style={{
                      fontSize: "100px",
                      fontFamily: "Bebas Neue",
                      fontWeight: "bold",
                    }}
                  >
                    OFFICIAL GAMEPLAY
                  </h1>
                </div>
                <div className="videos grid grid-cols-2 place-items-center gap-15 flex-1 mt-10">
                  <div className="w-[500px] h-[300px]">
                    <iframe
                      src="https://www.youtube.com/embed/_YLpaWRjx6c?autoplay=1&mute=1&vq=hd1080&rel=0&modestbranding=1"
                      allowFullScreen
                      width="100%"
                      height="100%"
                      title="Resident Evil Official Gameplay"
                      allow="autoplay"
                    ></iframe>
                  </div>
                  <div className="w-[500px] h-[300px]">
                    <iframe
                      src="https://www.youtube.com/embed/H4j5H_g-qeU?autoplay=1&mute=1&vq=hd1080&loop=1&playlist=H4j5H_g-qeU&modestbranding=1&rel=0"
                      allowFullScreen
                      width="100%"
                      height="100%"
                      title="Resident Evil Official Gameplay"
                      allow="autoplay"
                    ></iframe>
                  </div>
                  <div className="w-[500px] h-[300px]">
                    <iframe
                      src="https://www.youtube.com/embed/aCQGltIEOm8?autoplay=1&mute=1&vq=hd1080&loop=1&playlist=aCQGltIEOm8&modestbranding=1&rel=0"
                      allowFullScreen
                      width="100%"
                      height="100%"
                      title="Resident Evil Official Gameplay"
                      allow="autoplay"
                    ></iframe>
                  </div>
                  <div className="w-[500px] h-[300px]">
                    <iframe
                      src="https://www.youtube.com/embed/k8aXqeQs9bE?autoplay=1&mute=1&vq=hd1080&loop=1&playlist=k8aXqeQs9bE&modestbranding=1&rel=0"
                      width="100%"
                      height="100%"
                      title="Resident Evil Official Gameplay"
                      allow="autoplay"
                    ></iframe>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default App;

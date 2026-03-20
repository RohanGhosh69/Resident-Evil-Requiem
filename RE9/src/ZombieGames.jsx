import React from "react";
import { useState, useEffect } from "react";
import zombieImg from "/zombieImg.webp";

const ZombieGames = () => {
  const [kills, setKills] = useState(0);
  const [time, setTime] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState({
    x: 200,
    y: 200,
  });

  const spawnZombie = () => {
    const gameArea = document.querySelector(".gameArea");

    const width = gameArea.offsetWidth;
    const height = gameArea.offsetHeight;

    setPosition({
      x: Math.random() * (width - 120),
      y: Math.random() * (height - 120),
    });
  };

  const killZombie = () => {
    if (!isPlaying) return;

    setKills((prev) => prev + 1);
    console.log("Killed");
    spawnZombie();
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsPlaying(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const startGame = () => {
    setKills(0);
    setTime(30);
    setIsPlaying(true);
    spawnZombie();
  };

  return (
    <>
      <div className="h-[100vh] relative bg-black text-white">
        {!isPlaying && (
          <>

            <div style={{ textAlign: "center", marginTop: "200px" }}>
              <h1
                className="text-red-700 text-7xl underline pb-15"
                style={{ fontFamily: "Nosifer", fontWeight: "bold" }}
              >
                ZOMBIE SURVIVAL
              </h1>
              <br />
              <p
                className="text-3xl"
                style={{ fontFamily: "Bebas Neue", letterSpacing: 10 }}
              >
                Aim Zombies To Eliminate Them
              </p>
              <br />
              <button
                onClick={startGame}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.7)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1.3)";
                }}
                style={{
                  color: "red",
                  border: "2px solid white",
                  borderRadius: "50px",
                  cursor: "pointer",
                  transform: "scale(1)",
                  padding: 10,
                  marginTop: 50,
                  transition: "all 0.5s ease-in-out",
                  fontFamily: "Nosifer",
                  backgroundColor: "whitesmoke",
                }}
              >
                Start Game
              </button>

              {time === 0 && (
                <h2 className="text-3xl text-red-700 pt-20">
                  Your Score : {kills}
                </h2>
              )}
            </div>
          </>
        )}

        {isPlaying && (
          <>
            <h2 className="absolute top-20 left-20 text-3xl text-red-700">
              KILLS : {kills}
            </h2>
            <h2 className="absolute top-20 right-20 text-3xl text-red-700">
              TIME : {time}s
            </h2>

            <img
              src={zombieImg}
              loading="lazy"
              onClick={killZombie}
              style={{
                position: "absolute",
                left: position.x,
                top: position.y,
                width: "80px",
                cursor: "crosshair",
                userSelect: "none",
              }}
            />
          </>
        )}
      </div>
    </>
  );
};

export default ZombieGames;

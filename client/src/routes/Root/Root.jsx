import "./Root.css";
import FunFactBox from "./component/FunFactBox";
import React from "react";
import FocusImg from "../FocusImg/FocusImg";

function App() {
  const funFactItems = [
    {
      id: 1,
      image: "pikachu.jpg",
      title: "Iki Pika",
      subtitle:
        "Suka memakan kotorannya sendiri. Pika mengeluarkan kotoran berwarna hijau yang terdiri dari tanaman atau tumbuh-tumbuhan. Untuk mendapatkan lebih banyak nutrisi, Pika memakan lagi kotorannya dan setelah itu mengeluarkan kotoran berwarna gelap.",
    },
    {
      id: 2,
      image: "barbary-singa-atlas.jpg",
      title: "Sumatran Tiger",
      subtitle:
        "Salah satu fakta unik Harimau Sumatra yaitu memiliki penglihatan yang tajam 30 kali lebih tajam dari penglihatan manusia pada saat malam hari.",
    },
    {
      id: 3,
      image: "berang-berang.jpg",
      title: "Berang-Berang",
      subtitle:
        "Berang-Berang mempunyai nama untuk kotorannya, yang diberi nama keselo. Keselo mempunyai aroma yang khas dan bisa digunakan untuk berkomunikasi menunjukkan lokasi serta dari aroma tersebut Berang-Berang dapat mengenali identitas Berang-Berang lain seperti jenis kelamin dan usianya.",
    },
  ];
  return (
    <React.Fragment>
      <section className="hero">
        <div className="hero-body">
          <p className="hero-title">Lorem Ipsum</p>
          <p className="hero-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
          </p>
          <div className="arrow-down">
            <img src="public\arrow-down.svg" alt="arrow-down" />
          </div>
        </div>
      </section>
      <section className="fun-fact">
        <div className="fun-fact-title">
          <p>Fun Fact</p>
        </div>
        <div className="fun-fact-items">
          {funFactItems.map((item) => (
            <FunFactBox
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
            />
          ))}
        </div>
      </section>
      <section className="quotes">
        <div className="pembatas">
          <p className="our-focus-text">
            Semarak Bumi semakin indah dengan beragamnya hewan dan <br />{" "}
            tumbuhan. Lestarikan mereka, lestarikan keindahan bumi, <br />{" "}
            lestarikan kehidupan!
          </p>
        </div>
      </section>
      <section className="focus">
        <div className="our-focus-title">
          <h1>Our Focus</h1>
        </div>
        <div className="img-focus">
          <FocusImg />
        </div>
      </section>
      <section className="hewan-punah">
        <div className="container-hewan-punah">
          <h2>Jumlah Hewan Punah</h2>
          <div className="container-hewan-punah-1">
            <div className="dunia">
              <p className="text-dunia">0</p>
            </div>
            <div className="asia">
              <p className="text-asia">0</p>
            </div>
            <div className="indonesia">
              <p className="text-indonesia">0</p>
            </div>
          </div>
        </div>
      </section>
      <section className="kuis">
        <h1>Kuis</h1>
        <div className="container-kuis"></div>
      </section>
    </React.Fragment>
  );
}

export default App;

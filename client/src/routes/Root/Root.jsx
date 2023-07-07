import "./Root.css";
// import FunFactBox from "./component/FunFactBox";
import React from "react";
import FocusImg from "../FocusImg/FocusImg";
import Fun from "../Fun/Fun";
import RandomQuiz from "../RandomQuiz/RandomQuiz";
// import { HiChevronDoubleDown } from "react-icons/hi";
import Slider from "../../component/Slider/Slider";


function App() {
  // const funFactItems = [
  //   {
  //     id: 1,
  //     image: "pikachu.jpg",
  //     title: "Iki Pika",
  //     subtitle:
  //       "Pika practices coprophagy, which is the consumption of its own feces. Pika's feces are green in color and consist of plant material or vegetation. By consuming its feces, Pika is able to obtain additional nutrients, after which it excretes dark-colored feces.",
  //   },
  //   {
  //     id: 2,
  //     image: "barbary-singa-atlas.jpg",
  //     title: "Sumatran Tiger",
  //     subtitle:
  //       "Salah satu fakta unik Harimau Sumatra yaitu memiliki penglihatan yang tajam 30 kali lebih tajam dari penglihatan manusia pada saat malam hari.",
  //   },
  //   {
  //     id: 3,
  //     image: "berang-berang.jpg",
  //     title: "Berang-Berang",
  //     subtitle:
  //       "Berang-Berang mempunyai nama untuk kotorannya, yang diberi nama keselo. Keselo mempunyai aroma yang khas dan bisa digunakan untuk berkomunikasi menunjukkan lokasi serta dari aroma tersebut Berang-Berang dapat mengenali identitas Berang-Berang lain seperti jenis kelamin dan usianya.",
  //   },
  // ];
  return (
    <React.Fragment>
      <section>
        {/* className="hero"
        style={{ background: 'url("homie.jpg") center/cover no-repeat' }}
      // > <div className="hero-body"> */}
      {/* //     <p className="hero-title">Lorem Ipsum</p>
      //     <p className="hero-subtitle">
      //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      //       nec iaculis mauris.
      //     </p> */}
          {/* <div className="arrow-down">
            <HiChevronDoubleDown />
          </div> */}
         <Slider />
          
       {/* </div> */}
      </section>
      {/* <section className="fun-fact">
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
      </section> */}

      <Fun />

      <section className="quotes">
        <div className="pembatas">
          <p className="our-focus-text">
          The splendor of the Earth is made more beautiful by the variety of animals and <br />
          plants. Preserve them, preserve the beauty of the earth,<br />
           preserve life!
          </p>
        </div>
      </section>

      <FocusImg />

      <section className="hewan-punah">
        <div className="container-hewan-punah">
          <h1>Approximate Number of Endangered Animals</h1>
          <div className="container-hewan-punah-1">
            <div>
              <b>902</b>
              <h3>World</h3>
            </div>
            <div>
              <b>0</b>
              <h3>Asian</h3>
            </div>
            <div>
              <b>361</b>
              <h3>Indonesian</h3>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="kuis"> */}
        
        <RandomQuiz />
      {/* </section> */}
      
    </React.Fragment>
  );
}

export default App;

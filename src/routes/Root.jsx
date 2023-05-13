import "./Root.css";
import ArrowDown from "../assets/image/arrow-down.jsx";
import Navbar from "../component/Navbar/Navbar";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <section className="hero">
          <div className="hero-body">
            <p className="hero-title">Lorep Ipsum</p>
            <p className="hero-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </p>
            <div className="arrow-down">
              <ArrowDown />
            </div>
          </div>
        </section>
        <section className="fun-fact">
          <div className="fun-fact-body">
            <p className="fun-fact-title">Fun Fact</p>
            <div className="fun-fact-items">
              <div className="fun-fact-item">
                <div className="fun-fact-item-image">
                  <img src="pikachu.jpg" alt="Iki Pika" />
                </div>
                <p className="fun-fact-item-title">Lorem Ipsum</p>
                <p className="fun-fact-item-subtitle">
                  Suka memakan kotorannya sendiri. Pika mengeluarkan kotoran
                  berwarna hijau yang terdiri dari tanaman atau tumbuh-tumbuhan.
                  Untuk mendapatkan lebih banyak nutrisi, Pika memakan lagi
                  kotorannya dan setelah itu mengeluarkan kotoran berwarna
                  gelap.
                </p>
                <div className="fun-fact-item-link">
                  <button type="button">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

import Navbar from "../../component/Navbar/Navbar";
import ArrowDown from "../../assets/image/arrow-down.jsx";
import "./Explore.css";
import Environtment from "../../component/Dropdown/Environtment";
import Region from "../../component/Dropdown/Region";
import Type from "../../component/Dropdown/Type";
import Footer from "../../component/Footer/Footer";

function Explore() {
  return (
    <>
      <main>
        <Navbar />
        <section className="explore-hero">
          <div className="explore-hero-body">
            <p className="explore-hero-title">Lorem Ipsum</p>
            <p className="explore-hero-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </p>
            <div className="arrow-down">
              <ArrowDown />
            </div>
          </div>
        </section>
        <section className="filter">
          <div className="container">
            <div className="row">
              <div className="filter-animal-type">
                <h5> Type </h5>
                <Type />
              </div>
              <div className="filter-animal-region">
                <h5> Region </h5>
                <Region />
              </div>
              <div className="filter-animal-environtment">
                <h5> Environment </h5>
                <Environtment />
              </div>
              <div className="container-2">
                <div className="row-2">
                  <div className="button-filter">
                    <button className="filter-button-filter"> Filter </button>
                  </div>
                  <div className="button-reset">
                    <button className="filter-button-reset"> Reset </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <section className="list-animal">
          <div className="list-container">
            <div className="list-name">
              <img
                className="list-animal-img"
                src="./public/pikachu.jpg"
                alt="Iki Pika"
              />
              <h3 className="list-animal-name">Iki Pika</h3>
            </div>
            <div className="list-name">
              <img
                className="list-animal-img"
                src="./public/barbary-singa atlas.jpg"
                alt="Singa Atlas"
              />
              <h3 className="list-animal-name">Singa Atlas</h3>
            </div>
            <div className="list-name">
              <img
                className="list-animal-img"
                src="./public/berang-berang.jpg"
                alt="Berang-Berang"
              />
              <h3 className="list-animal-name">Berang-Berang</h3>
            </div>
            <div className="list-name">
              <img
                className="list-animal-img"
                src="./public/karakalo australia.jpg"
                alt="Karakalo Australia"
              />
              <h3 className="list-animal-name">Karakalo Australia</h3>
            </div>
            <div className="list-name">
              <img
                className="list-animal-img"
                src="./public/lesser bilby.jpg"
                alt="Lesser Bilby"
              />
              <h3 className="list-animal-name">Lesser Bilby</h3>
            </div>
            <div className="list-name">
              <img
                className="list-animal-img"
                src="./public/takahe.jpg"
                alt="Takahe"
              />
              <h3 className="list-animal-name">Takahe</h3>
            </div>
            <div className="list-name">
              <img
                className="list-animal-img"
                src="./public/elang harpa.jpg"
                alt="Elang Harpa"
              />
              <h3 className="list-animal-name">Elang Harpa</h3>
            </div>
            <div className="list-name">
              <img
                className="list-animal-img"
                src="./public/katak pinokio.jpg"
                alt="Katak Pinokio"
              />
              <h3 className="list-animal-name">Katak Pinokio</h3>
            </div>
            <div className="list-name">
              <img
                className="list-animal-img"
                src="./public/anglerfish.jpg"
                alt="Angler Fish"
              />
              <h3 className="list-animal-name">Angler Fish</h3>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Explore;
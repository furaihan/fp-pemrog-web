import Navbar from "../../component/Navbar/Navbar";
import "./Explore.css"
import ArrowDown from "../../assets/image/arrow-down.jsx";
import "./Explore.css"


function Explore() {
  return (
    <>
      <main>
        <Navbar />
        <section className="hero">
          <div className="hero-body">
            <p className="hero-title">Lorem Ipsum</p>
            <p className="hero-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </p>
            <div className="arrow-down">
              <ArrowDown />
            </div>
          </div>
        </section>
        <section className="filter-animal">
          <div className="filter-animal-body">
           <h5 className="filter-animal-type"> Type </h5>
           <h5 className="filter-animal-region"> Region</h5>
           <h5 className="filter-animal-environment"> Environment</h5>
           <button className="filter-animal-filter"> Filter </button>
           <button className="filter-animal-reset"> Reset </button>
          </div>
          
        </section>
        
        <section className="list-animal">
          <div className="list-container"> 
            <div className="list-row">
                <div>
                  <img className="list-animal-img" src="./public/pikachu.jpg" alt="Iki Pika"/>
                  <h5 className="list-animal-name">Iki Pika</h5>
                </div>
                <div>
                  <img className="list-animal-img" src="./public/pikachu.jpg" alt="Iki Pika"/>
                  <h5 className="list-animal-name">Iki Pika</h5>
                </div>
                <div>
                  <img className="list-animal-img" src="./public/pikachu.jpg" alt="Iki Pika"/>
                  <h5 className="list-animal-name">Iki Pika</h5>
                </div> 
            </div>
            <div className="list-row">
              <div>
                <img className="list-animal-img" src="./public/pikachu.jpg" alt="Iki Pika"/>
                <h5 className="list-animal-name">Iki Pika</h5>
              </div>
              <div>
                <img className="list-animal-img" src="./public/pikachu.jpg" alt="Iki Pika"/>
                <h5 className="list-animal-name">Iki Pika</h5>
              </div>
              <div>
                <img className="list-animal-img" src="./public/pikachu.jpg" alt="Iki Pika"/>
                <h5 className="list-animal-name">Iki Pika</h5>
              </div>
            </div>
            <div className="list-row">
              <div>
                <img className="list-animal-img" src="./public/pikachu.jpg" alt="Iki Pika"/>
                <h5 className="list-animal-name">Iki Pika</h5>
              </div>
              <div>
                <img className="list-animal-img" src="./public/pikachu.jpg" alt="Iki Pika"/>
                <h5 className="list-animal-name">Iki Pika</h5>
              </div>
              <div>
                <img className="list-animal-img" src="./public/pikachu.jpg" alt="Iki Pika"/>
                <h5 className="list-animal-name">Iki Pika</h5>
              </div>
            </div>  
          </div>
        </section>
        
      </main>
    </>
  );
}

export default Explore;

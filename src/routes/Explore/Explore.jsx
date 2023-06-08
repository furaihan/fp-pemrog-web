import Navbar from "../../component/Navbar/Navbar";
import "./Explore.css"
import ArrowDown from "../../assets/image/arrow-down.jsx";

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
           <h5 className='filter-animal-type'> Type </h5>
           <div>
            
           </div>
           <h5 className="filter-animal-region"> Region</h5>
           <h5 className="filter-animal-environtment"> Environtment</h5>
          </div>
          
        </section>
        
        <section className="list-animal">
          <div className="list-animal-body"> 
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
        </section>
        

      </main>
    </>
  );
}

export default Explore;

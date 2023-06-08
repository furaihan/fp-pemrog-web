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
        <section className="filter">
          <div class="container col-xxl-8 px-8 py-5">
            <div class="row flex-lg-row align-items-center g-5 py-5">
              <div className="filter-animal-type">
                <h5 className="filter-animal-type"> Type </h5>
              </div>
              <div className="filter-animal-region">
                <h5 className="filter-animal-region"> Region</h5>
              </div>
              <div className="filter-animal-environtment"> 
                <h5 className="filter-animal-environment"> Environment</h5>
              </div>
              <div className="filter-animal-filter">
                <button className="filter-animal-filter"> Filter </button>
              </div>
              <div className="filter-animal-reset">
                <button className="filter-animal-reset"> Reset </button>
              </div>
           </div>
            
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
                  <img className="list-animal-img" src="./public/barbary-singa atlas.jpg" alt="Singa Atlas"/>
                  <h5 className="list-animal-name">Singa Atlas</h5>
                </div>
                <div>
                  <img className="list-animal-img" src="./public/berang-berang.jpg" alt="Berang-Berang"/>
                  <h5 className="list-animal-name">Berang-Berang</h5>
                </div> 
            </div>
            <div className="list-row">
              <div>
                <img className="list-animal-img" src="./public/irish elk.jpg" alt="Irish Elk"/>
                <h5 className="list-animal-name">Irish Elk</h5>
              </div>
              <div>
                <img className="list-animal-img" src="./public/lesser bilby.jpg" alt="Lesser Bilby"/>
                <h5 className="list-animal-name">Lesser Bilby</h5>
              </div>
              <div>
                <img className="list-animal-img" src="./public/takahe.jpg" alt="Takahe"/>
                <h5 className="list-animal-name">Takahe</h5>
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

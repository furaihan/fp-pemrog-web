import Navbar from "../../component/Navbar/Navbar";
import ArrowDown from "../../assets/image/arrow-down.jsx";
import "./Explore.css";
import Environtment from "../../component/Dropdown/Environtment";
import Region from "../../component/Dropdown/Region";
import Type from "../../component/Dropdown/Type";

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

        

      </main>
    </>
  );
}

export default Explore;

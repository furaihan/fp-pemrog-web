import Navbar from "../../component/Navbar/Navbar";
import SearchBar from "../../component/SearchBar/SearchBar";
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

        

      </main>
    </>
  );
}

export default Explore;

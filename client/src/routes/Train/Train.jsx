import Hamburger from "../../component/Hamburger/Hamburger";
import "./Train.css";

function Explore() {

  return (
    <>
      <main>
        <Hamburger />
        <div>
          <h1>Train</h1>
          <p>Halaman untuk coba coba dan utak atik react.</p>
        </div>
        <div className="cards-wrapper">
            <div className="card-wrapper">
              <div className="card-1 card-object card-object-hf">
                <a class="face front" href="#">
                <div className="title-wrapper">
                  <div className="title">Singa Atlas</div>
                  <div className="subtitle">Asal</div>
                  </div></a>
                  </div>
                </div>
                <div className="card-wrapper">
                <div className="card-2 card-object card-object-hf">
                <a class="face front" href="#">
                <div className="title-wrapper">
                  <div className="title">Singa Atlas</div>
                  <div className="subtitle">Asal</div>
                  </div></a>
                </div>
              </div>
              <div className="card-wrapper">
                <div className="card-3 card-object card-object-hf">
                <a class="face front" href="#">
                <div className="title-wrapper">
                  <div className="title">Singa Atlas</div>
                  <div className="subtitle">Asal</div>
                  </div></a>
                </div>
              </div>
            </div>
      </main>
    </>
  );
}

export default Explore;

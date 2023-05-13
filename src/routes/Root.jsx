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
            <div className="fun-fact-item">
              
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

import Navbar from "../../component/Navbar/Navbar";
import "./About.css"

export default function About() {
  return (
    <>
    <Navbar/>
      <div>
        <section className="hero">
          <div className="hero-body">
            <p className="hero-title">About</p>
            <p className="hero-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

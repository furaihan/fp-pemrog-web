import "./Description.css";
import ArrowDown from "../../assets/image/arrow-down.jsx";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

function Description(){
    return(
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
                <Footer />
            </main>
        </>
    );
}

export default Description;
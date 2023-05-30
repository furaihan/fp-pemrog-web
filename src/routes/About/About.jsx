import Navbar from "../../component/Navbar/Navbar";
import "./About.css"

export default function About() {
  return (
    <>
    <Navbar/>
      <div className="body">
        <section className="hero">
          <div className="hero-body">
            <p className="hero-title">About</p>
            <p className="hero-subtitle">
            Learn more about our values, our people,<br /> and our achievements.
            </p>
          </div>
        </section>
        <section>
          <div className="about-page">
            <div className="mission-content">
              <div className="mission-body">
                <div className="mission-left">
                  <p className="mission-left-text">Our Mission</p>
                </div>
                <div className="mission-right">
                  <p className="mission-right-text">is to conserve threatened species and ecosystems<br />worldwide.</p>
                </div>
                <div className="garis"></div>
              </div>
              <div className="content-teks">
                <p>
                  We depend on nature for so many things: materials, medicines, clean air and water,
                  a stable climate…the list goes on. Many studies have shown the benefits of nature for people’s
                  mental and physical health, and many people connect with nature on a spiritual level.
                </p>
                <p>
                  The ecosystems that provide us with this priceless service depend on an
                  brincredibly diverse range of species that interconnect to form a complex web. When a species is
                  lost, we risk upsetting this fine balance so that the whole system, once rich in variety, becomes
                  much more vulnerable to natural disasters, human disturbance and climate change. In the
                  worst-case scenario, the whole ecosystem can collapse – a tragedy in itself, and a threat to all
                  those who depend on it. 
                  
                </p>
                <p>
                  Sadly, our planet’s stunning array of species is under serious threat, from habitat loss, pollution,
                  hunting and myriad other human-made pressures. Biodiversity is being lost at 1,000 times the
                  natural rate.
                </p>
                <p>
                  Whichever way you look at it, humankind has an imperative – whether moral or economic – to
                  protect this biodiversity. All of us, from governments to businesses to individuals, need to work
                  together if we are to save our planet’s rich natural resources.
                </p>
                <p>
                  The consequences of failing to safeguard our forests, seas, wetlands and grasslands and the
                  wealth of species they support – including humans – would be devastating. FFI is under no
                  illusions about the enormity of the challenges facing our natural world. But we have an
                  impressive track record in tackling those challenges.
                </p>
                <p>
                  We have been behind some of the most significant initiatives in the history of
                  conservation. And we continue to play a key role in safeguarding some of the world’s most
                  iconic plants and animals, including Sumatran tigers, mountain gorillas, African and Asian
                  elephants, baobabs and proteas. We also champion less-familiar or neglected species such as
                  the Siamese crocodile, Sunda pangolin, Saint Lucia racer and saiga antelope.
                </p>
              </div>
            </div>
            <div className="article">
              <p className="p">Article</p>
            </div>
          </div>
        </section>
        <section>
          <div className="info">
            <div className="partnership">

            </div>
            <div  className="contact">

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
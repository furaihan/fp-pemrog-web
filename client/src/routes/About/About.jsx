import "./About.css";
import React from "react";

export default function About() {
  return (
    <React.Fragment>
      <div className="body">
        <section
          className="hero"
          style={{ background: 'url("homie.jpg") center/cover no-repeat' }}
        >
          <div className="hero-body">
            <p className="hero-title">About</p>
            <p className="hero-subtitle">
              Learn more about our values, our people,
              <br /> and our achievements.
            </p>
          </div>
        </section>
        <section id="about">
          <div className="container">
            <div className="left">
              <div className="mission">
                <div className="m-left">
                  <p>Our Mission</p>
                </div>
                <div className="m-right">
                  <p>
                    is to conserve threatened species and ecosystems worldwide.
                  </p>
                </div>
                <div className="inner-box"></div>
              </div>
              <div className="content">
                <p>
                  We depend on nature for so many things: materials, medicines,
                  clean air and water, a stable climate…the list goes on. Many
                  studies have shown the benefits of nature for people’s mental
                  and physical health, and many people connect with nature on a
                  spiritual level.
                </p>
                <p>
                  The ecosystems that provide us with this priceless service
                  depend on an incredibly diverse range of species that
                  interconnect to form a complex web. When a species is lost, we
                  risk upsetting this fine balance so that the whole system,
                  once rich in variety, becomes much more vulnerable to natural
                  disasters, human disturbance and climate change. In the
                  worst-case scenario, the whole ecosystem can collapse – a
                  tragedy in itself, and a threat to all those who depend on it.
                </p>
                <p>
                  Sadly, our planet’s stunning array of species is under serious
                  threat, from habitat loss, pollution, hunting and myriad other
                  human-made pressures. Biodiversity is being lost at 1,000
                  times the natural rate.
                </p>
                <p>
                  Whichever way you look at it, humankind has an imperative –
                  whether moral or economic – to protect this biodiversity. All
                  of us, from governments to businesses to individuals, need to
                  work together if we are to save our planet’s rich natural
                  resources.
                </p>
                <p>
                  The consequences of failing to safeguard our forests, seas,
                  wetlands and grasslands and the wealth of species they support
                  – including humans – would be devastating. FFI is under no
                  illusions about the enormity of the challenges facing our
                  natural world. But we have an impressive track record in
                  tackling those challenges.
                </p>
                <p>
                  We have been behind some of the most significant initiatives
                  in the history of conservation. And we continue to play a key
                  role in safeguarding some of the world’s most iconic plants
                  and animals, including Sumatran tigers, mountain gorillas,
                  African and Asian elephants, baobabs and proteas. We also
                  champion less-familiar or neglected species such as the
                  Siamese crocodile, Sunda pangolin, Saint Lucia racer and saiga
                  antelope.
                </p>
              </div>
            </div>
            <div className="right">
              <div className="article">
                <div className="kelompok">
                  <h2>
                    Anggota Kelompok
                  </h2>
                  <div className="anggota">
                    <p>
                      Muhammad Zafar
                    </p>
                    <p className="job">
                    Backend
                    </p>
                    <p>
                    +62 895-1497-6015
                    </p>
                  </div>
                  <div className="anggota">
                    <p>
                      Aric Yohanes 
                    </p>
                    <p className="job">
                      FrontEnd
                    </p>
                    <p>
                    +62 823-7955-2087
                    </p>
                  </div>
                  <div className="anggota">
                    <p>
                      Hamim Nur Khamid
                    </p>
                    <p className="job">
                      FrontEnd
                    </p>
                    <p>
                    +62 821-3325-6573
                    </p>
                  </div>
                  <div className="anggota">
                    <p>
                      Nabella Ayu
                    </p>
                    <p className="job">
                    FrontEnd-UI/UX
                    </p>
                    <p>
                    +62 895-3846-48816
                    </p>
                  </div>
                  <div className="anggota">
                    <p>
                    Nur Azzizah
                    </p>
                    <p className="job">
                    FrontEnd-UI/UX
                    </p>
                    <p>
                    +62 898-1063-020
                    </p>
                  </div>
                  <div className="anggota">
                    <p>
                    Unik Trisetyowati    
                    </p>
                    <p className="job">
                    FrontEnd-UI/UX
                    </p>
                    <p>
                    +62 821-3400-3946
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="info">
            <div className="partnership"></div>
            <div className="contact"></div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

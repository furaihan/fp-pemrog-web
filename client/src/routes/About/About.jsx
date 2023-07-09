import "./About.css";
import React from "react";
import Male_Avatar from './M_Avatar.png';
import Female_Avatar from './F_Avatar.png'


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
              Discover Our Values, <br />Our Team
              and Our Accomplishments
            </p>
          </div>
        </section>
        <section id="about">
          <div className="container">
            <div className="left">
              <div className="mission">
                <div className="m-left">
                  <p>Our Goal</p>
                </div>
                <div className="m-right">
                  <p>
                    is the conservation of endangered species and ecosystems on a global scale.
                  </p>
                </div>
                <div className="inner-box"></div>
              </div>
              <div className="content">
                <p>
                  Welcome to our page dedicated to raising awareness about endangered animals and the importance of their conservation. At Extict Fauna, we believe that every creature on this planet plays a vital role in maintaining our ecosystems. 
                </p>

                <p>Our mission is to educate and inspire individuals to protect these magnificent creatures.</p>

                <p>
                  We are a passionate team of animal lovers and conservationists committed to preserving biodiversity. Through our efforts, we strive to provide a platform for knowledge-sharing and advocacy. Together, we can make a difference in safeguarding endangered species for future generations.
                </p>
                <p>
                  Through our page, we showcase the incredible diversity of endangered animals. From majestic big cats to gentle giants, we shed light on their plight and the threats they face. Our aim is to foster understanding and empathy towards these animals and their role in maintaining the health of our planet.
                </p>
                <p>
                  In addition to spreading awareness, we actively collaborate with local communities, researchers, and conservation organizations. We raise funds for habitat restoration, anti-poaching measures, and education programs. Together, we work towards a sustainable future where humans and endangered animals coexist harmoniously.
                </p>
                <p>
                  Join us on our page to explore the stories of endangered animals and be inspired to take action. Discover how small lifestyle changes can contribute to a more sustainable world. Lets stand up for the voiceless and ensure a future where no animal is on the brink of extinction. Together, we can make a difference and give endangered animals a fighting chance for survival.
                </p>
              </div>
            </div>
            <div className="right">
              <div className="article">
                <div className="kelompok">
                  <h2>
                  Members of the group
                  </h2>
                  <div className="anggota">
                    <div className="circle">
                      <img className="avatar" src={Male_Avatar} alt="cowok" />
                    </div>
                    <div>
                      <p>
                        Muhammad Zhafar
                      </p>
                      <p className="job">
                      Backend
                      </p>
                      <p>
                      +62 895-1497-6015
                      </p>
                    </div>
                  </div>
                  <div className="anggota">
                    <div className="circle">
                      <img className="avatar" src={Male_Avatar} alt="cowok" />
                    </div>
                    <div>
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
                  </div>
                  <div className="anggota">
                    <div className="circle">
                      <img className="avatar" src={Male_Avatar} alt="cowok" />
                    </div>
                    <div>
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
                  </div>
                  <div className="anggota">
                    <div className="circle">
                      <img className="avatar" src={Female_Avatar} alt="cewek" />
                    </div>
                    <div>
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
                  </div>
                  <div className="anggota">
                    <div className="circle">
                      <img className="avatar" src={Female_Avatar} alt="cewek" />
                    </div>
                    <div>
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
                  </div>
                  <div className="anggota">
                    <div className="circle">
                      <img className="avatar" src={Female_Avatar} alt="cewek" />
                    </div>
                    <div>
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

import "./Description.css";
import ArrowDown from "../../assets/image/arrow-down.jsx";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

function Description() {
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
        <section id="body">
          <div className="container">
            <div className="left">
              <div className="desc">
                <h2>THE WORLD’S TOP DOG</h2>
                <p>
                  The grey wolf is the world’s largest canid. Once the most
                  widely distributed terrestrial mammal, these highly
                  intelligent and social animals are still found across much of
                  the northern hemisphere and are categorised as Least Concern
                  on the IUCN Red List of threatened species. However, wolves
                  are under severe threat in many parts of their range –
                  especially in Europe.
                </p>
                <p>
                  Wolves have faced centuries of persecution by humans
                  throughout their range, due to deep- rooted superstition and
                  to their fearsome reputation – largely undeserved – as
                  voracious killers of livestock and a danger to people. As a
                  result, grey wolves are today restricted to just two thirds of
                  their original territory and are mainly confined to wilderness
                  or remote areas.
                </p>
                <p className="p-last">
                  Recent decades have witnessed the beginnings of a turnaround
                  in the fortunes of the grey wolf, with some protective
                  measures being put into place in its last remaining European
                  strongholds. Conservation efforts are focusing on
                  strengthening this protection and promoting peaceful
                  coexistence between local people and wolf packs.
                </p>
              </div>
              <h4>#FromTheField Camera trap footage of grey wolves</h4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WBD2uNCywtA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <div className="facts">
                <h2>GREY WOLF FACTS</h2>
                <p>
                  Grey wolves are monogamous – mating for life and living in
                  tight-knit family groups.
                </p>
                <p>The grey wolf is the world’s largest wild dog species.</p>
                <p>
                  As apex predators, grey wolves have few natural enemies other
                  than humans.
                </p>
                <p>
                  Subject to the availability of prey, grey wolves can thrive in
                  a wide range of habitats from dense forest to desert and
                  Arctic tundra.
                </p>
                <p>
                  Wolves can bring down animals as large as a moose, but feed
                  opportunistically on a variety of smaller prey, and will
                  scavenge on carrion.
                </p>
                <p>
                  In areas of dense human presence and prey scarcity, especially
                  in Eurasia, hunger may drive wolves to feed on livestock or
                  garbage.
                </p>
              </div>
              <div className="story">
                <h2>CONSERVATION STORY</h2>
                <p>
                  The grey wolf was historically the most widely distributed
                  terrestrial mammal, but deliberate killing of wolves and
                  complete extermination of some populations have reduced the
                  overall range of the species by one third.
                </p>
                <p>
                  This persecution was largely motivated by fear of wolf attacks
                  on humans, but these incidences are extremely rare, and mostly
                  confined to rabid animals. Wolves will typically avoid close
                  encounters, having developed a fear of humans due to their
                  historical conflict with shepherds and hunters.
                </p>
                <p>
                  For centuries, wolves were on the receiving end of numerous
                  orchestrated campaigns to wipe them from the map. In the UK,
                  that feat was achieved in 1680. They suffered a similar fate
                  throughout most of Western Europe, Japan, Mexico and large
                  parts of the USA. The first protection measures were not put
                  in place until the 1930s, in Germany. The world has since
                  become more tolerant of wolves and the species is experiencing
                  a resurgence, with some populations naturally recolonising
                  parts of their original range. However, many populations are
                  still under threat. In some countries, such as Romania, human
                  encroachment on traditional wolf territory as a result of
                  agricultural expansion, for example, is re-igniting conflict
                  between people and wolves, and making their fragmented
                  European populations even more vulnerable.
                </p>
              </div>
            </div>
            <div className="right">
              <div className="title">
                <p>
                  <b>At a glance</b>
                </p>
                <p className="nama_ilmiah">
                  <i>Canis lupus</i>
                </p>
              </div>
              <div className="family">
                <p>
                  <b>Family:</b> Canidae
                </p>
                <p>
                  <b>Order:</b> Carnivora
                </p>
                <p>
                  <b>Estimated in the wild:</b> Unknown
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Description;

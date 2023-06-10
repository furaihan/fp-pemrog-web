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
                <section className="desc1">
                    <div className="content-family">
                        <div className="content1">
                            <h2 className="dog">THE WORLD’S TOP DOG</h2>
                            <p className="p-margin">
                                The grey wolf is the world’s largest canid. Once the most widely distributed terrestrial mammal,
                                these highly intelligent and social animals are still found across much of the northern
                                hemisphere and are categorised as Least Concern on the IUCN Red List of threatened species.
                                However, wolves are under severe threat in many parts of their range – especially in Europe.
                            </p>
                            <p className="p-margin">
                                Wolves have faced centuries of persecution by humans throughout their range, due to deep-
                                rooted superstition and to their fearsome reputation – largely undeserved – as voracious killers
                                of livestock and a danger to people. As a result, <b>grey wolves are today restricted to just two
                                thirds of their original territory and are mainly confined to wilderness or remote areas.</b>
                            </p>
                            <p className="p-margin">
                                Recent decades have witnessed the beginnings of a turnaround in the fortunes of the grey
                                wolf, with some protective measures being put into place in its last remaining European
                                strongholds. Conservation efforts are focusing on strengthening this protection and promoting
                                peaceful coexistence between local people and wolf packs.
                            </p>
                        </div>
                        <div className="family">
                            <p><span className="family-title">At a glance</span>
                            <br /><span className="family-after-title">Canis Lupus</span></p>
                            <div className="least-concern">
                                <div className="least-concern-logo"><p>LC</p></div>
                                <p className="least-concern-text">Least Concern</p>
                            </div>
                            <p><b>Family:</b> Canidae</p>
                            <p><b>Order:</b> Carnivora</p>
                            <p><b>Estimated in the wild:</b> Unknown</p>
                        </div>
                    </div>
                    <div className="youtube">
                        <p className="youtube-title">#FromTheField Camera trap footage of grey wolves</p>
                        <div className="tumb">
                            <img className="tumb-image" src="src\assets\image\div.ytp-cued-thumbnail-overlay-image.jpg" alt="tumbnail" />
                            <img className="tumb-logo" src="src\assets\image\Photo image of Fauna & Flora International.jpg" alt="asdasd" />
                            <p className="tumb-text">#FromTheField Grey wolves</p> 
                            <img className="share" src="src\assets\image\ytp-id-29.png" alt="" />
                            <p className="share-p">Share</p>
                            <div className="youtube-logo">
                                <div className="youtube-play"></div>
                            </div>
                            <div className="watch-on">
                                <p className="watch-text">Watch on</p>
                                <img className="watch-img" src="src\assets\image\ytp-id-33.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="fact-title">GREY WOLF FACTS</h2>
                        <p className="fact-content">Grey wolves are monogamous – mating for life and living in tight-knit family groups.</p>
                        <p className="fact-content">The grey wolf is the world’s largest wild dog species.</p>
                        <p className="fact-content">As apex predators, grey wolves have few natural enemies other than humans.</p>
                        <p className="fact-content">Subject to the availability of prey, grey wolves can thrive in a wide range of habitats from
                            dense forest to desert and Arctic tundra.</p>
                        <p className="fact-content">Wolves can bring down animals as large as a moose, but feed opportunistically on a
                            variety of smaller prey, and will scavenge on carrion.</p>
                        <p className="fact-content">In areas of dense human presence and prey scarcity, especially in Eurasia, hunger may
                            drive wolves to feed on livestock or garbage.</p>
                    </div>
                    <div>
                        <h2 className="story-title">CONSERVATION STORY</h2>
                        <p className="story-content1">
                            The grey wolf was historically the most widely distributed terrestrial mammal, but deliberate
                            killing of wolves and complete extermination of some populations have reduced the overall
                            range of the species by one third.
                        </p>
                        <p className="story-content2">
                            This persecution was largely motivated by fear of wolf attacks on humans, but these incidences
                            are extremely rare, and mostly confined to rabid animals. <b>Wolves will typically avoid close
                            encounters, having developed a fear of humans due to their historical conflict with
                            shepherds and hunters.</b>
                        </p>
                        <p className="story-content3">
                            For centuries, wolves were on the receiving end of numerous orchestrated campaigns to wipe
                            them from the map. In the UK, that feat was achieved in 1680. They suffered a similar fate
                            throughout most of Western Europe, Japan, Mexico and large parts of the USA. The first
                            protection measures were not put in place until the 1930s, in Germany. The world has since
                            become more tolerant of wolves and the species is experiencing a resurgence, with some
                            populations naturally recolonising parts of their original range. <b>However, many populations are
                            still under threat.</b> In some countries, such as Romania, human encroachment on traditional wolf
                            territory as a result of agricultural expansion, for example, is re-igniting conflict between people
                            and wolves, and making their fragmented European populations even more vulnerable.
                        </p>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}

export default Description;
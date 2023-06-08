import "./Root.css";
import ArrowDown from "../../assets/image/arrow-down.jsx";
import Navbar from "../../component/Navbar/Navbar";
import FunFactBox from "../../component/FunFactBox/FunFactBox";
import Footer from "../../component/Footer/Footer";

function App() {
  const funFactItems = [
    {
      id: 1,
      image: "pikachu.jpg",
      title: "Iki Pika",
      subtitle:
        "Suka memakan kotorannya sendiri. Pika mengeluarkan kotoran berwarna hijau yang terdiri dari tanaman atau tumbuh-tumbuhan. Untuk mendapatkan lebih banyak nutrisi, Pika memakan lagi kotorannya dan setelah itu mengeluarkan kotoran berwarna gelap.",
    },
    {
      id: 2,
      image: "pikachu.jpg",
      title: "Sumatran Tiger",
      subtitle:
        "Salah satu fakta unik Harimau Sumatra yaitu memiliki penglihatan yang tajam 30 kali lebih tajam dari penglihatan manusia pada saat malam hari.",
    },
    {
      id: 3,
      image: "pikachu.jpg",
      title: "Berang-Berang",
      subtitle:
        "Berang-Berang mempunyai nama untuk kotorannya, yang diberi nama keselo. Keselo mempunyai aroma yang khas dan bisa digunakan untuk berkomunikasi menunjukkan lokasi serta dari aroma tersebut Berang-Berang dapat mengenali identitas Berang-Berang lain seperti jenis kelamin dan usianya.",
    },
  ];
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
        <section className="fun-fact">
          <div className="fun-fact-body">
            <p className="fun-fact-title">Fun Fact</p>
            <div className="fun-fact-items">
              {funFactItems.map((item) => (
                <FunFactBox
                  key={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="pembatas">
            <p className="our-focus-text">Semarak Bumi semakin indah dengan beragamnya hewan dan <br /> tumbuhan. Lestarikan mereka, lestarikan keindahan bumi, <br /> lestarikan kehidupan!</p>
        </section>
          <div className="fokus-kami">
            <h1 className="fokus-kami-text">Fokus Kami</h1>
          </div>
        <section className="fokus-kami-img">
            <div className="fauna-img">
              <div className="border-box-fauna-1">
                <div className="fauna-1">
                  <h3 className="nama-fauna-1">Singa Atlas</h3>
                </div>
              </div>
              <div className="border-box-fauna-2">
                <div className="fauna-2">
                <h3 className="nama-fauna-2">Irish Elk</h3>
                </div>
              </div>
              <div className="border-box-fauna-3">
                <div className="fauna-3">
                <h3 className="nama-fauna-3">Takahe</h3>
                </div>
              </div>
              <div className="border-box-fauna-4">
                <div className="fauna-4">
                <h3 className="nama-fauna-4">Leseer Bilby</h3>
                </div>
              </div>
            </div>
            
        </section>
        <section className="hewan-punah">
            <div className="container-hewan-punah">
              <div className="container-hewan-punah-1">
                <h2>Jumlah Hewan Punah</h2>
                <div className="jml-hewan-punah"></div>
              </div>
            </div>
        </section>
        <section className="kuis">
          <h1>Kuis</h1>
          <div className="container-kuis"></div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;

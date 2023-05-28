import "./Root.css";
import ArrowDown from "../../assets/image/arrow-down.jsx";
import Navbar from "../../component/Navbar/Navbar";
import FunFactBox from "../../component/FunFactBox/FunFactBox";

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
      </main>
    </>
  );
}

export default App;

import "./Fun.css";
import { useState } from "react";

function Fun() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isFirstTime, setIsFirstTime] = useState(true);

  const handleClick = (cardId) => {
    if (isFirstTime) {
      setIsFirstTime(false);
    }
    setSelectedCard(cardId);
  };

  const cards = [
    {
      id: 1,
      title: "Iki Pika",
      imageSrc: "pikachu.jpg",
      description:
        "Suka memakan kotorannya sendiri. Pika mengeluarkan kotoran berwarna hijau yang terdiri dari tanaman atau tumbuh-tumbuhan. Untuk mendapatkan lebih banyak nutrisi, Pika memakan lagi kotorannya dan setelah itu mengeluarkan kotoran berwarna gelap",
    },
    {
      id: 2,
      title: "Sumatran Tiger",
      imageSrc: "pikachu.jpg",
      description:
        "Salah satu fakta unik Harimau Sumatra yaitu memiliki penglihatan yang tajam 30 kali lebih tajam dari penglihatan manusia pada saat malam hari.",
    },
    {
      id: 3,
      title: "Berang-Berang",
      imageSrc: "pikachu.jpg",
      description:
        "Berang-Berang mempunyai nama untuk kotorannya, yang diberi nama keselo. Keselo mempunyai aroma yang khas dan bisa digunakan untuk berkomunikasi menunjukkan lokasi serta dari aroma tersebut Berang-Berang dapat mengenali identitas Berang-Berang lain seperti jenis kelamin dan usianya.Description 3",
    },
  ];

  return (
    <>
      <main>
        <section className="hero-section">
          <div className="fun-fact-title">
            <p>Fun Fact</p>
          </div>
          <div className="card-grid">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`fun-fact-card ${
                  selectedCard === card.id || isFirstTime ? "" : "blur"
                }`}
                onClick={() => handleClick(card.id)}
              >
                <div className="fact">
                  <h3>{card.title}</h3>
                  <img src={card.imageSrc} alt={card.title} />
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Fun;

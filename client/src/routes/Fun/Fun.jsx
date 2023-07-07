import "./Fun.css";
import { useState } from "react";

function Fun() {
  // State untuk menyimpan card yang dipilih dan state untuk menandai apakah ini pertama kali card diklik
  const [selectedCard, setSelectedCard] = useState(null);
  const [isFirstTime, setIsFirstTime] = useState(true);

  // Fungsi untuk mengatur card yang dipilih dan mengubah state isFirstTime jika ini adalah klik pertama
  const handleClick = (cardId) => {
    if (isFirstTime) {
      setIsFirstTime(false);
    }
    setSelectedCard(cardId);
  };

  // Data cards yang akan ditampilkan
  const cards = [
    {
      id: 1,
      title: "Iki Pika",
      imageSrc: "pikachu.jpg",
      description:
        "Likes to eat its own feces. Pika excretes green feces consisting of plants or vegetation. To obtain more nutrients, Pika eats its feces again and then excretes dark-colored feces.",
    },
    {
      id: 2,
      title: "Berang-Berang",
      imageSrc: "berang-berang.jpg",
      description:
        "Otters are carnivorous mammals classified under the subfamily Lutrinae. There are 13 species of otters, and they are all semi-aquatic, aquatic, or marine animals that primarily feed on fish or invertebrates. Lutrinae is a branch of the family Mustelidae.",
    },
    {
      id: 3,
      title: "Elang Harpa",
      imageSrc: "elang-harpa.jpg",
      description:
        "The harpy eagle is a neotropical species of eagle. It is also known as the American harpy eagle to distinguish it from the Papuan eagle, which is sometimes referred to as the Papua harpy eagle. It is the largest and most powerful wild animal found in the rainforest and among the largest eagle species in the world.",
    },
  ];

  return (
    <>
      <section className="hero-section">
        <div className="fun-fact-title">
          <p>Fun Fact</p>
        </div>
        <div className="card-grid">
          {/* Loop melalui setiap card dan tampilkan */}
          {cards.map((card) => (
            <div
              key={card.id}
              className={`fun-fact-card ${
                selectedCard === card.id || isFirstTime ? "" : "blur"
              }`}
              onClick={() => handleClick(card.id)}
            >
              <div className="fact">
                {/* Judul dan gambar card */}
                <h3>{card.title}</h3>
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  style={{ width: "200px", height: "200px" }}
                />

                {/* Tampilan deskripsi card hanya jika card ini sedang dipilih */}
                {selectedCard === card.id && (
                  <div className="description">
                    <h5>{card.description}</h5>
                    <button className="ReadMore">Read More</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Fun;

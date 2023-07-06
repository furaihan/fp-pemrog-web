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
        "Suka memakan kotorannya sendiri. Pika mengeluarkan kotoran berwarna hijau yang terdiri dari tanaman atau tumbuh-tumbuhan. Untuk mendapatkan lebih banyak nutrisi, Pika memakan lagi kotorannya dan setelah itu mengeluarkan kotoran berwarna gelap",
    },
    {
      id: 2,
      title: "Berang-Berang",
      imageSrc: "berang-berang.jpg",
      description:
        "Berang-berang adalah mamalia karnivora yang tergolong ke dalam subfamili Lutrinae. Terdapat 13 spesies berang-berang, dan semuanya merupakan hewan semiakuatik, akuatik, atau hewan laut, dan mereka memakan ikan atau invertebrata. Lutrinae adalah cabang dari famili Mustelidae.",
    },
    {
      id: 3,
      title: "Elang Harpa",
      imageSrc: "elang-harpa.jpg",
      description:
        "Elang harpy adalah spesies elang yang neotropis. Ini juga disebut elang harpy Amerika untuk membedakannya dari rajawali papua, yang kadang-kadang dikenal sebagai elang harpy Papua. Ini adalah hewan liar terbesar dan paling kuat yang ditemukan di hutan hujan, dan di antara spesies elang terbesar yang ada di dunia.",
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

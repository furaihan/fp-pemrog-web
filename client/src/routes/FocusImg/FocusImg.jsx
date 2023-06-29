import React from 'react';
import "./FocusImg.css";

function FocusImg() {
  const OurFocus = [
    {
      id: 1,
      image: "lesser-bilby.jpg",
      title: "Lesser Bilby",
      subtitle:
        "Asal darimana",
    },
    {
      id: 2,
      image: "takahe.jpg",
      title: "Takahe",
      subtitle:
        "Asal darimana",
    },
    {
      id: 3,
      image: "irish-elk.jpg",
      title: "Irish Elk",
      subtitle:
        "Asal darimana",
    },
  ];

  return (
    <div className="cards-wrapper">
      {OurFocus.map((item) => (
        <div className="card-wrapper" key={item.id}>
          <div className={`card-object card-${item.id}`}>
            <div className="face front" style={{ backgroundImage: `url(${item.image})` }}>
              <div className="title-wrapper">
                <div className="title">{item.title}</div>
                <div className="subtitle">{item.subtitle}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FocusImg;

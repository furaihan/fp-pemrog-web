import "./FocusImg.css";

function FocusImg() {
  const OurFocus = [
    {
      id: 1,
      image: "lesser-bilby.jpg",
      title: "Lesser Bilby",
      subtitle:
        "Australia",
    },
    {
      id: 2,
      image: "takahe.jpg",
      title: "Takahe",
      subtitle:
        "Selandia Baru",
    },
    {
      id: 3,
      image: "irish-elk.jpg",
      title: "Irish Elk",
      subtitle:
        "Irlandia",
    },
  ];

  return (
  <section className="focus">
    <div className="our-focus-title">
      <h1>Our Focus</h1>
    </div>
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
    </section>  
  );
}

export default FocusImg;

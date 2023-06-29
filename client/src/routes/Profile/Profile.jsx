import "./Profile.css";

function Profile() {
  return (
    <>
      <div id="profile">
        <div className="atas">
          <div className="foto-profile">
            <div className="foto">
              <div className="user"><img src="public\user.svg" alt="user" /></div>
            </div>
          </div>
          <div className="biodata">
            <h1 className="nama">Aric Yohanes</h1>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, ipsam ratione? Architecto necessitatibus tempora,
              rerum nemo nihil illum voluptatem facere, quibusdam tempore,
              tenetur provident natus ducimus laborum assumenda. Fugit,
              consequuntur!
            </p>
          </div>
          <button className="edit-profile">Edit Profile </button>
        </div>
        <div className="card">
  <div className="icon"></div>
  <div className="title">Easy Cheesy</div>
  <p className="description">This cheesy, juicy ultimate comforting lunch or quick and easy dinner recipe.</p>
  <div className="rating"></div>
  {/* <a href="#" className="link">See the recipe</a> */}
</div>

<div className="card">
  <div className="icon"></div>
  <div className="title">Easy Cheesy</div>
  <p className="description">This cheesy, juicy ultimate comforting lunch or quick and easy dinner recipe.</p>
  <div className="rating"></div>
  {/* <a href="#" className="link">See the recipe</a> */}
</div>

<div className="card">
  <div className="icon"></div>
  <div className="title">Easy Cheesy</div>
  <p className="description">This cheesy, juicy ultimate comforting lunch or quick and easy dinner recipe.</p>
  <div className="rating"></div>
  {/* <a href="#" className="link">See the recipe</a> */}
</div>
      </div>
    </>
  );
}

export default Profile;
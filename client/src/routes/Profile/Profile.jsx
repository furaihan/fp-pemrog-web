import "./Profile.css";

function Profile() {
  return (
    <>
      <div id="profile">
        <div className="atas">
          <div className="foto-profile">
            <div className="foto"></div>
          </div>
          <div className="biodata">
            <h1 className="nama">Aric Yohanes</h1>
            <div className="job-address">
              <p className="job">Job</p>
              <p>|</p>
              <p className="address">Address</p>
            </div>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, ipsam ratione? Architecto necessitatibus tempora,
              rerum nemo nihil illum voluptatem facere, quibusdam tempore,
              tenetur provident natus ducimus laborum assumenda. Fugit,
              consequuntur!
            </p>
          </div>
          <button className="edit-profile">Edit Profile</button>
        </div>
        <div className="bawah">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
      </div>
    </>
  );
}

export default Profile;

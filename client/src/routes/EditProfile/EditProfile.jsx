import "./EditProfile.css";

function EditProfile() {
  return (
    <>
      <div id="edit">
        <div className="left">
        <div className="FotoPP"><img src="public\BGPP.svg" alt="FotoPP" /></div>
        </div>
        <div className="right">
          <div className="content">
            <div className="title">
              <h1>Edit Profile</h1>
              <div className="profile">
                <img src="public\camera.svg" alt="camera" className="camera"/>
              </div>
            </div>
            <div className="double">
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <br />
                <input type="text" />
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <br />
                <input type="text" />
              </div>
            </div>
            <div className="single">
              <label htmlFor="email">Email</label>
              <br />
              <input type="text" />
            </div>
            <div className="single">
              <label htmlFor="address">Address</label>
              <br />
              <input type="text" />
            </div>
            <div className="single">
              <label htmlFor="Contact-Number">Contact Number</label>
              <br />
              <input type="text" />
            </div>
            <div className="single-bio">
              <label htmlFor="bio">Bio</label>
              <br />
              <textarea name="bio" id="bio"></textarea>
            </div>
            <div className="acc-button">
              <button className="cancel">Cancel</button>
              <button className="save">Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;

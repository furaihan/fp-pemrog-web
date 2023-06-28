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
            <div className="double">
              <div className="city">
                <label htmlFor="city">City</label>
                <br />
                <select name="city" id="city">
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Japan">Japan</option>
                </select>
              </div>
              <div className="state">
                <label htmlFor="state">State</label>
                <br />
                <select name="state" id="state">
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Japan">Japan</option>
                </select>
              </div>
            </div>
            <div className="single">
              <div className="password">
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" />
              </div>
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

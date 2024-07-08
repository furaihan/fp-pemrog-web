import { useEffect } from "react";
import "./Profile.css";
import { useLoaderData, Link, redirect, useNavigation } from "react-router-dom";

function Profile() {
  const profile = useLoaderData();
  const navigation = useNavigation();
  console.log("Profile: ");
  console.log(profile);
  useEffect(() => {
    if (profile.username === null) {
      redirect("/login");
    }
  });
  return (
    <>
      <div id="profile">
        <div className="atas">
          <div className="foto-profile">
            <div className="foto">
              <div className="user">
                <img className="icon-user" src="./user.svg" alt="user" />
              </div>
            </div>
          </div>
          <div className="biodata">
            <h1 className="nama">
              {navigation.state === "loading"
                ? "Loading..."
                : profile.data.firstName
                ? profile.data.firstName + " " + profile.data.lastName
                : profile.username ??
                  "Anonymous! You're not logged in and should not be here!"}
            </h1>
            <p className="bio">
              {profile.data.bio
                ? profile.data.bio
                : "There's no bio yet, let's add it to edit profile!"}
            </p>
          </div>
          <div className="button-container">
            <Link to="/editprofile">
              <button className="edit-profile">Edit Profile</button>
            </Link>{" "}
            <br />
            <Link to="/logout">
              <button className="logout">Logout</button>
            </Link>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="icon"></div>
            <div className="title">Lesser Bilby</div>
            <p className="description">Highscore 1234</p>
          </div>
          <div className="card">
            <div className="icon"></div>
            <div className="title">Takahe</div>
            <p className="description">Highscore 1023</p>
          </div>
          <div className="card">
            <div className="icon"></div>
            <div className="title">Irish Elk</div>
            <p className="description">Highscore 980</p>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Profile;

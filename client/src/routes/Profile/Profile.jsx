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
                <img src="public\user.svg" alt="user" />
              </div>
            </div>
          </div>
          <div className="biodata">
            <h1 className="nama">
              {navigation.state === "loading"
                ? "Loading..."
                : profile.data.firstName
                ? profile.data.firstName + " " + profile.data.lastName
                : profile.username}
            </h1>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, ipsam ratione? Architecto necessitatibus tempora,
              rerum nemo nihil illum voluptatem facere, quibusdam tempore,
              tenetur provident natus ducimus laborum assumenda. Fugit,
              consequuntur!
            </p>
          </div>
          <div className="button-container">
          <button className="edit-profile">
            <Link to="/editprofile">Edit Profile</Link>{" "}
          </button>
          <br />
          <button className="logout">
          <Link to="/logout">Logout</Link>
          </button>
          </div>
          
        </div>
        <div className="card">
          <div className="icon"></div>
          <div className="title">Easy Cheesy</div>
          <p className="description">
            This cheesy, juicy ultimate comforting lunch or quick and easy
            dinner recipe.
          </p>
          <div className="rating"></div>
          {/* <a href="#" className="link">See the recipe</a> */}
        </div>

        <div className="card">
          <div className="icon"></div>
          <div className="title">Easy Cheesy</div>
          <p className="description">
            This cheesy, juicy ultimate comforting lunch or quick and easy
            dinner recipe.
          </p>
          <div className="rating"></div>
          {/* <a href="#" className="link">See the recipe</a> */}
        </div>

        <div className="card">
          <div className="icon"></div>
          <div className="title">Easy Cheesy</div>
          <p className="description">
            This cheesy, juicy ultimate comforting lunch or quick and easy
            dinner recipe.
          </p>
          <div className="rating"></div>
          {/* <a href="#" className="link">See the recipe</a> */}
        </div>
      </div>
      <div>
      </div>
    </>
  );
}

export default Profile;

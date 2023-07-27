import "./EditProfile.css";
import { Form, Link, useNavigation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getProfileLoader from "../../api/getProfile";
import AvatarChange from "./AvatarChange";

function EditProfile() {
  const profileQuery = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileLoader,
  });
  const navigation = useNavigation();
  if (profileQuery.isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div id="edit">
        <div className="left">
          <div className="FotoPP">
            <img src="./BGPP.svg" alt="FotoPP" />
          </div>
        </div>
        <div className="right">
          <div className="content">
            <Form method="put">
              <div className="title">
                <h1>
                  Edit Profile {profileQuery.isLoading ? "Loading..." : ""}
                </h1>
            
                <AvatarChange/>
            
              </div>
              <div className="double">
                <div className="firstName">
                  <label htmlFor="firstName">First Name</label>
                  <br />
                  <input
                    type="text"
                    name="firstName"
                    defaultValue={profileQuery.data.data.firstName}
                  />
                </div>
                <div className="lastName">
                  <label htmlFor="lastName">Last Name</label>
                  <br />
                  <input
                    type="text"
                    name="lastName"
                    defaultValue={profileQuery.data.data.lastName}
                  />
                </div>
              </div>
              <div className="single">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="text"
                  name="email"
                  defaultValue={profileQuery.data.data.email}
                  disabled
                  alt="Email is uneditable"
                />
              </div>
              <div className="single">
                <label htmlFor="address">Address</label>
                <br />
                <input
                  type="text"
                  name="address"
                  defaultValue={profileQuery.data.data.address}
                />
              </div>
              <div className="single">
                <label htmlFor="Contact-Number">Contact Number</label>
                <br />
                <input
                  type="text"
                  name="phone"
                  defaultValue={profileQuery.data.data.phone}
                />
              </div>
              <div className="single-bio">
                <label htmlFor="bio">Bio</label>
                <br />
                <textarea
                  name="bio"
                  id="bio"
                  defaultValue={profileQuery.data.data.bio}
                ></textarea>
              </div>
              <div className="acc-button">
                <Link to="/profile">
                  <button className="cancel">Cancel</button>
                </Link>
                <button className="save" type="submit">
                  {navigation.state === "submitting"
                    ? "Saving..."
                    : navigation.state === "loading"
                    ? "Saved!"
                    : "Save"}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;

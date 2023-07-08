import { redirect } from "react-router-dom";
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const logoutAction = async () => {
  if (localStorage.getItem("token") === null) return redirect("/");
  localStorage.removeItem("token");
  await delay(1500);
  return redirect("/");
};

export default logoutAction;

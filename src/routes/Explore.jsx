import Navbar from "../component/Navbar/Navbar";
import SearchBar from "../component/SearchBar/SearchBar";

function Explore() {
  return (
    <>
      <Navbar />
      <div>
        <h1>Explore</h1>
        <p>This is the explore page.</p>
        <SearchBar />
      </div>
    </>
  );
}

export default Explore;

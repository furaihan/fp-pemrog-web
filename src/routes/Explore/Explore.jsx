import Navbar from "../../component/Navbar/Navbar";
import SearchBar from "../../component/SearchBar/SearchBar";

function Explore() {
  return (
    <>
      <main>
        <Navbar />
        <div>
          <h1>Explore</h1>
          <p>This is the explore page.</p>
          <SearchBar />
        </div>
        <section id="hero">

        </section>
      </main>
    </>
  );
}

export default Explore;

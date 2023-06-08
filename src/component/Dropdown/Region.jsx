import "./Region.css";

export default function Region(){
    return (
    <select
        className="region-filter"
        name="region">
        <option value="Any"> Any </option>
        <option value="Mamals"> Mamals </option>
        <option value="Reptil"> Reptil </option>
        <option value="Amfibi"> Amfibi </option>
      </select>
    );
}
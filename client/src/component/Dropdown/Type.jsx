import "./Type.css";

export default function Type(){
    return (
    <select
        className="type-filter"
        name="type">
        <option value="Any"> Any </option>
        <option value="Mamals"> Mamals </option>
        <option value="Reptil"> Reptil </option>
        <option value="Amfibi"> Amfibi </option>
      </select>
    );
}
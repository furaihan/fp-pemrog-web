import "./Environtment.css";

export default function Environtment(props){
    return (
    <select
        className="environtment-filter"
        name="region">
        <option value="Any"> Any </option>
        <option value="Mamals"> Mamals </option>
        <option value="Reptil"> Reptil </option>
        <option value="Amfibi"> Amfibi </option>
      </select>
    );
}
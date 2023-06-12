import "./Environtment.css";

export default function Environtment(){
    return (
    <select
        className="environtment-filter"
        name="region">
        <option value="Any"> Any </option>
        <option value="Sumatra"> Sumatra </option>
        <option value="Maroko"> Maroko </option>
        <option value="NTB"> Nusa Tenggara Barat </option>
      </select>
    );
}
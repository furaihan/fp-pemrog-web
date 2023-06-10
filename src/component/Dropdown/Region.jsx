import "./Region.css";

export default function Region(){
    return (
    <select
        className="region-filter"
        name="region">
        <option value="Any"> Any </option>
        <option value="Indonesia"> Indonesia </option>
        <option value="Afrika"> Afrika </option>
        <option value="Amfibi"> Amfibi </option>
      </select>
    );
}
import "./Filter.css";

export default function Filter(props){
    return (
    <select
        className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
        name="filter">
        <option value="Any"> Any </option>
        <option value="Mamals"> Mamals </option>
        <option value="Reptil"> Reptil </option>
        <option value="Amfibi"> Amfibi </option>
      </select>
    );
}
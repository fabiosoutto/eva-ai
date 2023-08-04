
const Dropdown = ({ options, name, value, onChange }) => {
    return (
      <select className="w-[320px] p-3 bg-transparent border rounded outline-none mb-[10px]"
        value={value} onChange={onChange}>
        {options.map((option) => (
          <option className="bg-white text-black"
            key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };
  
  export default Dropdown;
  
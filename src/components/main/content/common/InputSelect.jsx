const InputSelect = ({ label, input, setInput, options }) => {
  return (
    <div className="input-group mb-3 input-group-sm">
      <span className="input-group-text bg-dark text-white w-25">
        {label}
      </span>
      <select
        value={input}
        className="form-control"
        onChange={(e) => setInput(parseInt(e.target.value))}
      >
        {options}
      </select>
    </div>
  );
};

export default InputSelect;

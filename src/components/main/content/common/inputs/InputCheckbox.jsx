const InputCheckbox = ({ label, input, setInput }) => {
  return (
    <div className="input-group mb-3 input-group-sm">
      <span className="input-group-text bg-dark text-white w-25">{label}</span>
      <div className="input-group-text bg-dark text-white">
        <input
          type="checkbox"
          checked={input}
          value={input}
          onChange={(e) => setInput(e.target.checked)}
        />
      </div>
    </div>
  );
};

export default InputCheckbox;

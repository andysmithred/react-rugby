const InputNumber = ({ label, input, setInput, placeholder }) => {
  const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    setInput(result);
  };

  return (
    <div className="input-group mb-3 input-group-sm">
      <span className="input-group-text bg-dark text-white w-25">{label}</span>
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputNumber;

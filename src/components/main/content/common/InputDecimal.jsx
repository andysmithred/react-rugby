
const InputDecimal = ({ label, input, setInput, placeholder }) => {
  let start = 0;

  const change = (e) => {
    start = e.target.selectionStart;
    let val = e.target.value;
    val = val.replace(/([^0-9.]+)/, "");
    val = val.replace(/^(0|\.)/, "");
    const match = /(\d{0,7})[^.]*((?:\.\d{0,2})?)/g.exec(val);
    const value = match[1] + match[2];
    e.target.value = value;

    setInput(value);
    if (val.length > 0) {
      e.target.value = Number(value).toFixed(2);
      e.target.setSelectionRange(start, start);
      setInput(Number(value).toFixed(2));
    }
  };

  return (
    <div className="input-group mb-3 input-group-sm">
      <span className="input-group-text bg-dark text-white w-25">{label}</span>
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={input}
        onChange={change}
      />
    </div>
  );
};

export default InputDecimal;

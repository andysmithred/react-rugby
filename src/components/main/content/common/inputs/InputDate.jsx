import DatePicker from "react-date-picker";

const InputDate = ({ label, input, setInput }) => {
  return (
    <div className="input-group mb-3 input-group-sm">
      <span className="input-group-text bg-dark text-white w-25">
        {label}
      </span>
      <DatePicker
        className="form-control"
        onChange={setInput}
        value={input}
      />
    </div>
  );
};

export default InputDate;

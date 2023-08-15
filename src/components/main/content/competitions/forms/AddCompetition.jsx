import { useState } from "react";
import InputString from "../../common/inputs/InputString";
import InputCheckbox from "../../common/inputs/InputCheckbox";

const AddCompetition = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [complete, setComplete] = useState(false);
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const item = { name, complete };
    onAdd(item);
  };

  return (
    <form className="m-2 w-25" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Add Competition</h5>
      </div>
      <hr></hr>
      <InputString
        label="NAME"
        input={name}
        setInput={setName}
        placeholder="Add Name"
      />
      <InputCheckbox label="Complete" input={complete} setInput={setComplete} />
      <hr></hr>
      <input
        type="submit"
        value="Save Competition"
        className="btn btn-sm btn-outline-light"
      ></input>
    </form>
  );
};

export default AddCompetition;

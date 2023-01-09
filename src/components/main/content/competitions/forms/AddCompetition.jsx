import { useState } from "react";
import InputString from "../../common/InputString";

const AddCompetition = ({ onAdd }) => {
  const [name, setName] = useState("");
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const item = { name };
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

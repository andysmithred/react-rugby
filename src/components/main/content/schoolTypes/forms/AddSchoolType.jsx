import { useState } from "react";

const AddSchoolType = ({ onAddSchoolType }) => {
  const [type, setType] = useState("");
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddSchoolType({ type });
  };

  return (
    <form className="m-2 w-25" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Add School Type</h5>
      </div>
      <hr></hr>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text bg-dark text-white w-25">Type</span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>
      <hr></hr>
      <input
        type="submit"
        value="Save School Type"
        className="btn btn-sm btn-outline-light"
      ></input>
    </form>
  );
};

export default AddSchoolType;

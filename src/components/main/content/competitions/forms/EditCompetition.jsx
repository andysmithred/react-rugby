import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import InputString from "../../common/inputs/InputString";
import InputCheckbox from "../../common/inputs/InputCheckbox";


const EditCompetition = ({ onEdit }) => {
  const item = useSelector((state) => state.competitions.item);
  const [name, setName] = useState(item.name);
  const [complete, setComplete] = useState(item.complete);
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onEdit({
      competitionId: item.competitionId,
      name,
      complete,
    });
  };

  return (
    <form className="m-2 w-25" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Edit Competition</h5>
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

export default EditCompetition;

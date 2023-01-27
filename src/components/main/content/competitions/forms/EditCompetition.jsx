import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import InputString from "../../common/inputs/InputString";

const EditCompetition = ({ onEdit }) => {
  const item = useSelector((state) => state.competitions.item);
  const [name, setName] = useState(item.name);
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onEdit({
      competitionId: item.competitionId,
      name,
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

import { useSelector } from "react-redux";

const DeleteCompetition = ({ onDelete, onCancel }) => {
  const item = useSelector((state) => state.competitions.item);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onDelete(item.competitionId);
  };

  return (
    <form className="m-2 w-50" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Delete Competition</h5>
      </div>
      <hr></hr>
      <div className="row ms-1">
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">ID</div>
          <div className="value">{item.competitionId}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">NAME</div>
          <div className="value">{item.name}</div>
        </div>
      </div>
      <hr></hr>
      <input
        type="submit"
        value="Delete Competition"
        className="btn btn-sm btn-outline-light"
      ></input>
      <input
        type="button"
        value="Cancel"
        className="btn btn-sm btn-outline-light ms-2"
        onClick={onCancel}
      ></input>
    </form>
  );
};

export default DeleteCompetition;

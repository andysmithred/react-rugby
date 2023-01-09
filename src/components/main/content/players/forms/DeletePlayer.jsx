import { useSelector } from "react-redux";

const DeletePlayer = ({ onDelete, onCancel }) => {
  const item = useSelector((state) => state.players.item);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onDelete(item.playerId);
  };

  const convertDate = date => {
    return new Date(date).toDateString();
  }

  return (
    <form className="m-2 w-50" onSubmit={handleFormSubmit}>
      <div className="m-2">
        <h5>Delete Player</h5>
      </div>
      <hr></hr>
      <div className="row ms-1">
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">ID</div>
          <div className="value">{item.playerId}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">FULL NAME</div>
          <div className="value">{item.fullName}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">FIRST NAME</div>
          <div className="value">{item.firstName}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">LAST NAME</div>
          <div className="value">{item.lastName}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">NUMBER</div>
          <div className="value">{item.springbokNo ? item.springbokNo : "--"}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">DATE OF BIRTH</div>
          <div className="value">{item.dateOfBirth ? convertDate(item.dateOfBirth) : "--"}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">DATE OF DEATH</div>
          <div className="value">{item.dateOfDeath ? convertDate(item.dateOfDeath) : "--"}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">WEIGHT</div>
          <div className="value">{item.weight ? item.weight : "--"}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">HEIGHT</div>
          <div className="value">{item.height ? item.height : "--"}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">CITY</div>
          <div className="value">{item.city ? item.city.name : "--"}</div>
        </div>
        <div className="col-lg-6 pt-2 city-details-item">
          <div className="label">DECEASED</div>
          <div className="value">{item.deceased}</div>
        </div>
      </div>
      <hr></hr>
      <input
        type="submit"
        value="Delete Player"
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

export default DeletePlayer;

import "./ListSmallTile.css";

const ListSmallTile = ({ id, label, icon, onItemClick }) => {
  return (
    <div
      className="d-flex flex-row p-1 list-small-tile"
      onClick={() => onItemClick(id)}
    >
      <img src={icon} className="mt-2 image" alt={label} />
      <div className="ms-2 mt-1">
        <div className="title">{label}</div>
      </div>
    </div>
  );
};

export default ListSmallTile;

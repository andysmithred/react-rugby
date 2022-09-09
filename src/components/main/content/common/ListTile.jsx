import "./ListTile.css";

const ListTile = ({ id, primary, secondary, icon, onItemClick }) => {
  return (
    <div
      className="d-flex flex-row p-1 list-tile"
      onClick={() => onItemClick(id)}
    >
      <img src={icon} className="mt-2 image" alt={primary} />
      <div className="ms-2">
        <div className="title">{primary}</div>
        <div className="subtitle">{secondary}</div>
      </div>
    </div>
  );
};

export default ListTile;

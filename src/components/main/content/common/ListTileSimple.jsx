import "./ListTileSimple.css";

// TODO:AS -> remove there is ListSmallTile


const ListTileSimple = ({ id, label, icon, onItemClick }) => {
  return (
    <div
      className="d-flex flex-row p-1 list-tile-simple"
      onClick={() => onItemClick(id)}
    >
      <img src={icon} className="mt-1 image" alt={label} />
      <div className="ms-2">
        <div className="title">{label}</div>
      </div>
    </div>
  );
};

export default ListTileSimple;

import Icon from "../../../utils/Icon";
import "./CityTile.css";

const CityTile = ({ city, icon }) => {
    const handleItemClick = (city) => {
        console.log(`${city.name}`)
    //   this.props.fetchPlace(place.id);
    //   this.props.setCategory(category);
    };

  return (
    <div className="city-tile" onClick={() => handleItemClick(city)}>
      <div>
        <Icon icon={icon} style={{ color: "white", size: "30px" }} />
      </div>
      <div className="details">
        <div className="title">{city.name}</div>
        <div className="subtitle">{city.region}</div>
      </div>
    </div>
  );
};

export default CityTile;

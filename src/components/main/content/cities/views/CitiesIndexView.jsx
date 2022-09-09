import CitiesHeader from "../header/CitiesHeader";
import CitiesGrid from "../index/CitiesGrid";
import "./CitiesViews.css";

const CitiesIndexView = () => {
    return (
      <div className="d-flex flex-column city-view">
        <CitiesHeader menu_items={["Details", "New"]} />
        <CitiesGrid />
      </div>
    );
}

export default CitiesIndexView;

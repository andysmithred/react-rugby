
import RegionsHeader from "../header/RegionsHeader";
import RegionsGrid from "../index/RegionsGrid";
import "./RegionsViews.css";

const RegionsIndexView = () => {
  return (
    <div className="d-flex flex-column region-view">
        <RegionsHeader menu_items={["Details", "New"]} />
        <RegionsGrid />
    </div>
  );
};

export default RegionsIndexView;

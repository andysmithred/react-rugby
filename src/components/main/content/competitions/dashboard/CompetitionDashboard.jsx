import { useSelector } from "react-redux";

import ItemHeader from "../../common/ItemHeader";
import CompetitionDetails from "./CompetitionDetails";

import "./CompetitionDashboard.css";

const CompetitionDashboard = () => {
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Competitions")
  );
  const fetching = useSelector((state) => state.competitions.fetchingItem);
  const item = useSelector((state) => state.competitions.item);

  if (fetching) {
    return <div>LOADING...</div>;
  }

  if (item) {
    return (
      <div className="pt-1 ps-1 competition-dashboard">
        <ItemHeader label={item.name} category={category} />
        <div className="row">
          <div className="col-lg-4">
            <CompetitionDetails item={item} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="competition-dashboard">No competition found</div>;
  }
};

export default CompetitionDashboard;

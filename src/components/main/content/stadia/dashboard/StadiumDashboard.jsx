import { useSelector } from "react-redux";

import StadiumHeader from "./StadiumHeader";
import StadiumDetails from "./StadiumDetails";

import "./StadiumDashboard.css";

const StadiumDashboard = () => {
  const fetching = useSelector((state) => state.stadia.fetchingItem);
  const item = useSelector((state) => state.stadia.item);

  if (fetching) {
    return <div>LOADING...</div>;
  }

  if (item) {
    return (
      <div className="pt-1 ps-1 stadium-dashboard">
        <StadiumHeader item={item} />
        <div className="row">
          <div className="col-lg-4">
            <StadiumDetails item={item} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="stadium-dashboard">No stadium found</div>;
  }
};

export default StadiumDashboard;
